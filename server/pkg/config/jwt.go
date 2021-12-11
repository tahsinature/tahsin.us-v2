package config

type jwtConfig = struct {
	AccessSecret  string `validate:"required"`
	RefreshSecret string `validate:"required"`
}
