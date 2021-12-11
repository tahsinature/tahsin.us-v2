package repositories

import (
	"errors"
	"net/http"

	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/db/models"
	"github.com/tahsinature/future-proof-gin/pkg/exception"
	"github.com/tahsinature/future-proof-gin/pkg/forms/user"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type UserRepository struct{}

func (m UserRepository) CheckUserExistsByEmail(email string) (bool, error) {
	var user models.User
	db := db.GetDB()

	err := db.First(&user, "email = ?", email).Error

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return false, nil
	}

	if err != nil {
		return false, err
	}

	return true, nil
}

func (m UserRepository) GetUserByEmail(email string) (models.User, error) {
	var user models.User
	db := db.GetDB()

	err := db.First(&user, "email = ?", email).Error

	if errors.Is(err, gorm.ErrRecordNotFound) {
		return user, errors.New("user not found")
	}

	if err != nil {
		return user, err
	}

	return user, nil
}

func (m UserRepository) Register(form user.Register) (user models.User, err *exception.Response) {
	db := db.GetDB()
	if exists, _ := m.CheckUserExistsByEmail(form.Email); exists {
		return user, new(exception.Response).New(http.StatusConflict, exception.Flags.Get("ALREADY_REGISTERED"), "user already exists")
	}

	bytePassword := []byte(form.Password)
	if hashedPassword, err := bcrypt.GenerateFromPassword(bytePassword, bcrypt.DefaultCost); err != nil {
		panic(err)
	} else {
		user.Password = string(hashedPassword)
		user.Name = form.Name
		user.Email = form.Email
	}

	if err := db.Create(&user).Error; err != nil {
		panic(err)
	}

	return user, err
}
