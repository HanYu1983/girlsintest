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
	Tag string
}

type IStreetModelDAO interface {
	tool.IDataAccessObject
}

type PhotoEntity struct {
	Key int64
	Base64 []byte
	Base64Str string	//存的同樣是base64, 只是轉成字串的型式, 會在取值時做輸換, 節省空間
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