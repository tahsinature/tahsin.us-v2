package db

import (
	"fmt"
	"log"
	"strconv"

	_redis "github.com/go-redis/redis/v7"
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/db/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var db *gorm.DB

func Init() {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai",
		config.DB.Host,
		config.DB.User,
		config.DB.Password,
		config.DB.DBname,
		config.DB.Port)

	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Silent),
	})
	if err != nil {
		panic(err)
	}

	fmt.Println("DB Connected...")

	if config.EntryArgs.SyncForce {
		Sync(true)
	}

	if err != nil {
		log.Fatal(err)
	}
}

func Sync(force bool) {
	allModelsNames := []string{
		models.User{}.TableName(),
		models.Post{}.TableName(),
	}

	if force {
		for _, modelName := range allModelsNames {
			if err := db.Exec(fmt.Sprintf(`DROP TABLE IF EXISTS "%s"`, modelName)).Error; err != nil {
				panic(err)
			}
		}
	}

	err := db.AutoMigrate(
		models.User{},
		models.Post{},
	)
	if err != nil {
		log.Panic(err)
	}

	fmt.Println("SyncForce Done...")
}

func GetDB() *gorm.DB {
	return db
}

var RedisClient *_redis.Client

func InitRedis() {
	host := fmt.Sprintf("%s:%s", config.Redis.Host, config.Redis.Port)
	password := config.Redis.Password
	db, _ := strconv.ParseInt(config.Redis.DB, 10, 8)

	RedisClient = _redis.NewClient(&_redis.Options{
		Addr:     host,
		Password: password,
		DB:       int(db),
	})

	response := RedisClient.Ping()
	if response.Err() != nil {
		log.Panicf("Redis Connect Error: %s", response.Err())
	}

	fmt.Println("Redis Connected...")
}

func GetRedis() *_redis.Client {
	return RedisClient
}
