package notion

import "time"

type BooksQuery struct {
	Object  string `json:"object"`
	Results []struct {
		Object         string    `json:"object"`
		ID             string    `json:"id"`
		CreatedTime    time.Time `json:"created_time"`
		LastEditedTime time.Time `json:"last_edited_time"`
		CreatedBy      struct {
			Object string `json:"object"`
			ID     string `json:"id"`
		} `json:"created_by"`
		LastEditedBy struct {
			Object string `json:"object"`
			ID     string `json:"id"`
		} `json:"last_edited_by"`
		Cover  interface{} `json:"cover"`
		Icon   interface{} `json:"icon"`
		Parent struct {
			Type       string `json:"type"`
			DatabaseID string `json:"database_id"`
		} `json:"parent"`
		Archived   bool `json:"archived"`
		Properties struct {
			ReadTimeline struct {
				ID   string `json:"id"`
				Type string `json:"type"`
				Date struct {
					Start    string      `json:"start"`
					End      interface{} `json:"end"`
					TimeZone interface{} `json:"time_zone"`
				} `json:"date"`
			} `json:"Read Timeline"`
			Covers struct {
				ID    string `json:"id"`
				Type  string `json:"type"`
				Files []struct {
					Name string `json:"name"`
					Type string `json:"type"`
					File struct {
						URL        string    `json:"url"`
						ExpiryTime time.Time `json:"expiry_time"`
					} `json:"file"`
				} `json:"files"`
			} `json:"Covers"`
			Author struct {
				ID          string `json:"id"`
				Type        string `json:"type"`
				MultiSelect []struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"multi_select"`
			} `json:"Author"`
			PersonalRating struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Number int    `json:"number"`
			} `json:"Personal Rating"`
			Tags struct {
				ID          string `json:"id"`
				Type        string `json:"type"`
				MultiSelect []struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"multi_select"`
			} `json:"Tags"`
			Status struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Select struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"select"`
			} `json:"Status"`
			Files struct {
				ID    string        `json:"id"`
				Type  string        `json:"type"`
				Files []interface{} `json:"files"`
			} `json:"Files"`
			Name struct {
				ID    string `json:"id"`
				Type  string `json:"type"`
				Title []struct {
					Type string `json:"type"`
					Text struct {
						Content string `json:"content"`
						Link    struct {
							URL string `json:"url"`
						} `json:"link"`
					} `json:"text"`
					Annotations struct {
						Bold          bool   `json:"bold"`
						Italic        bool   `json:"italic"`
						Strikethrough bool   `json:"strikethrough"`
						Underline     bool   `json:"underline"`
						Code          bool   `json:"code"`
						Color         string `json:"color"`
					} `json:"annotations"`
					PlainText string `json:"plain_text"`
					Href      string `json:"href"`
				} `json:"title"`
			} `json:"Name"`
		} `json:"properties"`
		URL string `json:"url"`
	} `json:"results"`
	NextCursor interface{} `json:"next_cursor"`
	HasMore    bool        `json:"has_more"`
}
