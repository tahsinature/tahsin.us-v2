package config

type appConfig = struct {
	Port         string `validate:"required"`
	Environment  string `validate:"required,oneof=DEV PRODUCTION LOCAL"`
	SSL          bool
	IsProduction bool
	APIVersion   string `validate:"required"`
}
