package hello

import (
	"net/http"
	"lib/tool"
	"app/test"
	"app/handler"
  "lib/rest"
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
	
	restpath := "./package"
	handlers := map[string]func(http.ResponseWriter,*http.Request){
		"png": rest.HandleImageForPath(restpath),
		"jpg": rest.HandleImageForPath(restpath),
		"jpeg": rest.HandleImageForPath(restpath),
		"json": rest.HandleJsonForPath(restpath),
		"cmd": rest.HandleCmdForPath(restpath),
	}
	
  http.HandleFunc("/", rest.RestWithConfig(restpath, handlers) )
	
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