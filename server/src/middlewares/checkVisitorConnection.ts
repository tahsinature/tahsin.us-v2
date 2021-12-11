import { NextFunction, Request, Response } from 'express'
import { repositories } from '@root/src/repositories'
import sendResponse from '@root/src/utilities/sendResponse'
import flags from '@root/src/errors/flags'

export default async (req: Request, res: Response, next: NextFunction) => {
  const connectionId = req.headers['connection-id'] as string

  try {
    if (!connectionId) throw new Error('connection not sent in header')
    const connection = await repositories.connection.findById(connectionId)
    if (!connection) throw new Error('connection not found in db by given header')

    res.locals.connection = connection
    next()
  } catch (error) {
    sendResponse(req, res, { flag: flags.CONNECTION_NOT_FOUND, status: 400 })
  }
}
