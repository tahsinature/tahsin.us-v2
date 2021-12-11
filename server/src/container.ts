import express from 'express'
import 'express-async-errors'
// import { closeFirebase } from '@src/firebase'
import router from '@src/router'
import MongoConnection from '@src/mongo-connection'
import { seed } from '@src/seeders'
import { validateConfiguration } from '@root/src/config'
import redis from '@root/src/redis'

class Container {
  public readonly app = express()
  public seed = seed
  private readonly mongoConnection = new MongoConnection()

  public async load() {
    validateConfiguration()
    this.app.use(router)
    await this.mongoConnection.connect()
    await redis.verifyConnection()
  }

  public async stop() {
    await this.mongoConnection.close()
    await redis.closeConnection()
    // await closeFirebase()
  }

  public async resetResources() {
    await this.mongoConnection.dropMongoDB()
  }
}

export = Container
