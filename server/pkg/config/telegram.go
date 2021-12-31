package config

type telegramConfig = struct {
	BOT_TOKEN         string `validate:"required"`
	CHAT_ID_ME_SERVER string `validate:"required"`
}
