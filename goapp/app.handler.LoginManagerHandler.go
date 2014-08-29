package hello

import (
    "net/http"
)


func VerifyUserLogin(w http.ResponseWriter, r *http.Request){
    cookieManager := GetCookieManager(&w, r)
    hasValue, _ := cookieManager.GetValue()
    notLogin := hasValue == false
    PanicWhen( notLogin, "didn't login")
}

func Login(w http.ResponseWriter, r *http.Request)interface{}{
    
    userRepository := GetUserRepository()
    cookieManager := GetCookieManager(&w, r)
    
    hasValue, _ := cookieManager.GetValue()
    if hasValue {
        return DefaultResult{Success: true, Info: "already login"}
    }
    
    VerifyParam(r, "account", ParamNotNil())
    VerifyParam(r, "password", ParamNotNil())
    
    account := r.Form["account"][0]
    pwd := r.Form["password"][0]
    
    verifyOk := userRepository.Verify(account, pwd)
    if verifyOk {
        cookieManager.SetValue("user login")
        return DefaultResult{Success: true}
    }
    return DefaultResult{Success: false, Info:"incorrect password"}
}

func Logout(w http.ResponseWriter, r *http.Request)interface{}{
    cookieManager := GetCookieManager(&w, r)
    
    hasValue, _ := cookieManager.GetValue()
    if hasValue {
        cookieManager.Clear()
        return DefaultResult{Success: true}
    }else{
        return DefaultResult{}
    }
}