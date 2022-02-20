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

// {

// 	// fmt.Println(config.App.FrontendURL)
// 	// c.Writer.Header().Set("Access-Control-Allow-Origin", config.App.FrontendURL)
// 	// c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
// 	// c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
// 	// c.Writer.Header().Set("Access-Control-Allow-Headers", "Accept, Authorization, Content-Type, Content-Length, X-CSRF-Token, Token, session, Origin, Host, Connection, Accept-Encoding, Accept-Language, X-Requested-With")

// 	// if c.Request.Method == http.MethodOptions {
// 	// 	c.AbortWithStatus(http.StatusNoContent)
// 	// 	return
// 	// }

// 	// c.Request.Header.Del("Origin")

// 	// c.Next()
// }
