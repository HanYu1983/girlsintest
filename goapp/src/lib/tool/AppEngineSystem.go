package tool

import (
	"net/http"
  "appengine"
)

type AppEngineSystem struct {
	Request *http.Request
	Response http.ResponseWriter
  Context appengine.Context
}

func (s AppEngineSystem) GetRequest() *http.Request{
	return s.Request
}

func (s AppEngineSystem) GetResponse() http.ResponseWriter{
	return s.Response
}

func (s AppEngineSystem) GetContext() appengine.Context{
  return s.Context
}

func (s AppEngineSystem) Log(msg interface{}){
	var logger ILogger
	logger = &SimpleLogger{Writer: s.Response}
	logger.Log(msg)
}

