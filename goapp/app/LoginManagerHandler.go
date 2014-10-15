package app

import (
	"lib/tool"
)


func VerifyUserLogin(sys tool.ISystem){
    cookieManager := GetCookieManager(sys.GetResponse(), sys.GetRequest())
    hasValue, _ := cookieManager.GetValue()
    notLogin := hasValue == false
    tool.PanicWhen( notLogin, "didn't login")
}

func Login(sys tool.ISystem)interface{}{
    r := sys.GetRequest()
    userRepository := GetUserRepository()
    cookieManager := GetCookieManager(sys.GetResponse(), r)
    
    hasValue, _ := cookieManager.GetValue()
    if hasValue {
        return tool.DefaultResult{Success: true, Info: "already login"}
    }
    
    tool.VerifyParam(r, "account", tool.ParamNotNil())
    tool.VerifyParam(r, "password", tool.ParamNotNil())
    
    account := r.Form["account"][0]
    pwd := r.Form["password"][0]
    
    verifyOk := userRepository.Verify(account, pwd)
    if verifyOk {
        cookieManager.SetValue("user login")
        return tool.DefaultResult{Success: true}
    }
    return tool.DefaultResult{Success: false, Info:"incorrect password"}
}

func Logout(sys tool.ISystem)interface{}{
	r := sys.GetRequest()
	w := sys.GetResponse()
    cookieManager := GetCookieManager(w, r)
    
    hasValue, _ := cookieManager.GetValue()
    if hasValue {
        cookieManager.Clear()
        return tool.DefaultResult{Success: true}
    }else{
        return tool.DefaultResult{}
    }
}