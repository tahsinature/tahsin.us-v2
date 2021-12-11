import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'
import msgTypes from '@src/constants/msgTypes'

class Controller extends BaseController {
  requestValidationSchema = {
    body: Joi.object({
      content: Joi.string().required(),
      type: Joi.string().valid(...msgTypes),
      // .required(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)

    const { content, type } = req.body
    const { connection } = res.locals

    const data = await this.services.chat.sendMsgToAdmin(connection, { content })

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
