package utilities

import "github.com/go-playground/validator/v10"

func ValidateMultipleStruct(structs ...interface{}) {
	validate := validator.New()

	for _, s := range structs {
		if err := validate.Struct(s); err != nil {
			panic(err)
		}
	}
}
