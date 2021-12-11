import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'

class Controller extends BaseController {
  requestValidationSchema = {
    query: this.Joi.object({
      page: this.Joi.number().positive().integer(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const { page } = req.query as any

    const data = await this.services.chat.getMessages(page)

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
