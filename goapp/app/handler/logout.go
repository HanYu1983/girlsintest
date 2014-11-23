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
        return tool.DefaultResult{Success: true}
    }else{
        return tool.DefaultResult{}
    }
}