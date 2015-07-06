package hello

import (
  "net/http"
  "lib/tool"
  "lib/rest"
  "os"
  "fmt"
  _ "appengine"
  _ "strings"
  auth "lib/auth"
)


func Secret(user, realm string) string {
  // use js console > CryptoJS.MD5("hanvic:sdyle.net:gaNGangAnfInAlstEve").toString()
  if user == "john" {
    // md5("john:sdyle.net:hello")
    return "d7369489e93473a54cff9f7df4de5227"
    
  } else if user == "hanvic" {
    // md5("hanvic:sdyle.net:gaNGangAnfInAlstEve")
    return "0c9c73c7af08ea47a7c65c5ed310e4da"
  }
	return ""
}

func handle2(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<html><body><h1>Hello!</h1></body></html>")
}

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
  
  AuthWrap := auth.Factory( auth.Config{
    Realm: "sdyle.net",
    Opaque: auth.RandomKey(),
    Secrets: Secret,
    WhiteList: []string{""},
  })
  
  restFn := rest.RestWithConfig("./package", cacheVersion, handlers)
  restFn = AuthWrap( restFn )
  http.HandleFunc("/",  restFn)
  
  http.HandleFunc("/auth3", AuthWrap( handle2 ))
  http.HandleFunc("/whereami", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "addr:[%s]", r.RemoteAddr)
  })
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