import BadRequest from '@root/src/errors/bad-request'
import { IChatDoc } from '@root/src/models/Chat'
import { IConnectionDoc } from '@root/src/models/Connection'
import { IMessageDoc } from '@root/src/models/Message'
import { services } from '@root/src/services'
import socket from '@root/src/socket'
import { repositories } from '@src/repositories'
import telegram from '@src/telegram'

class Service {
  async getChats(connection: IConnectionDoc) {
    const chats = await repositories.chat.getChatIds(connection.id)

    return chats
  }

  async getVisitorChatIdForAdmin(visitorConnectionId?: string) {
    let chats: IChatDoc[] = []
    if (visitorConnectionId) {
      await this.makeSureValidConnection(visitorConnectionId)
      chats = (await repositories.chat.getChatIds([visitorConnectionId])) || []

      if (chats.length > 1) throw new Error('multiple chat room detedted')
      if (!chats.length) chats.push(await repositories.chat.initWithAdmin(visitorConnectionId))
    } else chats = await repositories.chat.getAllChats()

    return chats
  }

  async getMessages(connection: IConnectionDoc, page = 1) {
    const chats = await repositories.chat.getChatIds([connection._id])
    if (chats.length > 1) throw new Error('multiple chat room detedted')

    const chat = chats[0]
    if (!chat) return []

    const messages = await repositories.message.getByChatId(chat.id, page)

    return this.transformMsgToClientReadable(messages)
  }

  async getMessagesForAdmin(page = 1) {
    const chats = await repositories.chat.getAllChats()
    if (chats.length > 1) throw new Error('multiple chat room detedted')

    const chat = chats[0]
    if (!chat) return []

    const messages = await repositories.message.getByChatId(chat.id, page)

    return this.transformMsgToClientReadable(messages)
  }

  async sendMsgToAdmin(connection: IConnectionDoc, data: { content: string }) {
    const authorId = connection._id
    const chats = (await repositories.chat.getChatIds(authorId)) || []

    if (!chats.length) chats.push(await repositories.chat.initWithAdmin(authorId))
    if (chats.length > 1) throw new Error('multiple chat room detedted')
    const messages = await repositories.message.createNew({ author: authorId, chatId: chats[0].id, content: data.content, type: 'text' })

    const transformed = this.transformMsgToClientReadable([messages])[0]
    await telegram.sendMsg(telegram.templates.newMsg(transformed))

    return transformed
  }

  async sendMsgToVisitor(visitorConnectionId: string, data: { content: string }) {
    await this.makeSureValidConnection(visitorConnectionId)
    const connection = await services.connection.getConnectionById(visitorConnectionId)

    const chats = (await repositories.chat.getChatIds([visitorConnectionId])) || []
    if (chats.length > 1) throw new Error('multiple chat room detedted')
    if (!chats.length) chats.push(await repositories.chat.initWithAdmin(visitorConnectionId))

    // maybe send socket notification

    const message = await repositories.message.createNew({ author: 'admin', chatId: chats[0].id, content: data.content, type: 'text' })

    const sockets = await socket.getConnectedSockets([connection.socketId])
    socket.emitToSpecificSockets(sockets, 'NEW_MESSAGE', {
      author: message.author,
      content: message.content,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
    })

    return this.transformMsgToClientReadable([message])
  }

  public transformMsgToClientReadable = (messages: IMessageDoc[]) => {
    return messages.map(msg => ({
      author: msg.author === 'admin' ? 'admin' : 'visitor',
      content: msg.content,
      createdAt: msg.createdAt,
      updatedAt: msg.updatedAt,
    }))
  }

  private async makeSureValidConnection(connectionId: string) {
    const isValidConnectionId = await services.connection.doesConnectionExists(connectionId)
    if (!isValidConnectionId) throw new BadRequest({ message: 'not a valid visitor connection' })
  }
}

export default new Service()
