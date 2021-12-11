import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import utilities from '@src/utilities'

class Controller extends BaseController {
  requestValidationSchema = {
    body: this.Joi.object({
      connectionId: this.Joi.any(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const { connectionId } = req.body
    const ip = (req.headers['x-forwarded-for'] as string) || req.connection.remoteAddress
    const connection = await this.services.connection.initVisitorConnection(connectionId, ip)

    this.sendResponse(req, res, { data: connection })
  }
}

export default new Controller()
