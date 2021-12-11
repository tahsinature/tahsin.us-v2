package controllers

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/utilities"
)

type Ping struct{}

var startTime = time.Now()

func (Ping) Response(c *gin.Context) {
	dbStatus := "OK"
	if err := db.GetDB().Exec("SELECT 1").Error; err != nil {
		dbStatus = "ERROR"
	}

	redisStatus := "OK"
	if err := db.RedisClient.Ping().Err(); err != nil {
		redisStatus = "ERROR"
	}

	c.JSON(200, map[string]interface{}{
		"app":    "OK",
		"db":     dbStatus,
		"redis":  redisStatus,
		"uptime": utilities.DateTime.GetRelativeDiffReadable(startTime),
	})
}
