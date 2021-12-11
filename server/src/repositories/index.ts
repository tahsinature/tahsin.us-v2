import chat from '@root/src/repositories/chat'
import request from '@root/src/repositories/request'
import appData from '@src/repositories/appData'
import connection from '@src/repositories/connection'
import markdown from '@src/repositories/markdown'
import message from '@src/repositories/message'
import tool from '@src/repositories/tool'

export const repositories = {
  appData,
  connection,
  markdown,
  message,
  request,
  tool,
  chat,
}
