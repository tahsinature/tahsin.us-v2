package notion

type MoviesQuery struct {
	Object  string `json:"object"`
	Results []struct {
		ID string `json:"id"`

		Properties struct {
			Release struct {
				RichText []struct {
					PlainText string `json:"plain_text"`
				} `json:"rich_text"`
			} `json:"Release"`
			Covers struct {
				Files []struct {
					File struct {
						URL string `json:"url"`
					} `json:"file"`
				} `json:"files"`
			} `json:"Covers"`
			Rating110 struct {
				Number int `json:"number"`
			} `json:"Rating (1-10)"`
			Genre struct {
				MultiSelect []struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"multi_select"`
			} `json:"Genre"`
			WatchDate struct {
				ID   string `json:"id"`
				Type string `json:"type"`
				Date struct {
					Start    string      `json:"start"`
					End      interface{} `json:"end"`
					TimeZone interface{} `json:"time_zone"`
				} `json:"date"`
			} `json:"Watch Date"`
			Title struct {
				Title []struct {
					PlainText string `json:"plain_text"`
				} `json:"title"`
			} `json:"Title"`
		} `json:"properties"`
	} `json:"results"`
	NextCursor interface{} `json:"next_cursor"`
	HasMore    bool        `json:"has_more"`
	Type       string      `json:"type"`
	Page       struct{}    `json:"page"`
}
