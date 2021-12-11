import Connection from '@src/repositories/connection'
import connectionRoles from '@src/constants/connectionRoles'
import { NextFunction, Request, Response } from 'express'

const toAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const { connection } = res.locals
  if (!connection) throw new Error('found a request without connection in res.locals')

  await Connection.updateRole(connection, connectionRoles.admin)

  next()
}

const toVisitor = async (req: Request, res: Response, next: NextFunction) => {
  const { connection } = res.locals
  if (!connection) throw new Error('found a request without connection in res.locals')

  await Connection.updateRole(connection, connectionRoles.visitor)

  next()
}

const migrateConnection = {
  toAdmin,
  toVisitor,
}

export default migrateConnection
