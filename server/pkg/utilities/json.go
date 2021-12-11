package utilities

import (
	"database/sql/driver"
	"encoding/json"
	"errors"
)

type UtilRepository json.RawMessage

func (j UtilRepository) Value() (driver.Value, error) {
	byteArr := []byte(j)
	return driver.Value(byteArr), nil
}

func (j *UtilRepository) Scan(src interface{}) error {
	asBytes, ok := src.([]byte)
	if !ok {
		return error(errors.New("Scan source was not []bytes"))
	}
	err := json.Unmarshal(asBytes, &j)
	if err != nil {
		return error(errors.New("Scan could not unmarshal to []string"))
	}
	return nil
}

func (j *UtilRepository) MarshalJSON() ([]byte, error) {
	return *j, nil
}

func (j *UtilRepository) UnmarshalJSON(data []byte) error {
	if j == nil {
		return errors.New("json.RawMessage: UnmarshalJSON on nil pointer")
	}
	*j = append((*j)[0:0], data...)
	return nil
}
