package services

import (
	"encoding/json"
	"fmt"
	"sort"

	"github.com/go-resty/resty/v2"
	"github.com/jinzhu/now"
	"github.com/tahsinature/tahsin.us/pkg/config"
	"github.com/tahsinature/tahsin.us/pkg/graph/model"
	notion "github.com/tahsinature/tahsin.us/pkg/types/notion_api_response"
	"github.com/tahsinature/tahsin.us/pkg/utilities"
)

type NotionService struct {
	client     *resty.Client
	reqBodyMap map[string]interface{}
}

func (n *NotionService) Init() {
	n.client = resty.New()

	n.client.SetHeader("Authorization", fmt.Sprintf("Bearer %s", config.Notion.Auth))
	n.client.SetHeader("Notion-Version", config.Notion.Version)

	n.reqBodyMap = map[string]interface{}{
		config.Notion.DB_Movies: map[string]interface{}{
			"filter": map[string]interface{}{
				"property": "ShowInApp",
				"checkbox": map[string]interface{}{
					"equals": true,
				},
			},
		},
	}
}

func (n NotionService) checkInit() {
	if n.client == nil {
		panic("notion not initialized")
	}
}

func (n NotionService) getDBResp(dbId string, mappedPointer interface{}) error {
	n.checkInit()

	url := fmt.Sprintf("https://api.notion.com/v1/databases/%s/query", dbId)

	apiResp, err := n.client.R().SetBody(n.reqBodyMap[dbId]).Post(url)
	if err != nil {
		fmt.Println(err)

		return err
	} else if apiResp.StatusCode() != 200 {
		err = fmt.Errorf(utilities.ReadJSON(apiResp.Body())["message"].(string))
		return err
	}

	json.Unmarshal(apiResp.Body(), mappedPointer)

	return nil
}

func (n NotionService) GetWatchedMovies() (movies []*model.Movie, err error) {
	apiResult := notion.MoviesQuery{}
	err = n.getDBResp(config.Notion.DB_Movies, &apiResult)
	if err != nil {
		return movies, err
	}

	for _, row := range apiResult.Results {
		releaseTime, _ := now.Parse(row.Properties.ApproxRelease.Date.Start)

		genres := []*model.Genre{}

		cover := ""

		if len(row.Properties.Covers.Files) > 0 {
			cover = row.Properties.Covers.Files[0].File.URL
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
		return movies[i].Year < movies[j].Year
	})

	return movies, err
}

func (n NotionService) GetBooks() (books []*model.Book, err error) {
	n.checkInit()

	apiResult := notion.BooksQuery{}
	err = n.getDBResp(config.Notion.DB_Books, &apiResult)
	if err != nil {
		return books, err
	}

	books = make([]*model.Book, 0)

	for _, row := range apiResult.Results {
		genres := []*model.Genre{}

		for _, genre := range row.Properties.Tags.MultiSelect {
			genres = append(genres, &model.Genre{
				ID:    genre.ID,
				Name:  genre.Name,
				Color: genre.Color,
			})
		}

		cover := ""

		if len(row.Properties.Covers.Files) > 0 {
			cover = row.Properties.Covers.Files[0].File.URL
		}

		isReading := false

		allowedStatus := []string{"Reading", "Finished", "RF"}
		if !utilities.ContainsInStrSlice(allowedStatus, row.Properties.Status.Select.Name) {
			continue
		} else {
			isReading = row.Properties.Status.Select.Name == "Reading"
		}

		books = append(books, &model.Book{
			ID:        row.ID,
			Title:     row.Properties.Name.Title[0].PlainText,
			Author:    row.Properties.Author.RichText[0].PlainText,
			MyRating:  row.Properties.PersonalRating.Number,
			Genres:    genres,
			Cover:     cover,
			IsReading: isReading,
		})
	}

	sort.SliceStable(books, func(i, j int) bool {
		if books[i].IsReading {
			return true
		}

		return books[i].MyRating > books[j].MyRating
	})

	return books, nil
}
