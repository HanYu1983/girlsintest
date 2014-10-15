package app

import (
    "time"
	"lib/tool"
)

type User struct {
	Key int64
    Account string
    Password string
    Type int
}

type IUserRepository interface {
    tool.IRepository
    Verify(account string, password string) bool
}

type SimpleSession struct {
    Name string
    Expires time.Time
    Value string
}

type ISessionManager interface {
    GetSession(name string) SimpleSession
    SetSession(session SimpleSession)
}

type IApp interface {
	GetUserRepository() IUserRepository
	GetSessionManager() ISessionManager
	GetCookieManager() tool.ICookieManager
}

func GetApp() IApp{
	return app
}