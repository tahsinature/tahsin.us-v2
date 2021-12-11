package middlewares

import (
	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

var authService = new(services.AuthService)

func Auth(c *gin.Context) {
	// take token from request header

	// validate token

	// if token is valid, set user to context

	// if token is invalid, return 401

	// c.Set("user", userModel)
	c.Next()
}
