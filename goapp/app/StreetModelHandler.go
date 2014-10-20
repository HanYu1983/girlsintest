package app

import (
    "strconv"
	"lib/tool"
	"time"
	"appengine/datastore"
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
	return tool.Success(dao.ReadAll(sys, dao.NewQuery(sys)))
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
		entity := PhotoEntity{Date: time.Now(), Base64:base64str}
		key := photoDAO.NewKey(sys, parentKey)
		photoDAO.Create(sys, key, entity)
	}
	return tool.Success(parentKey.IntID())
}

func QueryPhotoWithStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	tool.VerifyParam(r, "StreetModelKey", tool.ParamNotNil())
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	
	streetModelDAO := GetApp().GetStreetModelDAO()
	photoDAO := GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	
	isQuerySingle := len( r.Form["Key"] ) > 0
	if isQuerySingle {
		keys := []*datastore.Key{}
		for _, keyStr := range r.Form["Key"] {
			keys = append( keys, photoDAO.GetKey(sys, tool.Str2Int64(keyStr), parentKey) )
		}
		return tool.Success(photoDAO.ReadMulti(sys, keys))
	}else{
		query := photoDAO.NewQuery(sys).Ancestor(parentKey)
		ret := photoDAO.ReadAll(sys, query)
		return tool.Success(ret)
	}
}

func DeletePhotoWithStreetModel(sys tool.ISystem) interface{}{
	r := sys.GetRequest()
	tool.VerifyParam(r, "StreetModelKey", tool.ParamNotNil())
	tool.VerifyParam(r, "PhotoKey", tool.ParamNotNil())
	
	mk := tool.Str2Int64( r.Form["StreetModelKey"][0] )
	pk := tool.Str2Int64( r.Form["PhotoKey"][0] )
	
	streetModelDAO := GetApp().GetStreetModelDAO()
	photoDAO := GetApp().GetPhotoDAO()
	
	parentKey := streetModelDAO.GetKey(sys, mk, nil)
	photoKey := photoDAO.GetKey(sys, pk, parentKey)
	
	photoDAO.Delete(sys, photoKey)
	return tool.Success(nil)
}