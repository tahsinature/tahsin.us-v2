import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'

class Controller extends BaseController {
  requestValidationSchema = {
    query: Joi.object({
      after: Joi.string().isoDate(),
      compact: Joi.boolean(),
      ipexclude: Joi.string().custom((ele: string) => {
        const all = ele.split(',')
        const isAllValidIp = all.every(ip => {
          const { error } = Joi.string().ip().validate(ip)
          return !error
        })

        if (!isAllValidIp) throw new Error('all ip is not valid')
      }),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const data = await this.services.connection.getRequests(req.query as any)

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
