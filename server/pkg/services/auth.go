package services

import (
	"crypto/md5"
	"fmt"
	"net/http"

	"github.com/golang-jwt/jwt/v4"
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/db/repositories"
	"github.com/tahsinature/future-proof-gin/pkg/exception"
	"github.com/tahsinature/future-proof-gin/pkg/forms/user"
)

type AuthService struct{}

var userRepo = new(repositories.UserRepository)

func (as AuthService) HandleLogin(payload user.Login) (err *exception.Response, data interface{}) {
	user, error := userRepo.GetUserByEmail(payload.Email)
	if error != nil {
		err = new(exception.Response).New(http.StatusUnauthorized, exception.Flags.Get("INVALID_LOGIN"), "Invalid credentials")
		return
	}

	isValidPass := as.GenHashPassFromInput(payload.Password) == user.Password
	if !isValidPass {
		err = new(exception.Response).New(http.StatusUnauthorized, exception.Flags.Get("INVALID_LOGIN"), "Invalid credentials")
		return
	}

	accessToken := as.GenAccessToken(user.ID)

	return err, map[string]interface{}{
		"accessToken": accessToken,
	}
}

func (AuthService) HandleRegister(payload user.Register) (err *exception.Response, data interface{}) {
	user, err := userRepo.Register(payload)

	return err, map[string]interface{}{
		"id":    user.ID,
		"name":  user.Name,
		"email": user.Email,
	}
}

func (AuthService) GenHashPassFromInput(input string) string {
	hash := md5.Sum([]byte(input))
	return fmt.Sprintf("%x", hash)
}

func (AuthService) GenAccessToken(userId string) string {
	token := jwt.NewWithClaims(jwt.SigningMethodHS512, jwt.MapClaims{
		userId: userId,
	})
	strToken, err := token.SignedString([]byte(config.JWT.AccessSecret))
	if err != nil {
		panic(err)
	}

	return strToken
}
