import socketIo, { Socket, Server, Namespace } from 'socket.io'
import { Server as HttpServer } from 'http'
import { instrument } from '@socket.io/admin-ui'

let io: socketIo.Server

class MySocket {
  public namespaces: {
    visitor: Namespace
    admin: Namespace
  }

  initSocket = async (server: HttpServer) => {
    io = new Server(server, {
      cors: {
        origin: ['http://localhost:3000', 'https://admin.socket.io', 'https://tahsinature.me', 'https://amritb.github.io/socketio-client-tool', 'https://hoppscotch.io'],
        methods: ['GET', 'POST'],
        allowedHeaders: ['connection-id'],
        credentials: true,
      },
    })

    this.namespaces = {
      visitor: io.of('visitor'),
      admin: io.of('admin'),
    }

    instrument(io, { auth: false })

    return io
  }

  getConnectedSockets = async (sidsToFilter?: string[]) => {
    this.makeSureInitDone()

    const allSocketsMap = [...this.namespaces.admin.sockets, ...this.namespaces.visitor.sockets]

    return allSocketsMap.map(([_, socket]) => {
      if (!sidsToFilter) return socket
      else if (sidsToFilter.includes(socket.id)) return socket
    })
  }

  emitToSpecificSockets(sockets: Socket[], event: string, payload?: any) {
    for (const socket of sockets) {
      socket.emit(event, payload)
    }
  }

  disconnectSockets = (sockets: Socket[]) => {
    for (const socket of sockets) {
      socket.disconnect()
    }
  }

  getIO = () => {
    this.makeSureInitDone()
    return io
  }

  private makeSureInitDone = () => {
    if (!io) throw new Error('io not initialized')
  }
}

export default new MySocket()
