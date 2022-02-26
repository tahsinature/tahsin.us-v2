package log

import (
	"github.com/sirupsen/logrus"
)

type Logger struct{}

func (Logger) Info(msg string) {
	logrus.Info(msg)
}

func (Logger) Error(err error) {
	logrus.Error(err)
}

func (logger Logger) init() Logger {
	return logger
}

var App = new(Logger).init()
