import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import utilities from '@src/utilities'
import redis from '@root/src/redis'
import NotFound from '@root/src/errors/not-found'

class Controller extends BaseController {
  requestValidationSchema = {
    params: this.Joi.object({
      id: this.Joi.string().uuid().required(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const id = req.params.id

    const data = await redis.client.get(redis.keys.JSON_DATA(id))
    if (data) this.sendResponse(req, res, { data: JSON.parse(data.toString()) })
    else throw new NotFound({ message: 'not found' })
  }
}

export default new Controller()
