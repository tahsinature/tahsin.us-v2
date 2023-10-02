import { validate, IsNotEmpty } from "class-validator";

class Config {
  @IsNotEmpty()
  TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string;
  @IsNotEmpty()
  TELEGRAM_CHAT_ID_ME_SERVER = process.env.TELEGRAM_CHAT_ID_ME_SERVER as string;
}

const config = new Config();

const errors = await validate(config);
if (errors.length > 0) {
  const msg = errors.map((e) => e.toString()).join("\n");
  console.error(msg);
}

export default config;
