package socket

import (
	"fmt"
	"time"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

var dataMap = make(map[string]interface{})

var (
	telegramService = new(services.Telegram)
	ipService       = new(services.IP)
)

func LogNewUser(ip string) {
	if dataMap[ip] == nil {

		ipData := ipService.Lookup(ip)
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
			ip,
			ip)

		telegramService.SendMessage(msg)
		fmt.Println(msg)

		dataMap[ip] = ipData

		time.AfterFunc(time.Minute*5, func() {
			dataMap[ip] = nil
		})
	}
}

func Setup(engine *gin.Engine) {
	server := socketio.NewServer(nil)

	server.OnConnect("/", func(s socketio.Conn) error {
		s.Emit("SOCKET_CONNECTED")
		fmt.Println("connected:", s.ID())
		return nil
	})

	server.OnError("/", func(s socketio.Conn, e error) {
		fmt.Println("meet error:", e)
	})

	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		ip := s.RemoteAddr().String()
		LogNewUser(ip)
		fmt.Println("closed", reason)
	})

	engine.GET("/socket.io/*any", gin.WrapH(server))
	engine.POST("/socket.io/*any", gin.WrapH(server))

	go server.Serve()
}
