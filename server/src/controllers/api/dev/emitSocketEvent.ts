import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import socket from '@src/socket'

class Controller extends BaseController {
  requestValidationSchema = {
    body: this.Joi.object({
      sids: this.Joi.array().items(this.Joi.string().required()),
      event: this.Joi.string().required(),
      payload: this.Joi.any(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const { sids, event, payload } = req.body

    const sockets = await socket.getConnectedSockets(sids)
    socket.emitToSpecificSockets(sockets, event, payload)

    this.sendResponse(req, res, {
      data: {
        sockets: sockets.map(ele => ele.id),
        event,
        payload,
      },
    })
  }
}

export default new Controller()
