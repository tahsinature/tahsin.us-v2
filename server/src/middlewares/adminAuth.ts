import flags from '@root/src/errors/flags'
import { NextFunction, Request, Response } from 'express'
import { config } from '@src/config'
import Unauthorized from '@root/src/errors/unauthorized'

export default async (req: Request, res: Response, next: NextFunction) => {
  if (config.app.adminSecret !== req.headers.authorization) throw new Unauthorized({ flag: flags.NOT_ADMIN })

  next()
}
