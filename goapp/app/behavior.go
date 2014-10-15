package app

import (
    "time"
	"lib/tool"
)

type UserEntity struct {
	Key int64
    Account string
    Password string
    Type int
}

type IUserDAO interface {
    tool.IDataAccessObject
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
	GetUserDAO() IUserDAO
	GetSessionManager() ISessionManager
	GetCookieManager() tool.ICookieManager
}

func GetApp() IApp{
	return app
}