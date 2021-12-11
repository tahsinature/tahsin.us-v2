package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	ID       string `gorm:"default:uuid_generate_v4()"`
	Title    string
	Body     string
	AuthorId string
}

func (Post) TableName() string {
	return "posts"
}
