package middlewares

import (
	"time"

	"github.com/gin-contrib/cors"
)

var Cors = cors.New(cors.Config{
	AllowOrigins:     []string{"http://localhost:3001/", "http://localhost:3000/"},
	AllowMethods:     []string{"POST, OPTIONS, GET, PUT, DELETE"},
	AllowHeaders:     []string{"Origin"},
	ExposeHeaders:    []string{"Content-Length"},
	AllowCredentials: true,
	MaxAge:           12 * time.Hour,
})
