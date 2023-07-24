package middlewares

import (
	"github.com/gin-gonic/gin"
)

func ClickJackProtection(c *gin.Context) {
	c.Writer.Header().Set("Content-Security-Policy", "frame-ancestors 'none';")
	c.Writer.Header().Set("X-Frame-Options", "deny")
	c.Next()
}
