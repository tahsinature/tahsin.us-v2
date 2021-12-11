package config

type redisConfig = struct {
	Host     string `validate:"required"`
	Port     string `validate:"required"`
	Password string
	DB       string `validate:"required,numeric"`
}
