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
    FbId string
}

type IUserDAO interface {
    tool.IDataAccessObject
    Verify(account string, password string) bool
}

type StreetModelEntity struct {
	Key int64
	Caption string
	Description string	//資料
	Talk string 		//訪談
	Comment string		//評論
	ModelKey string
	Date time.Time
	DateUnix int64
	Tag string
	Available bool
	ModelType string
	Brand string
}

type IStreetModelDAO interface {
	tool.IDataAccessObject
	GetRandomModel(sys tool.ISystem, count int) StreetModelEntity
	SearchModelWithRegexp(sys tool.ISystem, regexp string, count int) []StreetModelEntity
}

type PhotoEntity struct {
	Key int64
	Belong int64
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

var GraphApi string = "https://graph.facebook.com/v2.1/"

type FBUserEntity struct {
    FbId string
    Name string
}

type IFBManager interface {
    Verify(sys tool.ISystem, token string) (user FBUserEntity, err error)
}

type IApp interface {
	GetUserDAO() IUserDAO
	GetStreetModelDAO() IStreetModelDAO
	GetPhotoDAO() IPhotoDAO
	GetSessionManager() ISessionManager
	GetCookieManager() tool.ICookieManager
    GetFBManager() IFBManager
}

func GetApp() IApp{
	return app
}