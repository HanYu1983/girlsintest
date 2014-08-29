package hello

import (
    "net/http"
    "strconv"
)

const(
    company = iota
    user = iota
)

func RegisterUser(w http.ResponseWriter, r *http.Request) interface{} {
    VerifyParam(r, "account", ParamNotNil())
    VerifyParam(r, "password", ParamNotNil())
    VerifyParam(r, "type", ParamInRange(0, 1))
    
    loginType, _ := strconv.ParseInt(r.Form["type"][0], 10, 0)
    
    user := User{
        Account: r.Form["account"][0], 
        Password: r.Form["password"][0], 
        Type: int(loginType),
    }
    
    repository := GetUserRepository()
    repository.Create(user)
    
    return DefaultResult{Success: true, Info:user}
}

func QueryUser(w http.ResponseWriter, r *http.Request) interface{} {
    queryKey := "all"
    if r.Form["key"] != nil {
        queryKey = r.Form["key"][0]
    }
    
    repository := GetUserRepository()
    
    if queryKey == "all" {
        return DefaultResult{Success: true, Info:repository.Keys()}
    }else{
        return DefaultResult{Success: true, Info:repository.Read(queryKey)}
    }
}