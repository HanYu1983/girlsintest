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

type StreetModelEntity struct {
	Key int64
	Caption string
	Description string
	ModelKey string
	Photo1 string
	Photo2 string
	UploadTime time.Time
}

type IStreetModelDAO interface {
	tool.IDataAccessObject
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
	GetStreetModelDAO() IStreetModelDAO
	GetSessionManager() ISessionManager
	GetCookieManager() tool.ICookieManager
}

func GetApp() IApp{
	return app
}