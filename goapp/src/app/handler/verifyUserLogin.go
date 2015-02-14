package handler

import (
	"lib/tool"
	"app"
)


func VerifyUserLogin(sys tool.ISystem){
    cookieManager := app.GetApp().GetCookieManager()
    hasValue, _ := cookieManager.GetValue(sys)
    notLogin := hasValue == false
    tool.PanicWhen( notLogin, "didn't login")
}