// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Article struct {
	ID    string `json:"id"`
	Title string `json:"title"`
	Cover string `json:"cover"`
	URL   string `json:"url"`
}

type Book struct {
	ID        string   `json:"id"`
	Title     string   `json:"title"`
	Author    string   `json:"author"`
	MyRating  int      `json:"myRating"`
	Genres    []*Genre `json:"genres"`
	Cover     string   `json:"cover"`
	IsReading bool     `json:"isReading"`
}

type Genre struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Color string `json:"color"`
}

type HumanLanguage struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	SubOnLang string `json:"subOnLang"`
	SubOnEng  string `json:"subOnEng"`
}

type Movie struct {
	ID        string   `json:"id"`
	Title     string   `json:"title"`
	Year      int      `json:"year"`
	MyRating  int      `json:"myRating"`
	Genres    []*Genre `json:"genres"`
	Image     string   `json:"image"`
	WatchedAt string   `json:"watchedAt"`
}

type Photograph struct {
	ID       string `json:"id"`
	Location string `json:"location"`
	URL      string `json:"url"`
	Caption  string `json:"caption"`
	Camera   string `json:"camera"`
}

type ProgrammingLanguage struct {
	ID   string `json:"id"`
	Name string `json:"name"`
	Code string `json:"code"`
	Logo string `json:"logo"`
}
