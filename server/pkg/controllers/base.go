package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/tahsinature/future-proof-gin/pkg/exception"
)

type ResponseType struct{}

var (
	validate = validator.New()
	Response ResponseType
)

func ValidateBody(schema interface{}, c *gin.Context) bool {
	if err := json.NewDecoder(c.Request.Body).Decode(schema); err != nil {
		panic(err)
	}

	if err := validate.Struct(schema); err != nil {
		Response.BadRequest(c, err.Error())
		return false
	}

	return true
}

func (ResponseType) Success(c *gin.Context, data interface{}) {
	c.JSON(http.StatusOK, gin.H{"data": data})
}

func (ResponseType) NotFound(c *gin.Context, msg string) {
	c.JSON(http.StatusNotFound, gin.H{"error": msg})
}

func (ResponseType) BadRequest(c *gin.Context, msg string) {
	c.JSON(http.StatusBadRequest, gin.H{"error": msg})
}

func (ResponseType) Forbidden(c *gin.Context, msg string) {
	c.JSON(http.StatusForbidden, gin.H{"error": msg})
}

func (ResponseType) Unauthorized(c *gin.Context, msg string) {
	c.JSON(http.StatusUnauthorized, gin.H{"error": msg})
}

func (ResponseType) ServerError(c *gin.Context, msg string) {
	c.JSON(http.StatusInternalServerError, gin.H{"error": msg})
}

func (ResponseType) FromError(c *gin.Context, err exception.Response) {
	c.JSON(err.HTTPCode, gin.H{
		"flag":  err.Flag,
		"error": err.Message,
	})
}
