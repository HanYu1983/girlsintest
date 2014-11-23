package handler

import (
	"lib/tool"
	"app"
)


func Login(sys tool.ISystem)interface{}{
    r := sys.GetRequest()
    userRepository := app.GetApp().GetUserDAO()
    cookieManager := app.GetApp().GetCookieManager()
    
    hasValue, _ := cookieManager.GetValue(sys)
    if hasValue {
        return tool.DefaultResult{Success: true, Info: "already login"}
    }
    
	tool.Verify( tool.ParamShouldExist( r, "account") )
	tool.Verify( tool.ParamShouldExist( r, "password") )
    
    account := r.Form["account"][0]
    pwd := r.Form["password"][0]
    
    verifyOk := userRepository.Verify(account, pwd)
    if verifyOk {
        cookieManager.SetValue(sys, "user login")
        return tool.DefaultResult{Success: true}
    }
    return tool.DefaultResult{Success: false, Info:"incorrect password"}
}