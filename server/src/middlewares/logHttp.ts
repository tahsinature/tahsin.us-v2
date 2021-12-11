import configManager from '@root/src/config/config-manager'
import { httpLogger } from '@root/src/logger'
import { IConnectionDoc } from '@root/src/models/Connection'
import telegram from '@root/src/telegram'
import { NextFunction, Request, Response } from 'express'
import _ from 'lodash'
import faker from 'faker'
import redis from '@src/redis'
import { services } from '@src/services'

const { config } = configManager

interface IContent {
  url: string
  method: string
  reqHeaders: string
  resHeaders: string
  queryParams: string
  body: string
  status: number
  response: any
  connection: {
    ip: string
    country: string
    lookupInfo: string
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const { url, body, headers, method, query } = req

  const connection = res.locals.connection as IConnectionDoc
  const { disableLog } = connection

  if (disableLog) return next()

  const original = res.send
  const custom: any = (data: any) => {
    res.send = original
    res.send(data)

    const ip = connection.ip as string
    const country = _.get(connection, 'lookUpData.country_name', null)
    const status = res.statusCode

    const dataToLog: IContent = {
      url,
      method,
      reqHeaders: JSON.stringify(headers),
      resHeaders: JSON.stringify(Object.assign({}, res.getHeaders())),
      queryParams: JSON.stringify(query),
      body: JSON.stringify(body),
      status,
      response: JSON.stringify(data),
      connection: {
        ip,
        country,
        lookupInfo: JSON.stringify(connection.lookUpData),
      },
    }

    let level: 'info' | 'error' = 'info'
    if (dataToLog.status >= 500) level = 'error'

    try {
      httpLogger.log(level, dataToLog)
      if (config.app.isProductionEnv) {
        services.connection.getIpInfo(ip).then(data => {
          const redisKey = faker.random.uuid()
          redis.client.set(redis.keys.JSON_DATA(redisKey), JSON.stringify(data)).then(() => {
            telegram.sendMsg(telegram.templates.httpReq({ country, ip, method, status, url, redisKey }))
          })
        })
      }
    } catch (error) {
      console.error('something went wrong on http log middleware', error.message)
    }
  }

  res.send = custom
  next()
}
