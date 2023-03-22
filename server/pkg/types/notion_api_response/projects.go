package notion

type ProjectsQuery struct {
	Results []struct {
		ID string `json:"id"`

		Properties struct {
			Name struct {
				Title []struct {
					PlainText string `json:"plain_text"`
				} `json:"title"`
			} `json:"Name"`
			Links struct {
				Files []struct {
					External struct {
						URL string `json:"url"`
					} `json:"external"`
				} `json:"files"`
			} `json:"Links"`
			Preview struct {
				Files []struct {
					File struct {
						URL string `json:"url"`
					} `json:"file"`
				} `json:"files"`
			} `json:"Preview"`
		} `json:"properties"`
	} `json:"results"`
}
