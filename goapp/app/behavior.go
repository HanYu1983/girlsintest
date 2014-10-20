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
	Date time.Time
}

type IStreetModelDAO interface {
	tool.IDataAccessObject
}

type PhotoEntity struct {
	Key int64
	Base64 string
	Date time.Time
}

type IPhotoDAO interface {
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
	GetPhotoDAO() IPhotoDAO
	GetSessionManager() ISessionManager
	GetCookieManager() tool.ICookieManager
}

func GetApp() IApp{
	return app
}