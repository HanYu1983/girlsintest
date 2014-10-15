package app

import (
    "strconv"
	"lib/tool"
)

const(
    company = iota
    user = iota
)

func RegisterUser(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    tool.VerifyParam(r, "account", tool.ParamNotNil())
    tool.VerifyParam(r, "password", tool.ParamNotNil())
    tool.VerifyParam(r, "type", tool.ParamInRange(0, 1))
    
    loginType, _ := strconv.ParseInt(r.Form["type"][0], 10, 0)
    
    user := User{
        Account: r.Form["account"][0], 
        Password: r.Form["password"][0], 
        Type: int(loginType),
    }
    
    repository := GetUserRepository()
    repository.Create(user)
    
    return tool.DefaultResult{Success: true, Info:user}
}

func QueryUser(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    queryKey := "all"
    if r.Form["key"] != nil {
        queryKey = r.Form["key"][0]
    }
    
    repository := GetUserRepository()
    
    if queryKey == "all" {
        return tool.DefaultResult{Success: true, Info:repository.Keys()}
    }else{
        return tool.DefaultResult{Success: true, Info:repository.Read(queryKey)}
    }
}