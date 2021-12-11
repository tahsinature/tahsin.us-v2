import { IApplicationErrorOption } from '@root/src/interfaces/IMixed'
import ApplicationError from './application-error'

export default class Unauthorized extends ApplicationError {
  constructor(option?: IApplicationErrorOption) {
    super({
      ...option,
      message: option.message || 'Unauthorized',
      httpCode: 401,
    })
  }
}
