import Message, { IMessage } from '@src/models/Message'

class Repository {
  private model = Message

  createNew(data: IMessage) {
    return Message.create(data)
  }

  getAll(authorId: string) {
    return this.model.find({ author: authorId })
  }

  getByChatId(chatId: string, page: number) {
    const itemPerPage = 10
    return this.model
      .find({ chatId })
      .limit(itemPerPage)
      .skip((page - 1) * itemPerPage)
  }

  getAllVisitorMsgsForAdmin() {
    return this.model.aggregate([
      {
        $group: {
          _id: {
            author: '$author',
          },
          msgs: {
            $push: {
              _id: '$_id',
              type: '$type',
              content: '$content',
              createdAt: '$createdAt',
            },
          },
        },
      },
    ])
  }
}

export default new Repository()
