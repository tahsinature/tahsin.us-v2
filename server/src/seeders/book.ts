import Book, { IBookDoc } from '@root/src/models/Book'
import { BaseSeeder } from '@root/src/seeders/baseSeeder'
import faker from 'faker'

class Seeder extends BaseSeeder<IBookDoc> {
  model = Book

  public async seed(count: number) {
    await Book.deleteMany({})
    const all = []

    for (const _i of Array(count)) {
      const corporateProductAddon = await this.createOne()
      all.push(corporateProductAddon)
    }

    return all
  }

  public createOne() {
    return Book.create({
      author: faker.name.findName(),
      name: `A book on ${faker.commerce.product()}`,
    })
  }
}

export default new Seeder()
