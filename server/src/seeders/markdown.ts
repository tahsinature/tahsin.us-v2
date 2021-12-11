import Markdown, { IMarkdownDoc } from '@root/src/models/Markdown'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'
import faker from 'faker'

class Seeder extends BaseSeeder<IMarkdownDoc> {
  model = Markdown

  public async createMany(count: number) {
    await Markdown.deleteMany({})
    const all = []

    for (const _i of Array(count)) {
      const data = await this.createOne({})
      all.push(data)
    }

    return all
  }

  public createOne({
    title = faker.lorem.words(5),
    display = false,
    content = `######test content\n${faker.lorem.sentences(10)}`,
    description = faker.lorem.sentences(3),
  }: {
    title?: string
    display?: boolean
    content?: string
    description?: string
  }) {
    return Markdown.create({
      display,
      content,
      title,
      description,
    })
  }
}

export default new Seeder()
