package routes

import (
	"github.com/gin-gonic/gin"
)

type Visitor struct{}

func (Visitor) setup(rg *gin.RouterGroup) {
	rg.GET("/basic-data", visitorController.GetBasicData)
	rg.GET("/messages", visitorController.GetMessages)
	rg.POST("/connection", visitorController.HandleConnection)
	rg.GET("/tools", visitorController.GetTools)
	rg.GET("/list/tools", visitorController.GetTools)
	rg.GET("/writings", visitorController.GetWritings)
	rg.GET("/list/writings", visitorController.GetWritings)
}
