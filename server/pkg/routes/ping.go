package routes

import (
	"github.com/gin-gonic/gin"
)

type Ping struct{}

func (Ping) setup(rg *gin.RouterGroup) {
	rg.GET("/", pingController.Response)
}
