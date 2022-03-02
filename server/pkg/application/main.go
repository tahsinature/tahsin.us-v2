package application

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/tahsin.us/pkg/config"
	"github.com/tahsinature/tahsin.us/pkg/log"
	"github.com/tahsinature/tahsin.us/pkg/services"
)

type Application struct{}

func (*Application) Setup() {
	config.Validate()
	services.All.Setup()

	gin.SetMode(gin.ReleaseMode)
	new(services.Telegram).Init()

	// db.Init()
	// db.InitRedis()
}

func (*Application) Listen(engine *gin.Engine) {
	log.App.Info(fmt.Sprintf("Server started on port: %s", config.App.Port))

	if err := engine.Run(":" + config.App.Port); err != nil {
		panic(err)
	}
}
