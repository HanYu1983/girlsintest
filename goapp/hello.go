package hello

import (
    "fmt"
    "net/http"
	"lib/tool"
	"app"
	"app/test"
)

func init() {
	actions := tool.ActionMap{
		"RegisterUser":app.RegisterUser,
		"QueryUser":app.QueryUser,
		"Login":app.Login,
		"Logout":app.Logout,
		
		"UpdateStreetModel": app.UpdateStreetModel,
		"QueryStreetModel": app.QueryStreetModel,
		"AddPhotoToStreetModel": app.AddPhotoToStreetModel,
		"QueryPhotoWithStreetModel": app.QueryPhotoWithStreetModel,
		"DeletePhotoWithStreetModel": app.DeletePhotoWithStreetModel,
	}
	testActions := tool.ActionMap{
		"TestShowImage": test.TestShowImage,
		"TestBase64": test.TestBase64,
	}
	pageActions := tool.ActionMap{
		"Admin": AdminPage,
		"QueryStreetModelPage": app.QueryStreetModelPage,
		"EditStreetModelPage": app.EditStreetModelPage,
	}
    http.HandleFunc("/", handler)
    http.HandleFunc("/goapp/Func", tool.FrontControllerWith(actions))
	http.HandleFunc("/goapp/Page", tool.FrontControllerWith(pageActions))
	http.HandleFunc("/goapp/Test", tool.FrontControllerWith(testActions))
}
func AdminPage(sys tool.ISystem)interface{}{
	w := sys.GetResponse()
	w.Header().Set("Content-Type", "text/html")
    tool.TemplateWithFile("EditStreetModel", "app/tmpl/Admin.html").Execute(w, nil)
	return tool.CustomView
}
		
func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
