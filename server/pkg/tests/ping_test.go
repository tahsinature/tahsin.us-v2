package tests

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-playground/assert/v2"
	"github.com/tahsinature/tahsin.us/pkg/application"
	"github.com/tahsinature/tahsin.us/pkg/routes"
)

func TestPingRoute(t *testing.T) {
	new(application.Application).Setup()
	router := routes.Setup()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/ping/", nil)
	router.ServeHTTP(w, req)
	assert.Equal(t, http.StatusOK, w.Code)
}
