import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'
// import { fcm } from '@src/firebase'
import BadRequest from '@src/errors/bad-request'
import flags from '@src/errors/flags'

class Controller extends BaseController {
  requestValidationSchema = {
    body: Joi.object({
      fcmToken: Joi.string().required(),
    }).required(),
    query: Joi.object({}).required(),
    header: Joi.object({}).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)

    // const { fcmToken } = req.body

    // await fcm.validateToken(fcmToken).catch(err => {
    //   throw new BadRequest({ flag: flags.INVALID_FCM_TOKEN, message: err.message })
    // })

    res.status(204).send()
  }
}

export default new Controller()
