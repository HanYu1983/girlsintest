package handler

import (
	"lib/tool"
	"app"
	"appengine/datastore"
)

func QueryPhotoWithStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	tool.VerifyParam(r, "StreetModelKey", tool.ParamNotNil())
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	
	streetModelDAO := app.GetApp().GetStreetModelDAO()
	photoDAO := app.GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	
	isQuerySingle := len( r.Form["Key"] ) > 0
	if isQuerySingle {
		keys := []*datastore.Key{}
		for _, keyStr := range r.Form["Key"] {
			keys = append( keys, photoDAO.GetKey(sys, tool.Str2Int64(keyStr), parentKey) )
		}
		return tool.Success(photoDAO.ReadMulti(sys, keys))
	}else{
		query := photoDAO.NewQuery(sys).Ancestor(parentKey)
		ret := photoDAO.ReadAll(sys, query)
		return tool.Success(ret)
	}
}