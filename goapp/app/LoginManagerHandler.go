package app

import (
	"lib/tool"
)


func VerifyUserLogin(sys tool.ISystem){
    cookieManager := GetApp().GetCookieManager()
    hasValue, _ := cookieManager.GetValue(sys)
    notLogin := hasValue == false
    tool.PanicWhen( notLogin, "didn't login")
}

func Login(sys tool.ISystem)interface{}{
    r := sys.GetRequest()
    userRepository := GetApp().GetUserDAO()
    cookieManager := GetApp().GetCookieManager()
    
    hasValue, _ := cookieManager.GetValue(sys)
    if hasValue {
        return tool.DefaultResult{Success: true, Info: "already login"}
    }
    
    tool.VerifyParam(r, "account", tool.ParamNotNil())
    tool.VerifyParam(r, "password", tool.ParamNotNil())
    
    account := r.Form["account"][0]
    pwd := r.Form["password"][0]
    
    verifyOk := userRepository.Verify(account, pwd)
    if verifyOk {
        cookieManager.SetValue(sys, "user login")
        return tool.DefaultResult{Success: true}
    }
    return tool.DefaultResult{Success: false, Info:"incorrect password"}
}

func Logout(sys tool.ISystem)interface{}{
    cookieManager := GetApp().GetCookieManager()
    
    hasValue, _ := cookieManager.GetValue(sys)
    if hasValue {
        cookieManager.Clear(sys)
        return tool.DefaultResult{Success: true}
    }else{
        return tool.DefaultResult{}
    }
}