import Joi from 'joi'

interface IController {
  requestValidation: {
    body: Joi.Schema
    query: Joi.Schema
    headers: Joi.Schema
  }
}
