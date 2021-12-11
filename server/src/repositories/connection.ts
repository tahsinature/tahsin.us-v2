import socket from '@root/src/socket'
import Connection, { IConnection, IConnectionDoc } from '@src/models/Connection'
import _ from 'lodash'
import { isIP } from 'net'
import axios from 'axios'
import utilities from '@src/utilities'

class Repository {
  private model = Connection

  async findById(id: string) {
    let connection = null
    if (utilities.isValidObjectId(id)) connection = await this.model.findById(id)
    return connection
  }

  async modify(connectionInstance: IConnectionDoc, data: IConnection) {
    const updated = await connectionInstance.updateOne(data, { new: true })
    return updated
  }

  async justFindByIp(ip: string) {
    return this.model.findOne({ ip })
  }

  findOrCreateConnectionById = async (id: string) => {
    let connection: IConnectionDoc
    if (utilities.isValidObjectId(id)) connection = await this.findById(id)

    if (!connection) connection = await this.model.create({})
    return connection
  }

  updateIpInfo = async (connection: IConnectionDoc, ip: string) => {
    let lookUpData = null
    ip = _.last(ip.split(':'))

    const isValidIPv4 = isIP(ip) === 4
    if (isValidIPv4) {
      const { data } = await axios.get(`https://ipapi.co/${ip}/json`)
      lookUpData = data
    } else ip = `invalid ip (${ip})`

    connection.ip = ip
    connection.lookUpData = lookUpData
    await connection.save()

    return connection
  }

  refreshSocketIds = async () => {
    const connectSids = (await socket.getConnectedSockets()).map(ele => ele.id)
    const connections = await Connection.find()

    for (const connection of connections) {
      if (!connectSids.includes(connection.socketId)) await this.removeSocket(connection)
    }
  }

  async updateSocketId(connection: IConnectionDoc, socketId: string) {
    connection.socketId = socketId
    await connection.save()
  }

  async removeSocket(connectionInstance: IConnectionDoc) {
    connectionInstance.socketId = null
    await connectionInstance.save()
  }

  async updateRole(connection: IConnectionDoc, role: string) {
    connection.role = role
    await connection.save()
  }

  async getAll({ activeOnly = false, excludedIps = [''] }) {
    const query = activeOnly ? { socketId: { $exists: true } } : {}
    return Connection.find({ ...query, ip: { $nin: excludedIps } }).sort({ createdAt: -1 })
  }
}

export default new Repository()
