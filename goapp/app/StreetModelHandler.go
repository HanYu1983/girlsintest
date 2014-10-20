package app

import (
    "strconv"
	"lib/tool"
	"time"
)

func UpdateStreetModel(sys tool.ISystem) interface{} {
	r := sys.GetRequest()
	
    entity := StreetModelEntity{Date: time.Now()}
	
	if len(r.Form["Caption"]) > 0 {
		entity.Caption = r.Form["Caption"][0]
	}
	if len(r.Form["ModelKey"]) > 0 {
		entity.ModelKey = r.Form["ModelKey"][0]
	}
	if len(r.Form["Description"]) > 0 {
		entity.Description = r.Form["Description"][0]
	}
	
	dao := GetApp().GetStreetModelDAO()
	isUpdate := len(r.Form["key"]) > 0
	
	if isUpdate {
		key, _ := strconv.ParseInt( r.Form["key"][0], 10, 0 )
		dao.Update(sys, dao.GetKey(sys, key, nil), entity)
		return tool.Success(entity)
	}else{
		key := dao.Create(sys, dao.NewKey(sys, nil), entity)
		return tool.Success(key)
	}
}

func QueryStreetModel(sys tool.ISystem) interface{} {
	dao := GetApp().GetStreetModelDAO()
	return tool.Success(dao.GetAll(sys))
}

func AddPhotoToStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	tool.VerifyParam(r, "StreetModelKey", tool.ParamNotNil())
	tool.VerifyParam(r, "Base64", tool.ParamNotNil())
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	
	streetModelDAO := GetApp().GetStreetModelDAO()
	photoDAO := GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	
	for _, base64str := range r.Form["Base64"] {
		entity := PhotoEntity{Where:"StreetModel", Date: time.Now(), Base64:base64str}
		key := photoDAO.NewKey(sys, parentKey)
		photoDAO.Create(sys, key, entity)
	}
	return parentKey
}
