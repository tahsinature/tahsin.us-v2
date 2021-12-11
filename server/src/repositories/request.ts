import Request, { IRequest } from '@root/src/models/Request'
import moment from 'moment'

class Repository {
  private model = Request

  createNew(data: IRequest) {
    return this.model.create(data)
  }

  getAll() {
    return this.model.find()
  }

  getIncludingIp(ips: string[]) {
    return this.model.find({ ip: { $in: ips } })
  }

  query(options: { ips?: string[]; after?: string }) {
    const toExclude = options.ips || []
    let after: Date
    if (options.after) after = moment(options.after).toDate()
    return this.model.find({
      ip: { $nin: toExclude },
      ...(options.after ? { createdAt: { $gte: after } } : {}),
    })
  }
}

export default new Repository()
