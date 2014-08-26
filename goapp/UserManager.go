package hello

import (
    "net/http"
    "strconv"
)

const(
    company = iota
    user = iota
)

type UserManagerResult struct{
    Message string
    Info interface{}
}

func RegisterUser(r *http.Request) interface{} {
    //PanicWhen(r.Method != "POST", "must post!")
    //PanicWhen(len(r.Form["account"])==0, "no account")
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
    
    return UserManagerResult{Info:user}
}

func QueryUser(r *http.Request) interface{} {
    queryKey := "all"
    if r.Form["key"] != nil {
        queryKey = r.Form["key"][0]
    }
    
    repository := GetUserRepository()
    
    if queryKey == "all" {
        return UserManagerResult{Info:repository.Keys()}
    }else{
        return UserManagerResult{Info:repository.Read(queryKey)}
    }
}