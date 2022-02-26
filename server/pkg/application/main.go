package application

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/log"
	"github.com/tahsinature/future-proof-gin/pkg/services"
)

type Application struct{}

func (*Application) Setup() {
	config.Validate()
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
