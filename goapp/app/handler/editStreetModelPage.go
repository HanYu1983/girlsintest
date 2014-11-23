package handler

import (
	"lib/tool"
	"app"
)

func EditStreetModelPage(sys tool.ISystem)interface{}{
	r := sys.GetRequest()
	w := sys.GetResponse()

	tool.VerifyParam(r, "Key", tool.ParamNotNil())
	mk := tool.Str2Int64( r.Form["Key"][0] )
	
	streetModelDAO := app.GetApp().GetStreetModelDAO()
	photoDAO := app.GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	allPhotoQuery := photoDAO.NewQuery(sys).Ancestor(parentKey)
	
	model := map[string]interface{}{
		"StreetModelKey":mk,
		"PhotoList":photoDAO.ReadAll(sys, allPhotoQuery),
	}
	w.Header().Set("Content-Type", "text/html")
    tool.TemplateWithFile("EditStreetModel", "app/tmpl/EditStreetModel.html").Execute(w, model)
    return tool.CustomView
}