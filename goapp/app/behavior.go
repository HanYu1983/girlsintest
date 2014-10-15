package app

import (
    "time"
    "net/http"
	"lib/tool"
)

type User struct {
    Account string
    Password string
    Type int
}

type IUserRepository interface {
    Create(user User)
    Update(id string, user User)
    Read(id string)(user User)
    Delete(id string)
    Keys()(keys []string)
    
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

type ICookieManager interface {
    GetValue()(bool, string)
    SetValue(v string)
    Clear()
}

var repository IUserRepository = IUserRepository(&MemoryUserRepository{Users:map[string]User{}})

func GetUserRepository() IUserRepository{
    return repository
}

func GetSessionManager() ISessionManager{
    return nil
}

func GetCookieManager(w http.ResponseWriter, r *http.Request) ICookieManager{
    return ICookieManager(&tool.SimpleCookieManager{HttpRequest: r, ResponseWriter: w})
}