import { repositories } from '@src/repositories'

class Service {
  async getBasicData() {
    const writings = await repositories.markdown.getDisplay()
    const tools = await repositories.tool.getDisplay()
    const personal = {
      name: 'Mohammad Tahsin',
      email: 'tahsinuc@gmail.com',
      profession: 'Software Developer',
      avatar: 'https://avatars2.githubusercontent.com/u/41298152',
    }

    const data = {
      personal,
      writings,
      tools,
    }

    return data
  }
}

export default new Service()
