package handler

import (
	"lib/tool"
	"app"
)

func QueryStreetModelPage(sys tool.ISystem)interface{}{
	streetModelDao := app.GetApp().GetStreetModelDAO()
	model := map[string]interface{}{
		"StreetModels":streetModelDao.ReadAll(sys, streetModelDao.NewQuery(sys)),
	}
	w := sys.GetResponse()
	w.Header().Set("Content-Type", "text/html")
    tool.TemplateWithFile("QueryStreetModel", "app/tmpl/QueryStreetModel.html").Execute(w, model)
    return tool.CustomView
}