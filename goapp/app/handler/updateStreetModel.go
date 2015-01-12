package handler

import (
    "strconv"
	"lib/tool"
	"time"
	"app"
)


func UpdateStreetModel(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
	
    entity := app.StreetModelEntity{Date: time.Now()}
	
	if len(r.Form["Caption"]) > 0 {
		entity.Caption = r.Form["Caption"][0]
	}
	if len(r.Form["ModelKey"]) > 0 {
		entity.ModelKey = r.Form["ModelKey"][0]
	}
	if len(r.Form["Description"]) > 0 {
		entity.Description = r.Form["Description"][0]
	}
	if len(r.Form["Tag"]) > 0 {
		entity.Tag = r.Form["Tag"][0]
	}
	if len(r.Form["Talk"]) > 0 {
		entity.Talk = r.Form["Talk"][0]
	}
	if len(r.Form["Comment"]) > 0 {
		entity.Comment = r.Form["Comment"][0]
	}
	if len(r.Form["Available"]) > 0 {
		entity.Available = true
	}else{
		entity.Available = false
	}
	if len(r.Form["ModelType"]) > 0 {
		entity.ModelType = r.Form["ModelType"][0]
	}
	
	dao := app.GetApp().GetStreetModelDAO()
	isUpdate := len(r.Form["Key"]) > 0
	
	var ret interface{}
	
	if isUpdate {
		key, _ := strconv.ParseInt( r.Form["Key"][0], 10, 0 )
		dao.Update(sys, dao.GetKey(sys, key, nil), entity)
		ret = entity
	}else{
		key := dao.Create(sys, dao.NewKey(sys, nil), entity)
		ret = key.IntID()
	}
	
	isRedirect := len(r.Form["redirect"]) > 0
	if isRedirect {
		return tool.Redirect(r.Form["redirect"][0])
	}else{
		return tool.Success(ret)
	}
}