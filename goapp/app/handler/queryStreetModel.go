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
		return tool.Success(dao.ReadAll(sys, q))
	}
}