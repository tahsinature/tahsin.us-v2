import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'
import msgTypes from '@src/constants/msgTypes'

class Controller extends BaseController {
  requestValidationSchema = {
    body: Joi.object({
      destination: Joi.string().required(),
      content: Joi.string().required(),
      type: Joi.string()
        .valid(...msgTypes)
        .required(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)

    const { content, type, destination } = req.body

    const data = await this.services.chat.sendMsgToVisitor(destination, { content })

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
