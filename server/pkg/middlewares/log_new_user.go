package middlewares

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

var dataMap = make(map[string]interface{})

var (
	telegramService = new(services.Telegram)
	ipService       = new(services.IP)
)

func LogNewUser(c *gin.Context) {
	if dataMap[c.ClientIP()] == nil {

		ipData := ipService.Lookup(c.ClientIP())
		msg := fmt.Sprintf(`
ip: %s
city: %s
country: %s
org: %s
asn: %s
error: %t
more1: https://freegeoip.app/json/%s
more2: ip2location.com/%s
`,
			ipData.Ip,
			ipData.City,
			ipData.CountryName,
			ipData.Org,
			ipData.ASN,
			ipData.Error,
			c.ClientIP(),
			c.ClientIP())
		telegramService.SendMessage(msg)
		dataMap[c.ClientIP()] = ipData
		time.AfterFunc(time.Minute*5, func() {
			dataMap[c.ClientIP()] = nil
		})
	}
}
