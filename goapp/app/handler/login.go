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
        return tool.NotSuccess("already login")
    }
    
    isLoginByFB := len( r.Form["fbtoken"] ) > 0
    if isLoginByFB {
        fbtoken := r.Form["fbtoken"][0]
        
        fbManager := app.GetApp().GetFBManager()
        fbUser, err := fbManager.Verify( sys, fbtoken )
        
        if err != nil {
            return tool.NotSuccess( err.Error() )
        } else {
            cookieManager.SetValue(sys, "{'name':'"+ fbUser.Name +"'}")
            return tool.Success("register ok, set cookie")
        }
    } else {
    	tool.Verify( tool.ParamShouldExist( r, "account") )
    	tool.Verify( tool.ParamShouldExist( r, "password") )
    
        account := r.Form["account"][0]
        pwd := r.Form["password"][0]
    
        verifyOk := userRepository.Verify(account, pwd)
        if verifyOk {
            cookieManager.SetValue(sys, "{'name':'"+ account +"'}")
            return tool.Success("register ok, set cookie")
        }
        return tool.NotSuccess("incorrect password")
    }
}