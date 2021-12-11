import Connection, { IConnectionDoc } from '@root/src/models/Connection'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'
import faker from 'faker'

class Seeder extends BaseSeeder<IConnectionDoc> {
  model = Connection

  public async createMany(ips?: string[]) {
    if (ips) ips = Array.from({ length: 3 }, () => faker.internet.ip())
    await Connection.deleteMany({})
    const all = []

    for (const ip of ips) {
      const data = await this.createOne(ip)
      all.push(data)
    }

    return all
  }

  public async createOne(ip: string) {
    const doc = await Connection.create({
      ip,
      socketId: faker.random.uuid(),
    })
    return doc
  }
}

export default new Seeder()
