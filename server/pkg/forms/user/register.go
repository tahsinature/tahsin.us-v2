package user

type Register struct {
	Name     string `validate:"required,lte=50"`
	Email    string `validate:"required,email"`
	Password string `validate:"required,gte=6,lte=8"`
}
