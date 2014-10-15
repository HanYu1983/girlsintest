package app

import (
    _ "strconv"
	"lib/tool"
	"time"
)

func CreateStreetModel(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
    tool.VerifyParam(r, "Caption", tool.ParamNotNil())
    tool.VerifyParam(r, "ModelKey", tool.ParamNotNil())

    entity := StreetModelEntity{
        Caption: r.Form["Caption"][0], 
        ModelKey: r.Form["ModelKey"][0],
		UploadTime: time.Now(),
    }
	
	if len(r.Form["Description"]) > 0 {
		entity.Description = r.Form["Description"][0]
	}
	if len(r.Form["Photo1"]) > 0 {
		entity.Photo1 = r.Form["Photo1"][0]
	}
	if len(r.Form["Photo2"]) > 0 {
		entity.Photo2 = r.Form["Photo2"][0]
	}
    
    dao := GetApp().GetStreetModelDAO()
    dao.Create(sys, entity)
    return tool.DefaultResult{Success: true, Info:entity}
}

func QueryStreetModel(sys tool.ISystem) interface{} {
	dao := GetApp().GetStreetModelDAO()
	return tool.Success(dao.GetAll(sys))
}
