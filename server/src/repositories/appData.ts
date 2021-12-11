import AppData from '@root/src/models/AppData'

class Repository {
  private model = AppData

  async get() {
    return this.model.findOne()
  }
}

export default new Repository()
