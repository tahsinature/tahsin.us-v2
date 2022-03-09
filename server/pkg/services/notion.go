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
		config.Notion.DB_Articles: map[string]interface{}{
			"filter": map[string]interface{}{
				"property": "ShowInApp",
				"checkbox": map[string]interface{}{
					"equals": true,
				},
			},
		},
		config.Notion.DB_ProgrammingLanguages: map[string]interface{}{
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

func (n NotionService) GetArticles() (articles []*model.Article, err error) {
	n.checkInit()

	apiResp := notion.ArticlesQuery{}
	err = n.getDBResp(config.Notion.DB_Articles, &apiResp)
	if err != nil {
		return articles, err
	}

	articles = make([]*model.Article, 0)

	sort.SliceStable(apiResp.Results, func(i, j int) bool {
		return apiResp.Results[i].Properties.SortField.Number < apiResp.Results[j].Properties.SortField.Number
	})

	for _, row := range apiResp.Results {
		cover := ""
		url := ""
		title := ""

		if len(row.Properties.Cover.Files) > 0 {
			cover = row.Properties.Cover.Files[0].File.URL
		}

		if len(row.Properties.Links.Files) > 0 {
			url = row.Properties.Links.Files[0].External.URL
		}

		if len(row.Properties.Name.Title) > 0 {
			title = row.Properties.Name.Title[0].PlainText
		}

		articles = append(articles, &model.Article{
			ID:    row.ID,
			Title: title,
			Cover: cover,
			URL:   url,
		})
	}

	return articles, err
}

func (n NotionService) GetProgrammingLanguages() (languages []*model.ProgrammingLanguage, err error) {
	n.checkInit()

	apiResp := notion.ProgrammingLangugesQuery{}
	err = n.getDBResp(config.Notion.DB_ProgrammingLanguages, &apiResp)
	if err != nil {
		return languages, err
	}

	sort.SliceStable(apiResp.Results, func(i, j int) bool {
		return apiResp.Results[i].Properties.SortField.Number < apiResp.Results[j].Properties.SortField.Number
	})

	for _, row := range apiResp.Results {
		record := &model.ProgrammingLanguage{
			ID: row.ID,
		}

		if len(row.Properties.Name.Title) > 0 {
			record.Name = row.Properties.Name.Title[0].PlainText
		}

		if len(row.Properties.Logo.Files) > 0 {
			record.Logo = row.Properties.Logo.Files[0].File.URL
		}
		if len(row.Properties.Code.RichText) > 0 {
			record.Code = row.Properties.Code.RichText[0].PlainText
		}

		languages = append(languages, record)
	}

	return languages, err
}
