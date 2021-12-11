import { NextFunction, Request, Response } from 'express'
import Connection from '@src/repositories/connection'
import BadRequest from '../errors/bad-request'
import flags from '../errors/flags'

export default async (req: Request, res: Response, next: NextFunction) => {
  const { ip } = req

  const connection = await Connection.justFindByIp(ip)
  if (!connection || !connection.socketId) throw new BadRequest({ flag: flags.SOCKET_CONNECTION_NOT_FOUND })

  res.locals.connection = connection
  next()
}
