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
    
    user := UserEntity{
        Account: r.Form["account"][0], 
        Password: r.Form["password"][0], 
        Type: int(loginType),
    }
    
    dao := GetApp().GetUserDAO()
    dao.Create(sys, dao.NewKey(sys, nil), user)
    
    return tool.DefaultResult{Success: true, Info:user}
}

func QueryUser(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    queryKey := "all"
	
    if r.Form["key"] != nil {
        queryKey = r.Form["key"][0]
    }
	
	dao := GetApp().GetUserDAO()
	
    if queryKey == "all" {
        return tool.DefaultResult{Success: true, Info:dao.ReadAll(sys, dao.NewQuery(sys))}
    }else{
		key, _ := strconv.ParseInt(r.Form["key"][0], 10, 0)
        return tool.DefaultResult{Success: true, Info:dao.Read(sys, dao.GetKey(sys, key, nil))}
    }
}