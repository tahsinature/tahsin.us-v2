package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/tahsinature/tahsin.us/pkg/graph/generated"
	"github.com/tahsinature/tahsin.us/pkg/graph/model"
	"github.com/tahsinature/tahsin.us/pkg/services"
)

func (r *queryResolver) Movies(ctx context.Context) ([]*model.Movie, error) {
	data, err := services.All.Notion.GetWatchedMovies()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) Books(ctx context.Context) ([]*model.Book, error) {
	data, err := services.All.Notion.GetBooks()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) Articles(ctx context.Context) ([]*model.Article, error) {
	data, err := services.All.Notion.GetArticles()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) ProgrammingLanguages(ctx context.Context) ([]*model.ProgrammingLanguage, error) {
	data, err := services.All.Notion.GetProgrammingLanguages()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) HumanLanguages(ctx context.Context) ([]*model.HumanLanguage, error) {
	data, err := services.All.Notion.GetHumanLanguages()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) Photographs(ctx context.Context) ([]*model.Photograph, error) {
	data, err := services.All.Notion.GetPhotographs()
	if err != nil {
		return nil, err
	}

	return data, err
}

func (r *queryResolver) Projects(ctx context.Context) ([]*model.Project, error) {
	data, err := services.All.Notion.GetProjects()
	if err != nil {
		return nil, err
	}

	return data, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
