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
	Joined time.Time
	Active bool
}

var socketData = make(map[string]ConnectionDetails)

func Setup(engine *gin.Engine) {
	server := socketio.NewServer(nil)

	server.OnConnect("/", func(s socketio.Conn) error {
		ip := getIpFromSocket(s)

		socketData[ip] = ConnectionDetails{
			Joined: time.Now(),
			Active: true,
		}

		fmt.Printf("socket connected: %s (%s)\n", s.ID(), ip)

		s.Emit("SOCKET_CONNECTED")
		return nil
	})

	server.OnError("/", func(s socketio.Conn, e error) {
		fmt.Println("meet error:", e)
	})

	server.OnDisconnect("/", func(s socketio.Conn, reason string) {
		ip := getIpFromSocket(s)

		fmt.Printf("socket disconnected: %s (%s)\n", s.ID(), ip)

		socketData[ip] = ConnectionDetails{
			Active: false,
		}

		triggerSchedulerForDisconn(s)
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
	modifiedQuery := c.Request.URL.Query()
	modifiedQuery.Del("ip")
	modifiedQuery.Add("ip", c.ClientIP())
	c.Request.URL.RawQuery = modifiedQuery.Encode()
}

func triggerSchedulerForDisconn(s socketio.Conn) {
	ip := getIpFromSocket(s)

	time.AfterFunc(time.Second*10, func() {
		if val, ok := socketData[ip]; ok && !val.Active {
			delete(socketData, ip)
			fmt.Printf("socket data removed: %s (%s)\n", s.ID(), ip)
			LogNewUser(ip, val.Joined)
		}
	})
}
