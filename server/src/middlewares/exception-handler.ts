import { NextFunction, Request, Response } from 'express'
import flags from '@root/src/errors/flags'
import ApplicationError from '@root/src/errors/application-error'
import logger from '@root/src/logger'

export default async (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) return next(err)

  if (err instanceof ApplicationError) res.status(err.status).json(err)
  else {
    res.status(500).json(new ApplicationError({ flag: flags.INTERNAL_SERVER_ERROR, httpCode: 500 }))
    logger.log({ level: 'error', message: 'Error in request handler', error: err })
  }
}
