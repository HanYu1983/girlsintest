package tool

import (
	"net/http"
)

type IDataAccessObject interface {
    Create(sys ISystem, po interface{}) int64
    Update(sys ISystem, key int64, po interface{})
    Read(sys ISystem, key int64) interface{}
    Delete(sys ISystem, key int64)
    GetAll(sys ISystem) []interface{}
}

type ICookieManager interface {
    GetValue(sys ISystem)(bool, string)
    SetValue(sys ISystem, v string)
    Clear(sys ISystem)
}

type ILogger interface {
	Log(msg interface{})
}

type ISystem interface {
	GetRequest() *http.Request
	GetResponse() http.ResponseWriter
	Log(msg interface{})
}

type IEventManager interface{
	AddSender(key string, fn func(mgr IEventManager))
	RemoveSender(key string, fn func(mgr IEventManager))
	AddReceiver(key string, fn interface{})
	RemoveReceiver(key string, fn interface{})
	SendAgain()
	Send(key string, params ... interface{})
}