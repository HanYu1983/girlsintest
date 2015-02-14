package handler

import (
	"lib/tool"
	"app"
)


func Logout(sys tool.ISystem)interface{}{
    cookieManager := app.GetApp().GetCookieManager()
    hasValue, _ := cookieManager.GetValue(sys)
    if hasValue {
        cookieManager.Clear(sys)
        return tool.Success("logout")
    }else{
        return tool.NotSuccess("already logout")
    }
}