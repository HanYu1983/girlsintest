package handler

import (
    "strconv"
	"lib/tool"
	"app"
)

func QueryUser(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    queryKey := "all"
	
    if r.Form["key"] != nil {
        queryKey = r.Form["key"][0]
    }
	
	dao := app.GetApp().GetUserDAO()
	
    if queryKey == "all" {
        return tool.DefaultResult{Success: true, Info:dao.ReadAll(sys, dao.NewQuery(sys))}
    }else{
		key, _ := strconv.ParseInt(r.Form["key"][0], 10, 0)
        return tool.DefaultResult{Success: true, Info:dao.Read(sys, dao.GetKey(sys, key, nil))}
    }
}