import { TestPack } from '@root/src/__tests/utility/testPack'

const tp = new TestPack()

beforeEach(async () => await tp.resetResources())
beforeAll(async () => await tp.loadContainer())
afterAll(async () => await tp.stopContainer())

describe('get connections api', () => {
  it('should get non admin error', async () => {
    const res = await tp.request(tp.app).get(`/admin/connections`)

    expect(res.status).toBe(401)
    expect(res.body.flag).toBe(tp.flags.NOT_ADMIN)
  })

  it('should get invalid param error', async () => {
    const res = await tp.request(tp.app).get(`/admin/connections?foo=bar`).set({
      authorization: process.env.ADMIN_SECRET,
    })

    expect(res.status).toBe(400)
    expect(res.body.flag).toBe(tp.flags.INVALID_QUERY_PARAM)
  })

  it('should get success response empty data', async () => {
    const res = await tp.request(tp.app).get(`/admin/connections`).set({
      authorization: process.env.ADMIN_SECRET,
    })

    expect(res.status).toBe(200)
    expect(res.body.data.length).toBe(0)
  })

  it('should get success response 1 data', async () => {
    const connection = await tp.seeders.connection.createOne('0.0.0.0')
    const res = await tp.request(tp.app).get(`/admin/connections`).set({
      authorization: process.env.ADMIN_SECRET,
    })

    expect(res.status).toBe(200)
    expect(res.body.data.length).toBe(1)

    expect(res.body.data[0]).toMatchObject({
      _id: connection._id.toString(),
      ip: connection.ip,
      name: connection.name,
      socketId: connection.socketId,
      lookUpData: connection.lookUpData,
      createdAt: connection.createdAt.toISOString(),
    })
  })

  it('should filter data', async () => {
    const connection = await tp.seeders.connection.createOne('0.0.0.0')
    const res = await tp.request(tp.app).get(`/admin/connections?excludeIps=${connection.ip}`).set({
      authorization: process.env.ADMIN_SECRET,
    })

    expect(res.status).toBe(200)
    expect(res.body.data.length).toBe(0)
  })
})
