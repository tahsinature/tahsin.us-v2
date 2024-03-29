package config

type notionConfig = struct {
	Auth                    string `validate:"required"`
	DB_Movies               string `validate:"required"`
	DB_Books                string `validate:"required"`
	DB_Articles             string `validate:"required"`
	DB_ProgrammingLanguages string `validate:"required"`
	DB_HumanLanguages       string `validate:"required"`
	DB_Photographs          string `validate:"required"`
	DB_Projects             string `validate:"required"`
	DB_Todo                 string `validate:"required"`
	Version                 string `validate:"required"`
}
