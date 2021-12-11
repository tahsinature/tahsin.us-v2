import { Document, Schema, model } from 'mongoose'

export interface ITool {
  title: string
  description: string
  image: string
  display: boolean
  url?: string
}

export interface IToolDoc extends ITool, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    display: { type: Boolean, required: true, default: false },
    image: { type: String, required: true },
    url: { type: String },
  },
  { timestamps: true },
)

const Markdown = model<IToolDoc>('Tool', schema)

export default Markdown
