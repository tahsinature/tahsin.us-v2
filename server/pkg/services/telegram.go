package services

import (
	"fmt"
	"strconv"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"github.com/tahsinature/future-proof-gin/pkg/config"
)

type Telegram struct{}

var (
	TELEGRAM_BOT_CHAT_ID int64
	bot                  *tgbotapi.BotAPI
)

func (tgbot Telegram) Init() {
	var err error
	TELEGRAM_BOT_CHAT_ID, err = strconv.ParseInt(config.Telegram.CHAT_ID_ME_SERVER, 10, 64)
	if err != nil {
		panic(err)
	}
	bot, err = tgbotapi.NewBotAPI(config.Telegram.BOT_TOKEN)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Authorized on account %s\n", bot.Self.UserName)
}

func (tgbot Telegram) SendMessage(text string) {
	msg := tgbotapi.NewMessage(TELEGRAM_BOT_CHAT_ID, text)
	tgbotapi.NewMessage(TELEGRAM_BOT_CHAT_ID, text)
	_, err := bot.Send(msg)
	if err != nil {
		panic(err)
	}
}
