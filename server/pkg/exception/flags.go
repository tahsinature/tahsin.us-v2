package exception

var flags map[string]string = map[string]string{
	"INVALID_LOGIN":      "INVALID_LOGIN",
	"ALREADY_REGISTERED": "ALREADY_REGISTERED",
	"ROUTE_NOT_FOUNT":    "ROUTE_NOT_FOUNT",
}

type FlagsType struct{}

var Flags = new(FlagsType)

func (FlagsType) Get(key string) string {
	if flags[key] == "" {
		panic("Flag not found: " + key)
	}
	return flags[key]
}
