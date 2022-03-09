package notion

import "time"

type HumanLanguagesQuery struct {
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
			ShowInApp struct {
				ID       string `json:"id"`
				Type     string `json:"type"`
				Checkbox bool   `json:"checkbox"`
			} `json:"ShowInApp"`
			SubOnLang struct {
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
			} `json:"SubOnLang"`
			SortField struct {
				ID     string `json:"id"`
				Type   string `json:"type"`
				Number int    `json:"number"`
			} `json:"SortField"`
			SubOnEng struct {
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
			} `json:"SubOnEng"`
			Name struct {
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
			} `json:"Name"`
		} `json:"properties"`
		URL string `json:"url"`
	} `json:"results"`
	NextCursor interface{} `json:"next_cursor"`
	HasMore    bool        `json:"has_more"`
	Type       string      `json:"type"`
	Page       struct{}    `json:"page"`
}
