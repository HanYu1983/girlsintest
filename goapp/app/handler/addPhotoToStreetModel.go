
package handler

import (
	"lib/tool"
	"time"
	"app"
)

func AddPhotoToStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	tool.VerifyParam(r, "StreetModelKey", tool.ParamNotNil())
	tool.VerifyParam(r, "Base64", tool.ParamNotNil())
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	
	streetModelDAO := app.GetApp().GetStreetModelDAO()
	photoDAO := app.GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	
	for _, base64str := range r.Form["Base64"] {
		entity := app.PhotoEntity{Date: time.Now(), Base64:[]byte(base64str)}
		key := photoDAO.NewKey(sys, parentKey)
		photoDAO.Create(sys, key, entity)
	}
	
	isRedirect := len(r.Form["redirect"]) > 0
	if isRedirect {
		return tool.Redirect(r.Form["redirect"][0])
	}else{
		return tool.Success(parentKey.IntID())
	}
}