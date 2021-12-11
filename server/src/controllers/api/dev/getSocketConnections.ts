import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import socket from '@src/socket'

class Controller extends BaseController {
  requestValidationSchema = {}

  requestHandler = async (req: Request, res: Response) => {
    const sockets = await socket.getConnectedSockets()

    this.sendResponse(req, res, {
      data: sockets.map(socket => ({
        sid: socket.id,
        connected: socket.connected,
        nsp: socket.nsp.name,
      })),
    })
  }
}

export default new Controller()
