import { Document, Schema, model } from 'mongoose'

export interface IRequest {
  ip: string
  url: string
  lookUpData?: any
}

export interface IRequestDoc extends IRequest, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema(
  {
    ip: { type: String, required: true },
    url: { type: String, required: true },
    lookUpData: { type: Schema.Types.Mixed },
  },
  { timestamps: true },
)

const Request = model<IRequestDoc>('Request', schema)

export default Request
