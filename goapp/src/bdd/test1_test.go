package bdd

import (
  "testing"
  "appengine/aetest"
  "net/http"
  "net/http/httptest"
  "app/handler"
  "lib/tool"
  "encoding/json"
)

func TestMyFunction(t *testing.T) {
  c, err := aetest.NewContext(nil)
  if err != nil {
    t.Fatal(err)
  }
  defer c.Close()
  
  defer func(){
    if x:= recover(); x != nil{
      switch x.(type){
        case string:
          errmsg, _ := json.Marshal(tool.DefaultResult{Info:x.(string)})
          t.Fatalf("%s", errmsg)
          break
      default:
          t.Fatalf("{'Success':false, Info:'%s'}", x)
			break
		}
      }
  }()
  
  r, _ := http.NewRequest("get", "/goapp/Func?cmd=xxxx", nil)
  w := httptest.NewRecorder()
  sys := tool.AppEngineSystem{Request: r, Response: w, Context: c}
  handler.QueryStreetModel(sys)
  
  if w.Code != http.StatusOK {
    t.Fatalf("Non-expected status code%v:\n\tbody: %v", "200", w.Code)
  }
}