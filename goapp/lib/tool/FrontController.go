package tool

import (
    "fmt"
    "net/http"
    "reflect"
    "encoding/json"
    _ "strconv"
)

type ActionMap map[string]interface{}

type DefaultResult struct {
    Success bool
	Code int
    Info interface{}
}

func Success(info interface{}) DefaultResult {
    return DefaultResult{Success:true, Info: info, Code: 0}
}

func NotSuccess(info interface{}) DefaultResult {
    return DefaultResult{Info: info, Code: 0}
}

func Redirect(url string) DefaultResult {
    return DefaultResult{Info: url, Code: -1}
}

var CustomView = DefaultResult{Info:"__custom_view__", Code: 0}

func FrontController(
    w http.ResponseWriter,
    r *http.Request,
    action ActionMap){
    defer func(){
        if x:= recover(); x != nil{
			w.Header().Set("Content-Type", "application/json")
			switch x.(type){
				case string:
					errmsg, _ := json.Marshal(DefaultResult{Info:x.(string)})
          w.Header().Set("Content-Type", "application/json; charset=utf8")
					fmt.Fprintf(w, "%s", errmsg)
				break
				default:
          w.Header().Set("Content-Type", "application/json; charset=utf8")
					fmt.Fprintf(w, "{'Success':false, Info:'%s'}", x)
				break
			}
        }
    }()
  
	var sys ISystem
	sys = AppEngineSystem{Request: r, Response: w}
    r.ParseForm()
    cmd := GetCommand(r, "nocmd")
    result := Call(action, cmd, sys)[0]
    formatResult := result.Interface().(DefaultResult)
    if formatResult == CustomView {
        // nothing todo
	}else if formatResult.Code == -1 {
		url := formatResult.Info.(string)
		http.Redirect(w, r, url, 302)
	}else{
        js, _ := json.Marshal(formatResult)
        w.Header().Set("Content-Type", "application/json; charset=utf8")
        fmt.Fprintf(w, "%s",  js)
    }
}

func GetCommand(r *http.Request, defcmd string)(cmd string){
    cmd = defcmd
    if len(r.Form["cmd"]) > 0 { cmd = r.Form["cmd"][0] }
    return
}

func Call(m ActionMap, name string, params ... interface{}) (result []reflect.Value) {
    PanicWhen(m[name] == nil, "no command "+name)
    f := reflect.ValueOf(m[name])
    in := make([]reflect.Value, len(params))
    for k, param := range params {
        in[k] = reflect.ValueOf(param)
    }
    result = f.Call(in)
    return
}

func FrontControllerWith(action ActionMap) func(w http.ResponseWriter, r *http.Request){
	return func(w http.ResponseWriter, r *http.Request){
		FrontController(w, r, action)
	}
}

func PanicWhen(cond bool, msg string){
    if cond { panic(msg) }
}