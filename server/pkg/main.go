package main

import (
	"github.com/alexflint/go-arg"
	"github.com/tahsinature/future-proof-gin/pkg/application"
	"github.com/tahsinature/future-proof-gin/pkg/config"
	"github.com/tahsinature/future-proof-gin/pkg/db/seeds"
	"github.com/tahsinature/future-proof-gin/pkg/routes"
	"github.com/tahsinature/future-proof-gin/pkg/socket"
)

func main() {
	arg.MustParse(&config.EntryArgs)

	if config.EntryArgs.Run {
		application := new(application.Application)
		application.Setup()
		engine := routes.Setup()
		socket.Setup(engine)
		application.Listen(engine)

	}

	if config.EntryArgs.Seed {
		seeds.Execute()
	}
}
