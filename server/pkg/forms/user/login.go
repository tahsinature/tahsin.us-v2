package user

type Login struct {
	Email    string `validate:"required,email"`
	Password string `validate:"required,gte=6,lte=8"`
}
