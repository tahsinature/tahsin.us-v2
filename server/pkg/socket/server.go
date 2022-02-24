package socket

import (
	"fmt"
	"net/url"
	"time"

	"github.com/gin-gonic/gin"
	socketio "github.com/googollee/go-socket.io"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

var (
	telegramService = new(services.Telegram)
	ipService       = new(services.IP)
)

func LogNewUser(ip string, joined time.Time) {
	elappsed := time.Since(joined)

	ipData := ipService.Lookup(ip)
	msg := fmt.Sprintf(`
ip: %s
city: %s
country: %s
org: %s
asn: %s
error: %t
stayed: %s
more1: https://freegeoip.app/json/%s
more2: ip2location.com/%s
`,
		ipData.Ip,
		ipData.City,
		ipData.CountryName,
		ipData.Org,
		ipData.ASN,
		ipData.Error,
		elappsed,
		ip,
		ip)

	telegramService.SendMessage(msg)
}

type ConnectionDetails struct {
	IP     string
	Joined time.Time
}

var socketData = make(map[string]ConnectionDetails)

func Setup(engine *gin.Engine) {
	server := socketio.NewServer(nil)

	server.OnConnect("/", func(s socketio.Conn) error {
		ip := getIpFromSocket(s)

		socketData[ip] = ConnectionDetails{
			Joined: time.Now(),
		}

		s.Emit("SOCKET_CONNECTED")
		return nil
	})

	server.OnError("/", func(s socketio.Conn, e error) {
		fmt.Println("meet error:", e)
	})

	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		fmt.Println("disconnected")
		fmt.Println(getIpFromSocket(s))
		if val, ok := socketData[s.ID()]; ok {
			LogNewUser(val.IP, val.Joined)
		}

		delete(socketData, s.ID())
	})

	socketRoutes := engine.Group("/socket.io")
	socketRoutes.Use(setIpToSocketRequest)

	socketRoutes.GET("/*any", gin.WrapH(server))
	socketRoutes.POST("/*any", gin.WrapH(server))

	go server.Serve()
}

func getIpFromSocket(s socketio.Conn) string {
	u, err := url.Parse(fmt.Sprintf("%s?%s", s.URL().Path, s.URL().RawQuery))
	if err != nil {
		panic(err)
	}
	return u.Query().Get("ip")
}

func setIpToSocketRequest(c *gin.Context) {
	sid := c.Query("sid")

	modifiedQuery := c.Request.URL.Query()
	modifiedQuery.Del("ip")
	modifiedQuery.Add("ip", c.ClientIP())
	c.Request.URL.RawQuery = modifiedQuery.Encode()

	if val, ok := socketData[sid]; ok {
		val.IP = c.ClientIP()
		socketData[sid] = val
	}
}
