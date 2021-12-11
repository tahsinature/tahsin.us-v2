package tests

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-playground/assert/v2"
	"github.com/tahsinature/future-proof-gin/pkg/application"
	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/routes"
)

func TestPingRoute(t *testing.T) {
	new(application.Application).Setup()
	db.Sync(true)
	router := routes.Setup()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/ping/", nil)
	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusOK, w.Code)
	assert.Equal(t, `{"message":"pong!"}`, w.Body.String())
}
