package seeds

import (
	"crypto/md5"
	"fmt"

	"github.com/brianvoe/gofakeit/v6"
	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/db/models"
)

type UserSeeder struct{}

func (UserSeeder) CreateOne() *models.User {
	db := db.GetDB()
	userModel := models.User{
		Email:    gofakeit.Email(),
		Name:     gofakeit.Name(),
		Password: fmt.Sprintf("%x", md5.Sum([]byte("123456"))),
	}
	err := db.Create(&userModel).Error
	if err != nil {
		panic(err)
	}

	return &userModel
}

func (u UserSeeder) CreateMany(count int) []models.User {
	users := make([]models.User, count)

	for i := 0; i < count; i++ {
		users[i] = *u.CreateOne()
	}

	return users
}
