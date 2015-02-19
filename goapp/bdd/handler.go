package bdd

import (
  "appengine"
  "appengine/aetest"
  "net/http"
  "net/http/httptest"
  "app/handler"
  "lib/tool"
  _ "encoding/json"
  "io/ioutil"
)

var actions tool.ActionMap = tool.ActionMap{
  "RegisterUser":handler.RegisterUser,
  "QueryUser":handler.QueryUser,
  "Login":handler.Login,
  "Logout":handler.Logout,

  "UpdateStreetModel": handler.UpdateStreetModel,
  "QueryStreetModel": handler.QueryStreetModel,
  "DeleteStreetModel": handler.DeleteStreetModel,
  "AddPhotoToStreetModel": handler.AddPhotoToStreetModel,
  "QueryPhotoWithStreetModel": handler.QueryPhotoWithStreetModel,
  "DeletePhotoWithStreetModel": handler.DeletePhotoWithStreetModel,
  "UpdatePhotoWithStreetModel": handler.UpdatePhotoWithStreetModel,
}

func TestHandler(c aetest.Context) {
  var QueryFn func(http.ResponseWriter,*http.Request) = tool.FrontControllerWith(
    actions, 
    func(r *http.Request)appengine.Context{
      return c
    },
  )
    
  r, _ := http.NewRequest("get", "/goapp/Func?cmd=QueryStreetModel", nil)
  w := httptest.NewRecorder()
      
  QueryFn(w, r)
  
  body, err := ioutil.ReadAll(w.Body)
  if err != nil {
    panic(err.Error())
  }
  
  c.Infof("result:%s", body)
  
  if w.Code != http.StatusOK {
    panic("Non-expected status code%v:\n\tbody")
  }
}