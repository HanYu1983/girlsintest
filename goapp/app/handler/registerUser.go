package handler

import (
    "strconv"
	"lib/tool"
	"app"
)


func RegisterUser(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    tool.VerifyParam(r, "account", tool.ParamNotNil())
    tool.VerifyParam(r, "password", tool.ParamNotNil())
    tool.VerifyParam(r, "type", tool.ParamInRange(0, 1))
    
    loginType, _ := strconv.ParseInt(r.Form["type"][0], 10, 0)
    
    user := app.UserEntity{
        Account: r.Form["account"][0], 
        Password: r.Form["password"][0], 
        Type: int(loginType),
    }
    
    dao := app.GetApp().GetUserDAO()
    dao.Create(sys, dao.NewKey(sys, nil), user)
    
    return tool.DefaultResult{Success: true, Info:user}
}
