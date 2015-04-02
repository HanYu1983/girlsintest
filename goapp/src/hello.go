package hello

import (
  "net/http"
  "lib/tool"
  "lib/rest"
  "os"
)

func init(){
  // rest style setting
  cmdhandlers := map[string]func(sys tool.ISystem)interface{}{}

  handlers := map[string]func(string, *os.File, http.ResponseWriter,*http.Request){
    "png": rest.HandleImage(),
    "jpg": rest.HandleImage(),
    "jpeg": rest.HandleImage(),
    "json": rest.HandleJson(),
    "cmd": rest.HandleCmd(tool.AppEngineContextFactory, cmdhandlers),
  }
  
  http.HandleFunc("/", rest.RestWithConfig("./package", cacheVersion, handlers) )
}

// ============== legacy code ===============//
/*
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
  
  // rest style setting
  cmdhandlers := map[string]func(sys tool.ISystem)interface{}{
    "RefreshCache": handler.RefreshCache,
  }
	
	handlers := map[string]func(string, *os.File, http.ResponseWriter,*http.Request){
		"png": rest.HandleImage(),
		"jpg": rest.HandleImage(),
		"jpeg": rest.HandleImage(),
		"json": rest.HandleJson(),
		"cmd": rest.HandleCmd(tool.AppEngineContextFactory, cmdhandlers),
	}
	
  http.HandleFunc("/", rest.RestWithConfig("./package", cacheVersion, handlers) )
	
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

*/