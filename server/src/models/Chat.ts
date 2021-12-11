import { Document, Types, Schema, model } from 'mongoose'

export interface IChat {
  participants: string[]
}

export interface IChatDoc extends IChat, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema(
  {
    participants: [{ type: String, required: true }],
  },
  { timestamps: true },
)

const Chat = model<IChatDoc>('Chat', schema)

export default Chat
