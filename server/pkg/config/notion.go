package config

type notionConfig = struct {
	Auth      string `validate:"required"`
	DB_Movies string `validate:"required"`
	Version   string `validate:"required"`
}
