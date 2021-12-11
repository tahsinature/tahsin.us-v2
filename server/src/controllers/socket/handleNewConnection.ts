import { repositories } from '@root/src/repositories'
import socket from '@root/src/socket'

class SocketController {
  async handle(options: { socketId: string; connectionId: string }) {
    const connection = await repositories.connection.findOrCreateConnectionById(options.connectionId)
    if (connection.socketId) {
      const socketWithPreviousConnection = (await socket.getConnectedSockets([connection.socketId]))[0]

      if (socketWithPreviousConnection) {
        socket.disconnectSockets([socketWithPreviousConnection])
        console.log(`disconnecting socket: ${socketWithPreviousConnection.id}`)
      }
    }

    await repositories.connection.updateSocketId(connection, options.socketId)

    console.log(`connection created: ${connection.socketId}`)

    return connection
  }
}

export default new SocketController()
