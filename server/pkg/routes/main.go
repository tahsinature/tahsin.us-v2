package routes

import (
	"github.com/gin-gonic/gin"

	"github.com/tahsinature/tahsin.us/pkg/controllers"
	"github.com/tahsinature/tahsin.us/pkg/middlewares"
)

var (
	pingController    = new(controllers.Ping)
	visitorController = new(controllers.Visitor)
)

func Setup() *gin.Engine {
	staticEngine := gin.New()
	staticEngine.Use(middlewares.Cors)
	// staticEngine.Use(gzip.Gzip(gzip.DefaultCompression))
	staticEngine.Static("/", "./public")

	staticEngine.NoRoute(func(c *gin.Context) {
		c.File("./public/index.html")
	})

	engine := gin.New()
	engine.Use(middlewares.Cors)
	engine.Use(middlewares.ClickJackProtection)

	api := engine.Group("/api")
	api.Use(middlewares.RequestID)
	api.Use(gin.Logger())

	new(Ping).setup(api.Group("/ping"))
	new(Visitor).setup(api.Group("/visitor"))

	engine.NoRoute(func(c *gin.Context) {
		staticEngine.HandleContext(c)
	})

	return engine
}
