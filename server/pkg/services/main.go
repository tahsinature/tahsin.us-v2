package services

type services struct {
	Notion NotionService
}

func (s *services) Setup() {
	s.Notion.Init()
}

var All = new(services)
