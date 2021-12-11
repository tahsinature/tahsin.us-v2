import { repositories } from '@src/repositories'
import _ from 'lodash'
import { IConnection } from '@src/models/Connection'
import axios from 'axios'

class Service {
  async initVisitorConnection(connectionId: string, ip: string) {
    const isNewConnection = !(await this.doesConnectionExists(connectionId))
    const connection = await repositories.connection.findOrCreateConnectionById(connectionId)
    await repositories.connection.updateIpInfo(connection, ip)

    return { connection, isNewConnection }
  }

  async doesConnectionExists(connectionId: string) {
    const connection = await repositories.connection.findById(connectionId)
    return Boolean(connection)
  }

  async getConnectionById(connectionId: string) {
    const connection = await repositories.connection.findById(connectionId)
    return connection
  }

  async modifyConnection(connectionId: string, data: IConnection) {
    const connection = await this.getConnectionById(connectionId)
    if (!connection) throw new Error('connection not found')
    const updatedConnection = await repositories.connection.modify(connection, data)
    return updatedConnection
  }

  async getConnections(options: { excludedIps: string[] }) {
    const connections = await repositories.connection.getAll({ excludedIps: options.excludedIps })
    return connections.map(ele => ({
      _id: ele._id.toString(),
      ip: ele.ip,
      name: ele.name,
      socketId: ele.socketId,
      lookUpData: ele.lookUpData,
      role: ele.role,
      createdAt: ele.createdAt,
    }))
  }

  async getRequests(query: { ipexclude?: string; after?: string; compact?: boolean }) {
    let excludeIps: string[] = []

    if (query.ipexclude) excludeIps = query.ipexclude.split(',')

    let data = await repositories.request.query({ ips: excludeIps, after: query.after })

    if (query.compact)
      data = data.map(ele => {
        const transformed = { ...ele.toJSON() }

        if (ele.lookUpData) {
          Object.assign(transformed, { country: ele.lookUpData.country_name, city: ele.lookUpData.city })
        }
        delete transformed.lookUpData

        return transformed as any
      })

    return data
  }

  async getIpInfo(ip: string) {
    const map: any = {}
    try {
      await axios
        .get(`https://demo.ip-api.com/json/${ip}`, { headers: { origin: `https://ip-api.com` } })
        .then(({ data }) => (map['res1'] = data))
        .catch(err => (map['res1'] = err.message))

      await axios
        .get(`https://api.ipgeolocation.io/ipgeo?include=hostname&ip=${ip}`, { headers: { referer: `https://ipgeolocation.io/` } })
        .then(({ data }) => (map['res2'] = data))
        .catch(err => (map['res2'] = err.message))

      await axios
        .get(`https://ipinfo.io/widget/${ip}`, { headers: { referer: `https://ipinfo.io/` } })
        .then(({ data }) => (map['res3'] = data))
        .catch(err => (map['res3'] = err.message))

      return map
    } catch (error) {
      console.log(error.response)
    }
  }
}

export default new Service()
