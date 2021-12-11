import { TestPack } from '@root/src/__tests/utility/testPack'

const tp = new TestPack()

beforeAll(async () => await tp.loadContainer())
afterAll(async () => await tp.stopContainer())

const getURL = (id: string) => `/visitor/md/${id}`

describe('get markdown api', () => {
  it('should get invalid url param error', async () => {
    const connection = await tp.seeders.connection.createOne('0.0.0.0')
    const res = await tp.request(tp.app).get(getURL('foo')).set('connection-id', connection.id)

    expect(res.status).toBe(400)
    expect(res.body.flag).toBe(tp.flags.INVALID_URL_PARAM)
  })

  it('should a single markdown', async () => {
    const connection = await tp.seeders.connection.createOne('0.0.0.0')
    const markdown = await tp.seeders.markdown.createOne({})
    const res = await tp.request(tp.app).get(getURL(markdown._id.toString())).set('connection-id', connection.id)

    expect(res.status).toBe(200)
    expect(res.body.data).toMatchObject(tp.utility.stringifyDbDoc(markdown))
  })
})
