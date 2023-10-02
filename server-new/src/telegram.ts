import TelegramBot from "node-telegram-bot-api";
import config from "./config";

class Telegram {
  private bot = new TelegramBot(config.TELEGRAM_BOT_TOKEN, { polling: true });

  async send(message: string) {
    await this.bot.sendMessage(config.TELEGRAM_CHAT_ID_ME_SERVER, message, {
      disable_notification: true,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    });
  }
}

export default new Telegram();
