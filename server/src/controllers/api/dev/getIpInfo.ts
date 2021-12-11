import { config } from '@root/src/config'
import redis from '@root/src/redis'
import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import faker from 'faker'

class Controller extends BaseController {
  requestValidationSchema = {
    params: this.Joi.object({
      ip: this.Joi.string().ip().required(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const ip = req.params.ip

    const data = await this.services.connection.getIpInfo(ip)
    const dataId = faker.random.uuid()
    await redis.client.set(redis.keys.JSON_DATA(dataId), JSON.stringify(data))

    this.sendResponse(req, res, { data: { dataId, redirect: `${config.app.host}/json/${dataId}` } })
  }
}

export default new Controller()
