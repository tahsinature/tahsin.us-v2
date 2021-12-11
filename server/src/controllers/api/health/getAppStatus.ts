import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import moment from 'moment'

class Controller extends BaseController {
  requestValidationSchema = {}

  requestHandler = async (req: Request, res: Response) => {
    this.sendResponse(req, res, {
      data: {
        status: 'OK',
        upTime: moment.duration(process.uptime(), 'second').humanize(),
      },
    })
  }
}

export default new Controller()
