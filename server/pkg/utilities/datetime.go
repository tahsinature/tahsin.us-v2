package utilities

import (
	"fmt"
	"math"
	"time"
)

type dateTime struct{}

var DateTime = new(dateTime)

func (dateTime) GetRelativeDiffReadable(since time.Time) string {
	diff := time.Since(since)

	hours := int(math.Trunc(diff.Hours()))
	diff = diff - time.Duration(hours)*time.Hour

	minutes := int(math.Trunc(diff.Minutes()))
	diff = diff - time.Duration(minutes)*time.Minute

	seconds := int(math.Trunc(diff.Seconds()))

	return fmt.Sprintf("%d hour(s) %d min(s) %d sec(s)", hours, minutes, seconds)
}
