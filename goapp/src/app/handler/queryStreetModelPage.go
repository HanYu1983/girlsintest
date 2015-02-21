package handler

import (
	"lib/tool"
	"app"
)

func QueryStreetModelPage(sys tool.ISystem)interface{}{
	//tool.Verify( tool.ParamShouldBeInt( sys.GetRequest(), "Offset") )
	//tool.Verify( tool.ParamShouldBeInt( sys.GetRequest(), "Limit") )

	//r := sys.GetRequest()
	
	//offset := tool.Str2Int64(r.Form["Offset"][0])
	//limit := tool.Str2Int64(r.Form["Limit"][0])
	
	streetModelDao := app.GetApp().GetStreetModelDAO()
	q := streetModelDao.NewQuery(sys)
	//q = q.Offset(int(offset))
	//q = q.Limit(int(limit))
	
	model := map[string]interface{}{
		"StreetModels":streetModelDao.ReadAll(sys, q),
		//"Offset": offset,
		//"Limit": limit,
	}
	w := sys.GetResponse()
	w.Header().Set("Content-Type", "text/html")
    tool.TemplateWithFile("QueryStreetModel", "app/tmpl/QueryStreetModel.html").Execute(w, model)
    return tool.CustomView
}