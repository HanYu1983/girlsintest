package handler

import (
	"lib/tool"
	"app"
)

func DeletePhotoWithStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	
	tool.Verify( tool.ParamShouldExist( r, "StreetModelKey") )
	tool.Verify( tool.ParamShouldExist( r, "PhotoKey") )
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	pk := tool.Str2Int64( r.Form["PhotoKey"][0] )
	
	streetModelDAO := app.GetApp().GetStreetModelDAO()
	photoDAO := app.GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	photoKey := photoDAO.GetKey(sys, pk, parentKey)
	
	photoDAO.Delete(sys, photoKey)

	isRedirect := len(r.Form["redirect"]) > 0
	if isRedirect {
		return tool.Redirect(r.Form["redirect"][0])
	}else{
		return tool.Success(parentKey.IntID())
	}
}