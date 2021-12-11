import { config } from '@src/config'

process.env.NTBA_FIX_319 = '1'
import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(config.telegram.botToken)

export class Telegram {
  templates = {
    httpReq(data: { ip: string; country: string; method: string; status: number; url: string; redisKey: string }) {
      return `
new visit
=========
ip: ${data.ip}
country: ${data.country}
url: [${data.method} / ${data.status}] \`${data.url}\`
ip_details: ${config.app.frontEndURL}/json/${data.redisKey}
`
    },
    newMsg(data: Object) {
      return `
new msg
=======
${JSON.stringify(data)}
      `
    },
  }
  async sendMsg(content: string) {
    await bot.sendMessage(config.telegram.chatId, this.escape.markdownV2(content), { parse_mode: 'MarkdownV2' })
  }

  escape = {
    markdownV2: (msg: string) =>
      msg
        .replace(/_/g, '\\_')
        .replace(/\*/g, '\\*')
        .replace(/\[/g, '\\[')
        .replace(/]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/~/g, '\\~')
        // .replace(/`/g, "\\`")
        .replace(/>/g, '\\>')
        .replace(/#/g, '\\#')
        .replace(/\+/g, '\\+')
        .replace(/-/g, '\\-')
        .replace(/=/g, '\\=')
        .replace(/\|/g, '\\|')
        .replace(/{/g, '\\{')
        .replace(/}/g, '\\}')
        .replace(/\./g, '\\.')
        .replace(/!/g, '\\!'),
  }
}

export default new Telegram()
