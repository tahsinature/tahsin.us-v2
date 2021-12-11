
import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import connection from '@root/src/services/connection'

class Controller extends BaseController {
  requestValidationSchema = {
    query: this.Joi.object({
      excludeIps: this.Joi.string(),
    }).required(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)
    const excludeIps = (req.query.excludeIps as string) || ''

    const ipToExclude = excludeIps.split(',')

    const data = await connection.getConnections({ excludedIps: ipToExclude })

    this.sendResponse(req, res, { data })
  }
}

export default new Controller()
