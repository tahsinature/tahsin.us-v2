import getConnections from '@root/src/controllers/api/admin/getConnections'
import getChatsForAdmin from '@root/src/controllers/api/admin/getChatsForAdmin'
import getRequests from '@root/src/controllers/api/admin/getRequests'
import init from '@root/src/controllers/api/admin/init'
import msgToVisitor from '@root/src/controllers/api/admin/msgToVisitor'
import addBook from '@root/src/controllers/api/book/addBook'
import getAllBooks from '@root/src/controllers/api/book/getAllBooks'
import searchBook from '@root/src/controllers/api/book/searchBook'
import getChats from '@root/src/controllers/api/chat/getChats'
import getMsgs from '@root/src/controllers/api/chat/getMsgs'
import msgToAdmin from '@root/src/controllers/api/chat/msgToAdmin'
import sendBasicData from '@root/src/controllers/api/data/sendBasicData'
import emitSocketEvent from '@root/src/controllers/api/dev/emitSocketEvent'
import getSocketConnections from '@root/src/controllers/api/dev/getSocketConnections'
import removeAllSocketConnections from '@root/src/controllers/api/dev/removeAllSocketConnections'
import getAppStatus from '@root/src/controllers/api/health/getAppStatus'
import connection from '@root/src/controllers/api/visitor/connection'
import getList from '@root/src/controllers/api/visitor/getList'
import getMarkdown from '@root/src/controllers/api/visitor/getMarkdown'
import handleDisconnect from '@root/src/controllers/socket/handleDisconnect'
import handleNewConnection from '@root/src/controllers/socket/handleNewConnection'
import editConnection from '@root/src/controllers/api/admin/editConnection'
import getIpInfo from '@root/src/controllers/api/dev/getIpInfo'
import getJSON from '@root/src/controllers/api/visitor/getJSON'

const api = {
  admin: {
    getConnections,
    getChatsForAdmin,
    init,
    msgToVisitor,
    getRequests,
  },
  book: {
    addBook,
    getAllBooks,
    searchBook,
  },
  chat: {
    getChats,
    getMsgs,
    msgToAdmin,
  },
  data: {
    sendBasicData,
  },
  dev: {
    getSocketConnections,
    removeAllSocketConnections,
    emitSocketEvent,
  },
  health: {
    getAppStatus,
  },
  visitor: {
    getList,
    getMarkdown,
    connection,
    editConnection,
    getJSON,
  },
  global: {
    getIpInfo,
  },
}

const socket = {
  handleNewConnection,
  handleDisconnect,
}

const controllers = {
  api,
  socket,
}

export default controllers
