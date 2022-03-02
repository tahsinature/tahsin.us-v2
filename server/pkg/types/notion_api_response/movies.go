package notion

import "time"

type MoviesQuery struct {
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
		Cover struct {
			Type     string `json:"type"`
			External struct {
				URL string `json:"url"`
			} `json:"external"`
			File struct {
				URL        string `json:"url"`
				ExpiryTime string `json:"expiry_time"`
			} `json:"file"`
		} `json:"cover"`
		Icon   interface{} `json:"icon"`
		Parent struct {
			Type       string `json:"type"`
			DatabaseID string `json:"database_id"`
		} `json:"parent"`
		Archived   bool `json:"archived"`
		Properties struct {
			AppTahsinUs struct {
				ID       string        `json:"id"`
				Type     string        `json:"type"`
				Relation []interface{} `json:"relation"`
			} `json:"App -> tahsin.us"`
			ApproxRelease struct {
				ID   string `json:"id"`
				Type string `json:"type"`
				Date struct {
					Start    string      `json:"start"`
					End      interface{} `json:"end"`
					TimeZone interface{} `json:"time_zone"`
				} `json:"date"`
			} `json:"Approx Release"`
			Where struct {
				ID       string `json:"id"`
				Type     string `json:"type"`
				RichText []struct {
					Type string `json:"type"`
					Text struct {
						Content string      `json:"content"`
						Link    interface{} `json:"link"`
					} `json:"text"`
					Annotations struct {
						Bold          bool   `json:"bold"`
						Italic        bool   `json:"italic"`
						Strikethrough bool   `json:"strikethrough"`
						Underline     bool   `json:"underline"`
						Code          bool   `json:"code"`
						Color         string `json:"color"`
					} `json:"annotations"`
					PlainText string      `json:"plain_text"`
					Href      interface{} `json:"href"`
				} `json:"rich_text"`
			} `json:"Where"`
			Nudity struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Select struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"select"`
			} `json:"Nudity"`
			Type struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Select struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"select"`
			} `json:"Type"`
			Rating110 struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Number int    `json:"number"`
			} `json:"Rating (1-10)"`
			Column struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Select struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"select"`
			} `json:"Column"`
			ShowInApp struct {
				ID       string `json:"id"`
				Type     string `json:"type"`
				Checkbox bool   `json:"checkbox"`
			}
			Genre struct {
				ID          string `json:"id"`
				Type        string `json:"type"`
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
			WatchCount struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Number int    `json:"number"`
			} `json:"Watch Count"`
			Title struct {
				ID    string `json:"id"`
				Type  string `json:"type"`
				Title []struct {
					Type string `json:"type"`
					Text struct {
						Content string      `json:"content"`
						Link    interface{} `json:"link"`
					} `json:"text"`
					Annotations struct {
						Bold          bool   `json:"bold"`
						Italic        bool   `json:"italic"`
						Strikethrough bool   `json:"strikethrough"`
						Underline     bool   `json:"underline"`
						Code          bool   `json:"code"`
						Color         string `json:"color"`
					} `json:"annotations"`
					PlainText string      `json:"plain_text"`
					Href      interface{} `json:"href"`
				} `json:"title"`
			} `json:"Title"`
		} `json:"properties"`
		URL string `json:"url"`
	} `json:"results"`
	NextCursor interface{} `json:"next_cursor"`
	HasMore    bool        `json:"has_more"`
	Type       string      `json:"type"`
	Page       struct{}    `json:"page"`
}
