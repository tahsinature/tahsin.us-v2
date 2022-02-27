package graph

import (
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-gonic/gin"
	"github.com/tahsinature/tahsin.us/pkg/graph/generated"
)

func Setup(engine *gin.Engine) {
	server := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &Resolver{}}))
	pg := playground.Handler("GraphQL playground", "/graph")

	engine.POST("/graph", func(c *gin.Context) {
		server.ServeHTTP(c.Writer, c.Request)
	})

	engine.GET("/graph", func(c *gin.Context) {
		pg.ServeHTTP(c.Writer, c.Request)
	})
}
