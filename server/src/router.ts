import express, { Router } from 'express'
import middlewares from '@root/src/middlewares'
import controllers from '@root/src/controllers'
import { services } from '@src/services'
import socket from '@src/socket'
import morgan from 'morgan'
import cors from 'cors'
import compression from 'compression'
import path from 'path'

const router = Router()

router.use(cors())
router.use(morgan('dev'))
router.use(compression())
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }))

const healthRoutes = Router()
healthRoutes.get('/', controllers.api.health.getAppStatus.requestHandler)

const bookRouts = Router()
bookRouts.post('/add', controllers.api.book.addBook.requestHandler)
bookRouts.get('/all', controllers.api.book.getAllBooks.requestHandler)
bookRouts.get('/search', controllers.api.book.searchBook.requestHandler)

const visitorRoutes = Router()
visitorRoutes.post('/connection', controllers.api.visitor.connection.requestHandler)
visitorRoutes.use(middlewares.checkVisitorConnection)
visitorRoutes.use(middlewares.logHttp)
// visitorRoutes.use(middlewares.socketCheck)
// visitorRoutes.use(middlewares.migrateConnection.toVisitor)
visitorRoutes.get('/chats', controllers.api.chat.getChats.requestHandler)
visitorRoutes.get('/chats/:chatId', controllers.api.chat.getMsgs.requestHandler)
visitorRoutes.get('/messages', controllers.api.chat.getMsgs.requestHandler)
visitorRoutes.post('/messages', controllers.api.chat.msgToAdmin.requestHandler)
visitorRoutes.get('/basic-data', controllers.api.data.sendBasicData.requestHandler)
visitorRoutes.get('/list/:type', controllers.api.visitor.getList.requestHandler)
visitorRoutes.get('/md/:id', controllers.api.visitor.getMarkdown.requestHandler)
visitorRoutes.get('/json/:id', controllers.api.visitor.getJSON.requestHandler)

const adminRoutes = Router()
// adminRoutes.use(socketCheck)
// adminRoutes.use(migrateConnection.toAdmin)
adminRoutes.use(middlewares.adminAuth)
adminRoutes.get('/requests', controllers.api.admin.getRequests.requestHandler)
adminRoutes.post('/init', controllers.api.admin.init.requestHandler)
adminRoutes.get('/connections', controllers.api.admin.getConnections.requestHandler)
adminRoutes.put('/connections/:id', controllers.api.visitor.editConnection.requestHandler)
adminRoutes.get('/chats', controllers.api.admin.getChatsForAdmin.requestHandler)
adminRoutes.get('/chats/:chatId', controllers.api.chat.getMsgs.requestHandler)
adminRoutes.post('/messages', controllers.api.admin.msgToVisitor.requestHandler)

const devRoutes = Router()
devRoutes.get('/socket/sids', controllers.api.dev.getSocketConnections.requestHandler)
devRoutes.post('/socket/remove-connections', controllers.api.dev.removeAllSocketConnections.requestHandler)
devRoutes.post('/socket/emit', controllers.api.dev.emitSocketEvent.requestHandler)
devRoutes.get('/ipinfo/:ip', controllers.api.global.getIpInfo.requestHandler)

router.use('/health', healthRoutes)
router.use('/admin', adminRoutes)
router.use('/visitor', visitorRoutes)
router.use('/dev', devRoutes)
router.use('/book', bookRouts)

router.use(middlewares.routeNotFoundHandler)
router.use(middlewares.exceptionHandler)

/**
 * socket
 */
export const initSocketRouts = async () => {
  const visitorNsp = socket.namespaces.visitor

  visitorNsp.use(async (socket, next) => {
    const connectionId = socket.request.headers['connection-id'] as string
    try {
      const doesConnectionExists = await services.connection.doesConnectionExists(connectionId)
      if (doesConnectionExists) next()
      else throw new Error('connection not found')
    } catch (err) {
      next(err)
    }
  })

  visitorNsp.on('connection', async socket => {
    const connectionId = socket.request.headers['connection-id'] as string
    const socketId = socket.id
    const { headers, address } = socket.handshake

    const connection = await controllers.socket.handleNewConnection.handle({
      connectionId,
      socketId,
    })

    socket.emit('SOCKET_CONNECTED')

    socket.on('disconnect', () => controllers.socket.handleDisconnect.handle(connection))
  })
}

export default router
