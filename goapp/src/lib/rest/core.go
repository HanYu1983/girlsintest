package rest

import (
  "net/http"
  "fmt"
  "strings"
  "path/filepath"
  "io/ioutil"
  "lib/tool"
  "lib/assert"
  "github.com/nfnt/resize"
  "encoding/json"
  "appengine"
)


func RestWithConfig(path string, handlers map[string]func(http.ResponseWriter,*http.Request) ) func(http.ResponseWriter,*http.Request){
  return func(w http.ResponseWriter,r *http.Request){
    defer func(){
      if x:= recover(); x!= nil {
        fmt.Fprintf(w, fmt.Sprintf("%s", x) )
      }
    }()
  
    filePath := path+r.URL.Path
  
    file, err := tool.GetFile(filePath)
    assert.IfError(err)
  
    info, err := file.Stat()
    assert.IfError(err)
  
    isDir := info.IsDir()
    if isDir {
      infos, err := ioutil.ReadDir(filePath)
      assert.IfError(err)
    
      var paths []string
      for _, info := range infos {
        isHiddenFile := strings.HasPrefix(info.Name(), ".")
        if isHiddenFile == false {
          paths = append( paths, info.Name() )
        }
      }
    
      fmt.Fprintf(w, "%s", strings.Join(paths, ","))
    } else {
      filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
      handler, exist := handlers[filetype]
      if exist {
        handler( w, r )
      }
      
    }
    
  }
}

func HandleCmdForPath(path string, ctxFactory func(r *http.Request)appengine.Context, handlers map[string]func(sys tool.ISystem)interface{}) func(http.ResponseWriter,*http.Request){
  return func(w http.ResponseWriter,r *http.Request){
    filePath := path+r.URL.Path
    file, err := tool.GetFile(filePath)
    defer file.Close()
    assert.IfError(err)
  
    bytes, err := tool.File2Bytes(file)
    assert.IfError(err)
    
    result := struct {
      Success bool
      Info interface{}
    } {
      false,
      nil,
    }
    
    var cmd struct {
      Cmd string
      Description string
      Params []string
      Option []string
    }
  
    err = json.Unmarshal(bytes, &cmd)
    assert.IfError(err)
    
    defer func(){
      if x:= recover(); x!= nil {
        result.Info = x
        jsonstr, _ := json.Marshal( result )
        w.Header().Set("Content-Type", "application/json; charset=utf8")
        fmt.Fprintf(w, "%s", jsonstr)
      }
    } ()
  
    for _, p := range cmd.Params {
      if len(r.Form[p]) == 0 {
        panic("no enough param "+p)
      }
    }
    
    fn, exist := handlers[cmd.Cmd]
    if exist {
      var sys tool.ISystem
      sys = tool.AppEngineSystem{Request: r, Response: w, Context: ctxFactory(r)}
      cmdresult := fn( sys )
      if cmdresult != nil {
        result.Success = true
        result.Info = cmdresult
        jsonstr, _ := json.Marshal( result )
        w.Header().Set("Content-Type", "application/json; charset=utf8")
        fmt.Fprintf(w, "%s", jsonstr)
      } else {  
        
      }
      
    } else {
      panic(fmt.Sprintf("cmd not exist [%s]", cmd.Cmd))
    }
  }
}

func HandleJsonForPath(path string) func(http.ResponseWriter,*http.Request){
  return func(w http.ResponseWriter,r *http.Request){
    filePath := "./package"+r.URL.Path
    file, err := tool.GetFile(filePath)
    defer file.Close()
    assert.IfError(err)
  
    bytes, err := tool.File2Bytes(file)
    assert.IfError(err)
  
    w.Header().Set("Content-Type", "application/json; charset=utf8")
    fmt.Fprintf(w, "%s", bytes)
  }
}


func HandleImageForPath(path string) func(http.ResponseWriter,*http.Request){
  return func(w http.ResponseWriter,r *http.Request){
    filePath := "./package"+r.URL.Path
    filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
    file, err := tool.GetFile(filePath)
    defer file.Close()
    assert.IfError(err)
  
    img, err := tool.File2Image(file, filetype)
    assert.IfError(err)
  
    r.ParseForm()
  
    ow, oh := img.Bounds().Max.X - img.Bounds().Min.X, img.Bounds().Max.Y - img.Bounds().Min.Y
    hasWidth := len(r.Form["Width"]) > 0
    if hasWidth {
      ow = int(tool.Str2Int64(r.Form["Width"][0]))
    }
    hasHeight := len(r.Form["Height"]) > 0
    if hasHeight {
      oh = int(tool.Str2Int64(r.Form["Height"][0]))
    }
    if hasWidth || hasHeight {
      img = resize.Resize(uint(ow), uint(oh), img, resize.Lanczos3)
    }
  
    w.Header().Set("Content-Type", fmt.Sprintf("image/%s; charset=utf8", filetype))
  
    if filetype == "jpg" || filetype == "jpeg" {
      tool.WriteJpg(w, img)
    }else{
      tool.WritePng(w, img)
    }
  }
}