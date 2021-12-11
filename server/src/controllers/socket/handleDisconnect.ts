import Connection from '@src/repositories/connection'
import { IConnectionDoc } from '@src/models/Connection'

class SocketController {
  async handle(connection: IConnectionDoc) {
    const { socketId } = connection
    await Connection.removeSocket(connection)

    console.log(`${socketId} disconnected`)
  }
}

export default new SocketController()
