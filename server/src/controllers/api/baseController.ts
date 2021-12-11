import BadRequest from '@src/errors/bad-request'
import flags from '@src/errors/flags'
import { Request, Response, RequestHandler } from 'express'
import Joi from 'joi'
import mongoose from 'mongoose'
import { services } from '@src/services'
import sendResponse from '@src/utilities/sendResponse'

interface IRequestValidationSchema {
  body?: Joi.Schema
  query?: Joi.Schema
  params?: Joi.Schema
  header?: Joi.Schema
}

export abstract class BaseController {
  abstract requestValidationSchema: IRequestValidationSchema
  public services = services
  public Joi = Joi

  async validateRequest(req: Request) {
    const { query, body, headers, params } = req

    if (this.requestValidationSchema.query)
      await this.requestValidationSchema.query.validateAsync(query).catch(error => {
        throw new BadRequest({ message: error.message, flag: flags.INVALID_QUERY_PARAM })
      })

    if (this.requestValidationSchema.body)
      await this.requestValidationSchema.body.validateAsync(body).catch(error => {
        throw new BadRequest({ message: error.message, flag: flags.INVALID_BODY })
      })

    if (this.requestValidationSchema.header)
      await this.requestValidationSchema.header.validateAsync(headers, { allowUnknown: true }).catch(error => {
        throw new BadRequest({ message: error.message, flag: flags.INVALID_HEADER })
      })

    if (this.requestValidationSchema.params)
      await this.requestValidationSchema.params.validateAsync(params, { allowUnknown: true }).catch(error => {
        throw new BadRequest({ message: error.message, flag: flags.INVALID_URL_PARAM })
      })
  }

  checkIfUrlParamIsObjectId(param: string) {
    const isValid = mongoose.isValidObjectId(param)
    if (!isValid) throw new BadRequest({ flag: flags.INVALID_URL_PARAM, message: 'url param is not valid object id' })
  }

  sendResponse = sendResponse

  requestHandler: RequestHandler
}
