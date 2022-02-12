package application

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/config"
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
	fmt.Println("Server started on port:", config.App.Port)

	if err := engine.Run(":" + config.App.Port); err != nil {
		panic(err)
	}
}
