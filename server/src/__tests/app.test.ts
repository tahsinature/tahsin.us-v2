import request from 'supertest'
import Container from '../container'

const container = new Container()
const { app } = container

// jest.mock('../src/models/Book')

describe('App Test', () => {
  test('GET /random-url should return 404', () => {
    // request(app).get('/reset').expect(404, done)
  })
  // test('GET /book/all should return 200', done => {
  //   request(app).get('/book/all').expect(200, done)
  // })
})
