package hello

import (
    "fmt"
    "net/http"
	"lib/tool"
	"app"
)

func init() {
    FrontControl := func(w http.ResponseWriter, r *http.Request){
        tool.FrontControl(w, r,
            tool.ActionMap{
                "RegisterUser":app.RegisterUser,
                "QueryUser":app.QueryUser,
                "Login":app.Login,
                "Logout":app.Logout,
            },
        )
    }
    
    http.HandleFunc("/", handler)
    http.HandleFunc("/test", FrontControl)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
