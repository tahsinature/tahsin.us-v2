package services

import (
	"fmt"
	"sort"

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

		genres := []*model.Genre{}

		cover := ""
		if row.Cover.Type == "file" {
			cover = row.Cover.File.URL
		} else if row.Cover.Type == "external" {
			cover = row.Cover.External.URL
		}

		for _, genre := range row.Properties.Genre.MultiSelect {
			genres = append(genres, &model.Genre{
				ID:    genre.ID,
				Name:  genre.Name,
				Color: genre.Color,
			})
		}

		movies = append(movies, &model.Movie{
			Title:     row.Properties.Title.Title[0].PlainText,
			Year:      releaseTime.Year(),
			MyRating:  row.Properties.Rating110.Number,
			WatchedAt: row.Properties.WatchDate.Date.Start,
			Image:     cover,
			ID:        row.ID,
			Genres:    genres,
		})
	}

	sort.SliceStable(movies, func(i, j int) bool {
		return movies[i].Year > movies[j].Year
	})

	return movies, err
}
