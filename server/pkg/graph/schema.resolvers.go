package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/tahsinature/tahsin.us/pkg/graph/generated"
	"github.com/tahsinature/tahsin.us/pkg/graph/model"
	"github.com/tahsinature/tahsin.us/pkg/services"
)

var notionService = new(services.Notion)

func (r *queryResolver) Movies(ctx context.Context) (movies []*model.Movie, err error) {
	data, err := notionService.GetWatchedMovies()
	if err != nil {
		return nil, err
	}

	return data, err
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
