import Chat from '@src/models/Chat'

class Repository {
  private model = Chat

  getChatIds(authorId: string[]) {
    return this.model.find({ participants: { $in: authorId } })
  }

  getAllChats() {
    return this.model.find()
  }

  initWithAdmin(authorId: string) {
    return this.model.create({ participants: [authorId, 'admin'] })
  }
}

export default new Repository()
