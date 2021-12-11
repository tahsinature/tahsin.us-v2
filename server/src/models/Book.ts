import { Document, Schema, model } from 'mongoose'

export interface IBook {
  name: string
  author: string
}

export interface IBookDoc extends IBook, Document {
  createdAt: Date
  updatedAt: Date
}

const schema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
})

const Book = model<IBookDoc>('Book', schema)

export default Book
