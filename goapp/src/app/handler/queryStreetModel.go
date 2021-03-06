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
		
	}else if len(r.Form["Rand"]) > 0 {
		return tool.Success(app.GetApp().GetStreetModelDAO().GetRandomModel(sys, 1))
		
	}else if len(r.Form["Regexp"]) > 0 {
		regstr := r.Form["Regexp"][0]
		limit := 10
		hasLimit := len( r.Form["Limit"] ) > 0 
		if hasLimit {
			limit = int(tool.Str2Int64(r.Form["Limit"][0]))
		}
		return tool.Success(app.GetApp().GetStreetModelDAO().SearchModelWithRegexp(sys, regstr, limit))
		
	}else{
		q := dao.NewQuery(sys)
		q = q.Filter("Available =", true)
		hasModelType := len( r.Form["ModelType"] ) > 0
		if hasModelType {
			q = q.Filter("ModelType =", r.Form["ModelType"][0])
		}
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