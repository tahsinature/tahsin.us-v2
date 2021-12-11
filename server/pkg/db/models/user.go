package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	ID       string `gorm:"default:uuid_generate_v4()"`
	Email    string
	Password string
	Name     string
}

func (User) TableName() string {
	return "users"
}
