import Markdown from '@src/models/Markdown'

class Repository {
  private model = Markdown

  getAll() {
    return this.model.find()
  }

  getById(id: string) {
    return this.model.findById(id)
  }

  getDisplay() {
    return this.model.find({ display: true })
  }
}

export default new Repository()
