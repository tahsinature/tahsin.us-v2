package utilities

import (
	"encoding/json"
)

func ReadJSON(payload []byte) (value map[string]interface{}) {
	json.Unmarshal(payload, &value)
	return value
}
