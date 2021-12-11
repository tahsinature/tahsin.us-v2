import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'

class Controller extends BaseController {
  requestValidationSchema = {
    query: Joi.object({
      visitorConnectionId: this.Joi.string(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)

    const visitorConnectionId = req.query.visitorConnectionId as string

    const data = await this.services.chat.getVisitorChatIdForAdmin(visitorConnectionId)

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
