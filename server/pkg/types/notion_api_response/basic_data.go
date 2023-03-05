package notion

type BasicDataQuery struct {
	Object  string `json:"object"`
	Results []struct {
		Properties struct {
			Name struct {
				Title []struct {
					PlainText string `json:"plain_text"`
				} `json:"title"`
			} `json:"Name"`
			Value struct {
				RichText []struct {
					PlainText string `json:"plain_text"`
				} `json:"rich_text"`
			} `json:"Value"`
			Files struct {
				Files []struct {
					File struct {
						URL string `json:"url"`
					} `json:"file"`
				} `json:"files"`
			} `json:"Files"`
		} `json:"properties"`
	} `json:"results"`
}
