import Chat, { IChatDoc } from '@root/src/models/Chat'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'
import { IConnectionDoc } from '@src/models/Connection'

class Seeder extends BaseSeeder<IChatDoc> {
  model = Chat
  public async createMany(connections: IConnectionDoc[], count: number) {
    await Chat.deleteMany({})
    const all = []

    for (const connection of connections) {
      for (const _i of Array(count)) {
        const data = await this.createOne()
        all.push(data)
      }
    }

    return all
  }

  public createOne() {
    return Chat.create({
      participants: ['60a007b8a883f9d77a71c5ae'],
    })
  }
}

export default new Seeder()
