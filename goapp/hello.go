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
    http.HandleFunc("/", handler)
    http.HandleFunc("/Func", tool.FrontControllerWith(actions))
	http.HandleFunc("/Test", tool.FrontControllerWith(testActions))
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
