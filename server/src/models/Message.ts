import { Types, Document, Schema, model } from 'mongoose'
import msgTypes from '@src/constants/msgTypes'

export interface IMessage {
  chatId: string
  type: 'text' | 'photo'
  content: string
  author: string
}

export interface IMessageDoc extends IMessage, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema(
  {
    chatId: { type: Types.ObjectId, ref: 'Chat', required: true },
    type: { enum: msgTypes, type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }, // ip,
  },
  { timestamps: true },
)

const Message = model<IMessageDoc>('Message', schema)

export default Message
