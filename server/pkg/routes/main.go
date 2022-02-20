package routes

import (
	"net/http"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"

	"github.com/tahsinature/future-proof-gin/pkg/controllers"
	"github.com/tahsinature/future-proof-gin/pkg/exception"
	"github.com/tahsinature/future-proof-gin/pkg/middlewares"
)

var (
	pingController    = new(controllers.Ping)
	visitorController = new(controllers.Visitor)
)

func Setup() *gin.Engine {
	staticEngine := gin.New()
	staticEngine.Use(middlewares.Cors)
	staticEngine.Static("/", "./public")
	staticEngine.Use(gzip.Gzip(gzip.DefaultCompression))

	staticEngine.NoRoute(func(c *gin.Context) {
		controllers.Response.FromError(c, exception.Response{HTTPCode: http.StatusNotFound, Message: "Seems like you are lost.", Flag: exception.Flags.Get("ROUTE_NOT_FOUNT")})
	})

	engine := gin.New()

	engine.Use(middlewares.Cors)
	engine.Use(middlewares.RequestID)
	engine.Use(gin.Logger())

	new(Ping).setup(engine.Group("/ping"))
	new(Visitor).setup(engine.Group("/visitor"))

	engine.NoRoute(func(c *gin.Context) {
		staticEngine.HandleContext(c)
	})

	return engine
}
