import Message, { IMessageDoc } from '@root/src/models/Message'
import faker from 'faker'
import { IConnectionDoc } from '@src/models/Connection'
import { IChatDoc } from '@root/src/models/Chat'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'

class Seeder extends BaseSeeder<IMessageDoc> {
  model = Message

  public async seed(chats: IChatDoc[], count: number) {
    await Message.deleteMany({})
    const all = []

    for (const chat of chats) {
      for (const _i of Array(count)) {
        const data = await this.createOne(chat)
        all.push(data)
      }
    }

    return all
  }

  public createOne(chat: IChatDoc) {
    return Message.create({
      chatId: chat.id,
      type: 'text',
      content: faker.lorem.sentence(),
      author: 'static for now',
    })
  }
}

export default new Seeder()
