import flags from '@src/errors/flags'
import { IApplicationErrorOption } from '@root/src/interfaces/IMixed'

export default class ApplicationError extends Error {
  public message: string = 'ApplicationError'

  public status: number = 500

  public flag: string

  constructor(option: IApplicationErrorOption = {}) {
    super()
    if (option.httpCode) this.status = option.httpCode
    if (option.message) this.message = option.message
    if (option.flag) this.flag = option.flag
  }
}
