package bdd

import (
  "testing"
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

func TestMyFunction(t *testing.T) {
  c, err := aetest.NewContext(nil)
  if err != nil {
    t.Fatal(err)
  }
  var QueryFn func(http.ResponseWriter,*http.Request) = tool.FrontControllerWith(
    actions, 
    func(r *http.Request)appengine.Context{
      return c
    },
  )
  defer c.Close()
  
  r, _ := http.NewRequest("get", "/goapp/Func?cmd=xxxx", nil)
  w := httptest.NewRecorder()
      
  QueryFn(w, r)
  
  body, _ := ioutil.ReadAll(w.Body)
  t.Fatalf("result:%s", body)
  
  if w.Code != http.StatusOK {
    t.Fatalf("Non-expected status code%v:\n\tbody: %v", "200", w.Code)
  }
}