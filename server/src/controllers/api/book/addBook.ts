import { BaseController } from '@src/controllers/api/baseController'
import { Request, Response } from 'express'
import Joi from 'joi'
import Book from '../../../models/Book'

class Controller extends BaseController {
  requestValidationSchema = {
    body: Joi.object({
      name: Joi.string().required(),
      author: Joi.string().required(),
    }).required(),
    query: Joi.object({}).required(),
    header: Joi.object({}).required().unknown(),
  }

  requestHandler = async (req: Request, res: Response) => {
    await this.validateRequest(req)

    const { name, author } = req.body

    const book = new Book({ name, author })
    await book.save()

    res.send({
      message: 'Saved',
      book: book.toJSON(),
    })
  }
}

export default new Controller()
