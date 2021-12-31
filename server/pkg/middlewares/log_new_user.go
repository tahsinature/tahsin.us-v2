package middlewares

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

var dataMap = make(map[string]interface{})

var telegramService = new(services.Telegram)

func LogNewUser(c *gin.Context) {
	if dataMap[c.ClientIP()] == nil {
		telegramService.SendMessage("New user: " + c.ClientIP())
		ipData := make(map[string]interface{})
		dataMap[c.ClientIP()] = ipData
		time.AfterFunc(time.Minute*5, func() {
			dataMap[c.ClientIP()] = nil
		})
	}
}
