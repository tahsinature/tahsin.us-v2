import mockingoose from 'mockingoose'
import BookModel from '../../../models/Book'

describe('test mongoose User model', () => {
  test('should return the doc with findById', () => {
    const returnValue = {
      _id: '507f191e810c19729de860ea',
      name: 'name',
      author: 'author',
    }

    mockingoose(BookModel).toReturn(returnValue, 'findOne')

    return BookModel.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(returnValue)
    })
  })
})
