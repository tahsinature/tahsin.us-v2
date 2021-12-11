import { IConnection } from '@root/src/models/Connection'
import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'

class Controller extends BaseController {
  requestValidationSchema = {
    body: this.Joi.object({
      disableLog: this.Joi.boolean().required(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const connectionId = req.params.id

    const payload: IConnection = {
      disableLog: req.body.disableLog || false,
    }

    const data = await this.services.connection.modifyConnection(connectionId, payload)
    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
