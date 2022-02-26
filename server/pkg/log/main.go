package log

import (
	"github.com/fatih/color"
	"github.com/sirupsen/logrus"
)

type _Logger struct {
	name   string
	logrus logrus.Logger
}

func (logger _Logger) Info(msg string) {
	logger.printLoggerName()
	logger.logrus.Info(msg)
}

func (logger _Logger) Error(err error) {
	logger.printLoggerName()
	logger.logrus.Error(err)
}

func (logger _Logger) Fatal(err error) {
	logger.logrus.Fatal(err)
}

func (logger _Logger) printLoggerName() {
	color.New(color.FgGreen).Printf("%s: ", logger.name)
}

func (logger _Logger) init(name string) _Logger {
	logger.name = name
	logger.logrus = *logrus.New()
	logger.logrus.SetFormatter(&logrus.TextFormatter{
		DisableTimestamp: true,
	})

	return logger
}

var (
	App      = new(_Logger).init("app")
	Telegram = new(_Logger).init("telegram")
	Socket   = new(_Logger).init("socket")
	DB       = new(_Logger).init("database")
	Redis    = new(_Logger).init("redis")
)
