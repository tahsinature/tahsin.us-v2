import socketCheck from '@root/src/middlewares/socketCheck'
import migrateConnection from '@root/src/middlewares/migrateConnection'
import adminAuth from '@root/src/middlewares/adminAuth'
import checkVisitorConnection from '@root/src/middlewares/checkVisitorConnection'
import logHttp from '@root/src/middlewares/logHttp'
import { RequestHandler } from 'express'
import NotFound from '@root/src/errors/not-found'
import flags from '@root/src/errors/flags'
import exceptionHandler from '@root/src/middlewares/exception-handler'
import morgan from 'morgan'
import { config } from '@root/src/config'

class MiddlewareManager {
  public morgan = morgan('dev', { skip: () => config.app.isTestEnv })
  public socketCheck = socketCheck
  public migrateConnection = migrateConnection
  public adminAuth = adminAuth
  public checkVisitorConnection = checkVisitorConnection
  public logHttp = logHttp
  public routeNotFoundHandler: RequestHandler = (_req, _res, next) => next(new NotFound({ flag: flags.INVALID_URL }))
  public exceptionHandler = exceptionHandler
}

export default new MiddlewareManager()
