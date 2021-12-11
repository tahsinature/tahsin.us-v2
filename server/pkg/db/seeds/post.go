package seeds

import (
	"github.com/brianvoe/gofakeit/v6"
	"github.com/tahsinature/future-proof-gin/pkg/db"
	"github.com/tahsinature/future-proof-gin/pkg/db/models"
)

type PostSeeder struct{}

func (PostSeeder) CreateOne(user models.User) *models.Post {
	db := db.GetDB()
	postModel := models.Post{
		Title:    gofakeit.Sentence(3),
		Body:     gofakeit.Sentence(10),
		AuthorId: user.ID,
	}

	err := db.Create(&postModel).Error
	if err != nil {
		panic(err)
	}

	return &postModel
}

func (ps PostSeeder) CreateMany(users []models.User, count int) []models.Post {
	total := len(users) * count
	posts := make([]models.Post, total*count)

	for _, user := range users {
		for i := 0; i < total*count; i++ {
			post := ps.CreateOne(user)
			posts[i] = *post
		}
	}

	return posts
}
