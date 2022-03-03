package services

import (
	"encoding/json"
	"fmt"

	"github.com/go-resty/resty/v2"
)

type (
	IPService struct{}
	Response  struct {
		Ip          string `json:"ip"`
		City        string `json:"city"`
		Region      string `json:"region"`
		CountryName string `json:"country_name"`
		ASN         string `json:"asn"`
		Org         string `json:"org"`
		Error       bool   `json:"error"`
		Reason      string `json:"reason"`
		Reserved    bool   `json:"reserved"`
		Version     string `json:"version"`
	}
)

func (IPService) Lookup(ip string) Response {
	client := resty.New()
	url := fmt.Sprintf("https://ipapi.co/%s/json", ip)
	response, err := client.R().Get(url)
	if err != nil {
		panic(err)
	}

	var resp Response
	json.Unmarshal(response.Body(), &resp)

	return resp
}
