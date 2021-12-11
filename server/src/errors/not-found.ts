import { IApplicationErrorOption } from '@root/src/interfaces/IMixed'
import ApplicationError from './application-error'

export default class NotFound extends ApplicationError {
  constructor(option?: IApplicationErrorOption) {
    super({
      ...option,
      message: option.message || 'Not Found',
      httpCode: 404,
    })
  }
}
