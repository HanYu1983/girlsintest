package hello

import (
    "fmt"
    "net/http"
)

func init() {
    RegisterUser := CompositeAction(VerfiyPost, RegisterUser)
    Login := CompositeAction(VerfiyPost, Login)
    
    FrontControl := func(w http.ResponseWriter, r *http.Request){
        FrontControl(w, r,
            ActionMap{
                "RegisterUser":RegisterUser,
                "QueryUser":QueryUser,
                "Login":Login,
                "Logout":Logout,
            },
        )
    }
    
    http.HandleFunc("/", handler)
    http.HandleFunc("/test", FrontControl)
}

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}

func VerfiyPost(w http.ResponseWriter, r *http.Request) {
    VerifyMethod(r, "POST")
}
