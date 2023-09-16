package notion

type TodoQuery struct {
	Results []struct {
		ID string `json:"id"`

		Properties struct {
			Name struct {
				Title []struct {
					PlainText string `json:"plain_text"`
				} `json:"title"`
			} `json:"Name"`
			Status struct {
				Status struct {
					ID    string `json:"id"`
					Name  string `json:"name"`
					Color string `json:"color"`
				} `json:"status"`
			} `json:"Status"`
		} `json:"properties"`
	} `json:"results"`
}
