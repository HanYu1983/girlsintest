package handler

import (
	"lib/tool"
	"app"
)

func QueryStreetModel(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
	dao := app.GetApp().GetStreetModelDAO()
	if len(r.Form["Key"]) > 0 {
		key64 := tool.Str2Int64(r.Form["Key"][0])
		return tool.Success(dao.Read(sys, dao.GetKey(sys, key64, nil)))
	}else{
		q := dao.NewQuery(sys)
		q = q.Filter("Available =", true)
		hasOffset := len( r.Form["Offset"] ) > 0 
		if hasOffset {
			offset := tool.Str2Int64(r.Form["Offset"][0])
			q = q.Offset(int(offset))
		}
		hasLimit := len( r.Form["Limit"] ) > 0 
		if hasLimit {
			limit := tool.Str2Int64(r.Form["Limit"][0])
			q = q.Limit(int(limit))
		}
		return tool.Success(dao.ReadAll(sys, q))
	}
}