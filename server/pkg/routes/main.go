package routes

import (
	"net/http"
	"path"

	"github.com/gin-contrib/gzip"
	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/controllers"
	"github.com/tahsinature/future-proof-gin/pkg/exception"
	"github.com/tahsinature/future-proof-gin/pkg/middlewares"
)

var (
	pingController    = new(controllers.Ping)
	visitorController = new(controllers.Visitor)
)

func Setup() *gin.Engine {
	engine := gin.New()

	engine.Use(middlewares.Cors)
	engine.Use(middlewares.RequestID)
	engine.Use(gzip.Gzip(gzip.DefaultCompression))
	engine.Use(gin.Logger())

	new(Ping).setup(engine.Group("/ping"))
	new(Visitor).setup(engine.Group("/visitor"))

	engine.Static("/app", path.Join(config.Other.RootPath, "pkg", "public", "app"))

	engine.NoRoute(func(c *gin.Context) {
		controllers.Response.FromError(c, exception.Response{HTTPCode: http.StatusNotFound, Message: "Seems like you are lost.", Flag: exception.Flags.Get("ROUTE_NOT_FOUNT")})
	})

	return engine
}
