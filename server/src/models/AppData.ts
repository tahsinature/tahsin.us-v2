import { Document, Schema, model } from 'mongoose'

export interface IAppDate {
  tools: {
    title: string
    description: string
    image: string
    display: boolean
  }[]
}

export interface IAppDataDoc extends IAppDate, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema({
  tools: { type: Object, required: true },
})

const AppData = model<IAppDataDoc>('AppData', schema)

export default AppData
