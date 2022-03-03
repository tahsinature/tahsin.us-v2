package config

type notionConfig = struct {
	Auth        string `validate:"required"`
	DB_Movies   string `validate:"required"`
	DB_Books    string `validate:"required"`
	DB_Articles string `validate:"required"`
	Version     string `validate:"required"`
}
