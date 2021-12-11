import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'

class Controller extends BaseController {
  requestValidationSchema = {
    params: Joi.object({
      type: Joi.string().required().valid('writings', 'tools'),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const { type } = req.params as any

    const data = await this.services.list.getList(type)

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
