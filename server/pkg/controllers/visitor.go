package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path"

	"github.com/gin-gonic/gin"
	"github.com/tahsinature/future-proof-gin/pkg/config"
)

type Visitor struct{}

func getJSONData(fileName string) map[string]interface{} {
	jsonFile, err := os.OpenFile(path.Join(config.Other.RootPath, fmt.Sprintf("pkg/controllers/raw/%s.json", fileName)), os.O_RDWR|os.O_CREATE, 0666)
	if err != nil {
		panic(err)
	}
	defer jsonFile.Close()

	var data map[string]interface{}

	byteValue, _ := ioutil.ReadAll(jsonFile)

	json.Unmarshal(byteValue, &data)
	return data
}

func (Visitor) GetBasicData(c *gin.Context) {
	data := getJSONData("basic-data")
	c.JSON(200, data)
}

func (Visitor) GetTools(c *gin.Context) {
	data := getJSONData("tools")
	c.JSON(200, data)
}

func (Visitor) GetWritings(c *gin.Context) {
	data := getJSONData("writings")
	c.JSON(200, data)
}

func (Visitor) GetMessages(c *gin.Context) {
	data := getJSONData("messages")
	c.JSON(200, data)
}

func (Visitor) HandleConnection(c *gin.Context) {
	data := getJSONData("connection")
	c.JSON(200, data)
}
