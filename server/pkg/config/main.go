package config

import (
	"log"
	"os"
	"path"
	"runtime"

	"github.com/joho/godotenv"
	"github.com/tahsinature/tahsin.us/pkg/utilities"
)

type EntryArgsType struct {
	Run       bool `arg:"-r,help:Run the server"`
	Seed      bool `arg:"--seed,help:Seed the database"`
	SyncForce bool `arg:"--syncf,help:Sync Force the database"`
}

var (
	DB        dbConfig
	App       appConfig
	JWT       jwtConfig
	Redis     redisConfig
	EntryArgs EntryArgsType
	Telegram  telegramConfig
	Notion    notionConfig
	Other     otherConfig
)

func Validate() {
	_, file, _, _ := runtime.Caller(0)
	serverRootPath := path.Join(file, "..", "..", "..")

	if envPath := path.Join(serverRootPath, ".env"); godotenv.Load(envPath) != nil {
		log.Fatal("error: failed to load the env file")
	}

	DB = dbConfig{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		User:     os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASS"),
		DBname:   os.Getenv("DB_NAME"),
	}

	App = appConfig{
		Port:         os.Getenv("PORT"),
		Environment:  os.Getenv("ENV"),
		SSL:          os.Getenv("SSL") == "TRUE",
		IsProduction: os.Getenv("ENV") == "PRODUCTION",
		APIVersion:   os.Getenv("API_VERSION"),
		FrontendURL:  os.Getenv("FRONTEND_URL"),
	}

	JWT = jwtConfig{
		AccessSecret:  os.Getenv("ACCESS_SECRET"),
		RefreshSecret: os.Getenv("REFRESH_SECRET"),
	}

	Redis = redisConfig{
		Host:     os.Getenv("REDIS_HOST"),
		Port:     os.Getenv("REDIS_PORT"),
		Password: os.Getenv("REDIS_PASSWORD"),
		DB:       os.Getenv("REDIS_DB"),
	}

	Telegram = telegramConfig{
		BOT_TOKEN:         os.Getenv("TELEGRAM_BOT_TOKEN"),
		CHAT_ID_ME_SERVER: os.Getenv("TELEGRAM_CHAT_ID_ME_SERVER"),
		SEND:              os.Getenv("TELEGRAM_SEND") == "true",
	}
	Notion = notionConfig{
		Auth: os.Getenv("NOTION_AUTH"),

		DB_Movies:               "24a291a3e1954ac199aa89b89e3927c0",
		DB_Books:                "833e89bbbe954fd9a6af2d3be67b7ff1",
		DB_Articles:             "3b7cb55d7395448bb3319201f0d72f0d",
		DB_ProgrammingLanguages: "cbcb72d3e7dc4b76932820924b2235f0",
		DB_HumanLanguages:       "3bcd0134b20543a28dd77d8599368cb6",
		DB_Photographs:          "1fd4dd4839e14ec5a855b80b8c065210",
		DB_Projects:             "2f79671da473414eaf4ad9fb4b80bc91",
		DB_Todo:                 "facee354b172445690aa3fa1c0ef849d",

		Version: "2021-08-16",
	}

	Other = otherConfig{
		RootPath: serverRootPath,
	}

	utilities.ValidateMultipleStruct(DB, App, JWT, Redis, Other, Telegram, Notion)
}
