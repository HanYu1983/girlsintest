package hello

import (
    "fmt"
    "net/http"
	"lib/tool"
	"app/test"
	"app/handler"
)

func init() {
	actions := tool.ActionMap{
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
    
    "ServeFile": handler.ServeFile,
    "RefreshCache": handler.RefreshCache,
	}
	testActions := tool.ActionMap{
		"TestShowImage": test.TestShowImage,
		"TestBase64": test.TestBase64,
		"TestRandomModel": test.TestRandomModel,
		"TestSearchRegular": test.TestSearchRegular,
    "TestReadFile": test.TestReadFile,
    "TestPackageImage": test.TestPackageImage,
	}
	pageActions := tool.ActionMap{
		"Admin": AdminPage,
		"QueryStreetModelPage": handler.QueryStreetModelPage,
		"EditStreetModelPage": handler.EditStreetModelPage,
	}
  
  
  http.HandleFunc("/goapp/redirect", DefaultHandler)
  http.HandleFunc("/goapp/cache", DefaultHandler2)
  http.HandleFunc("/goapp/Func", tool.FrontControllerWith(actions, tool.AppEngineContextFactory))
	http.HandleFunc("/goapp/Page", tool.FrontControllerWith(pageActions, tool.AppEngineContextFactory))
	http.HandleFunc("/goapp/Test", tool.FrontControllerWith(testActions, tool.AppEngineContextFactory))
}
func AdminPage(sys tool.ISystem)interface{}{
	w := sys.GetResponse()
	w.Header().Set("Content-Type", "text/html")
    tool.TemplateWithFile("EditStreetModel", "app/tmpl/Admin.html").Execute(w, nil)
	return tool.CustomView
}
		
func DefaultHandler(w http.ResponseWriter, r *http.Request) {
  http.Redirect(w, r, "/goapp/cache", http.StatusSeeOther)
}

func DefaultHandler2(w http.ResponseWriter, r *http.Request) {
  etag := "xxade"
  noneMatch := r.Header.Get("If-None-Match")
  
  if noneMatch == etag {
    w.WriteHeader(http.StatusNotModified)
  }
  // browser看到ETag的話，在下一次呼叫同一個網址時，會在request中的header中If-None-Match代入這個欄位的值，所以可以用這個欄位來決定browser要不要從快取中抓取資料
  w.Header().Set("ETag", etag)
  fmt.Fprint(w, "Hello, world2!")
}
