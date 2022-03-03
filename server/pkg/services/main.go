package services

type services struct {
	Notion   NotionService
	Telegram TelegramService
	IP       IPService
}

func (s *services) Setup() {
	s.Notion.Init()
	s.Telegram.Init()
}

var All = new(services)
