package middlewares

import (
	"github.com/gin-gonic/gin"
	uuid "github.com/twinj/uuid"
)

func RequestID(c *gin.Context) {
	uuid := uuid.NewV4()
	c.Writer.Header().Set("X-Request-Id", uuid.String())
	c.Next()
}
