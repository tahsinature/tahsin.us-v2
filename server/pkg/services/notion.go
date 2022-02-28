package services

import (
	"fmt"
	"strconv"

	"github.com/jinzhu/now"
	"github.com/tahsinature/tahsin.us/pkg/graph/model"
	"github.com/tahsinature/tahsin.us/pkg/services/notion"
)

type Notion struct{}

func (Notion) GetWatchedMovies() (movies []*model.Movie, err error) {
	apiResp, err := notion.GetWatchedMovies()
	if err != nil {
		return nil, fmt.Errorf("failed to get watched movies")
	}

	for _, row := range apiResp.Results {
		if !row.Properties.ShowInApp.Checkbox {
			continue
		}
		releaseTime, _ := now.Parse(row.Properties.ApproxRelease.Date.Start)

		genres := []string{}

		for _, genre := range row.Properties.Genre.MultiSelect {
			genres = append(genres, genre.Name)
		}

		movies = append(movies, &model.Movie{
			Title:     row.Properties.Title.Title[0].PlainText,
			Year:      releaseTime.Year(),
			MyRating:  strconv.Itoa(row.Properties.Rating110.Number),
			WatchedAt: row.Properties.WatchDate.Date.Start,
			Image:     row.Cover.External.URL,
			ID:        row.ID,
			Genres:    genres,
		})
	}

	return movies, err
}
