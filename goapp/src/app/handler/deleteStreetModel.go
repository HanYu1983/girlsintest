package handler

import (
  "strconv"
  "lib/tool"
  "app"
)

func DeleteStreetModel(sys tool.ISystem) interface{} {
  r := sys.GetRequest()
  tool.Verify( tool.ParamShouldExist( r, "Key") )
  key, err := strconv.ParseInt( r.Form["Key"][0], 10, 0 )
  if err != nil {
    panic(err.Error())
  }
  dao := app.GetApp().GetStreetModelDAO()
  dao.Read(sys, dao.GetKey(sys, key, nil))
  dao.Delete( sys, dao.GetKey(sys, key, nil) )
  return tool.Success("")
}