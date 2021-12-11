package exception

type Response struct {
	HTTPCode int
	Flag     string
	Message  string
}

func (Response) New(code int, flag string, message string) *Response {
	return &Response{
		HTTPCode: code,
		Flag:     flag,
		Message:  message,
	}
}
