package main

import (
	"github.com/alexflint/go-arg"
	"github.com/tahsinature/tahsin.us/pkg/application"
	"github.com/tahsinature/tahsin.us/pkg/config"
	"github.com/tahsinature/tahsin.us/pkg/db/seeds"
	"github.com/tahsinature/tahsin.us/pkg/graph"
	"github.com/tahsinature/tahsin.us/pkg/routes"
	"github.com/tahsinature/tahsin.us/pkg/socket"
)

func main() {
	arg.MustParse(&config.EntryArgs)

	if config.EntryArgs.Run {
		application := new(application.Application)
		application.Setup()
		engine := routes.Setup()
		graph.Setup(engine)
		socket.Setup(engine)
		application.Listen(engine)
	}

	if config.EntryArgs.Seed {
		seeds.Execute()
	}
}
