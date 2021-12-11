import Tool from '@src/models/Tool'

class Repository {
  private model = Tool

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
