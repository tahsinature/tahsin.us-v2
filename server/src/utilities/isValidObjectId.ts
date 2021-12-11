import mongoose from 'mongoose'

const isValidObjectId = (id: string) => {
  return mongoose.isValidObjectId(id)
}

export default isValidObjectId
