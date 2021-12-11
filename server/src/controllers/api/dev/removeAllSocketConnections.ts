import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import socket from '@src/socket'

class Controller extends BaseController {
  requestValidationSchema = {
    body: this.Joi.object({
      sids: this.Joi.array().items(this.Joi.string().required()),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const sids: string[] = req.body.sids

    const sockets = await socket.getConnectedSockets(sids)
    socket.disconnectSockets(sockets)

    this.sendResponse(req, res, { data: sockets.map(ele => ele.id), message: 'following sockets disconnected successfully' })
  }
}

export default new Controller()
