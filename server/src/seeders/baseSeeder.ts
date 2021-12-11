import { Document, Model } from 'mongoose'

export abstract class BaseSeeder<T extends Document> {
  abstract model: Model<T>

  findAll() {
    return this.model.find()
  }

  findById(id: string) {
    return this.model.findById(id)
  }
}
