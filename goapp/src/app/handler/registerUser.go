package handler

import (
    "strconv"
	"lib/tool"
	"app"
)


func RegisterUser(sys tool.ISystem) interface{} {
	tool.Verify( tool.ParamShouldExist( sys.GetRequest(), "account") )
	tool.Verify( tool.ParamShouldExist( sys.GetRequest(), "password") )
	tool.Verify( tool.ParamShouldInRange( sys.GetRequest(), "type", 0, 1) )
	
	r := sys.GetRequest()
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
