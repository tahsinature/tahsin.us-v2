import Container from './container'
import logger from './logger'
import http from 'http'
import socket from '@root/src/socket'
import { initSocketRouts } from '@root/src/router'
import { repositories } from '@root/src/repositories'
import { config } from '@src/config'

class Server {
  constructor(private container: Container) {
    process.on('SIGINT', async () => {
      logger.info('Gracefully shutting down')
      await container.stop().finally(() => process.exit(1))
    })
  }

  public async run() {
    const port = config.app.appPort
    const server = new http.Server(this.container.app).listen(port)

    await socket.initSocket(server)
    await initSocketRouts()
    await repositories.connection.refreshSocketIds()

    console.log('\x1b[36m%s\x1b[0m', `🌏 Express server started at http://localhost:${port}`)
    console.log('\x1b[36m%s\x1b[0m', `⚙️  Swagger UI hosted at http://localhost:${port}/api-docs`)
  }
}

export = Server
