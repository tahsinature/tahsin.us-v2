import { Document, Schema, model } from 'mongoose'
import connectionRoles from '@src/constants/connectionRoles'

export interface IConnection {
  ip?: string
  name?: string
  lookUpData?: any
  socketId?: string | null
  role?: string
  disableLog?: string
}

export interface IConnectionDoc extends IConnection, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema(
  {
    ip: { type: String },
    name: { type: String, default: 'Anonymous' },
    lookUpData: { type: Schema.Types.Mixed, default: null },
    socketId: { type: String, default: null },
    role: { type: String, enum: Object.values(connectionRoles) },
    disableLog: { type: Boolean, default: false },
  },
  { timestamps: true },
)

const Connection = model<IConnectionDoc>('Connection', schema)

export default Connection
