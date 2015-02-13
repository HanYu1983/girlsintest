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
	}
	testActions := tool.ActionMap{
		"TestShowImage": test.TestShowImage,
		"TestBase64": test.TestBase64,
		"TestRandomModel": test.TestRandomModel,
		"TestSearchRegular": test.TestSearchRegular,
	}
	pageActions := tool.ActionMap{
		"Admin": AdminPage,
		"QueryStreetModelPage": handler.QueryStreetModelPage,
		"EditStreetModelPage": handler.EditStreetModelPage,
	}
    http.HandleFunc("/", DefaultHandler)
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
		
func DefaultHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
