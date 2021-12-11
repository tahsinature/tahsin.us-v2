import appData from '@src/seeders/appData'
import connection from '@src/seeders/connection'
import message from '@src/seeders/message'
import markdown from '@src/seeders/markdown'
import tool from '@src/seeders/tool'
import chat from '@root/src/seeders/chat'

export const seeders = {
  appData,
  connection,
  message,
  markdown,
  tool,
  chat,
}

export const seed = async () => {
  // const connections = await connection.createOne('::1')
  const chat = await seeders.chat.findById('60a008a2a5d34cd8db7f6b4b')
  // await AppData.createOne()
  await seeders.message.createOne(chat)
  await seeders.message.createOne(chat)
  await seeders.message.createOne(chat)
  await seeders.message.createOne(chat)
  await seeders.message.createOne(chat)
  // await Message.seed(connections, 10)
  // await seeders.markdown.createMany(10)
  // await seeders.tool.createStatic()
}
