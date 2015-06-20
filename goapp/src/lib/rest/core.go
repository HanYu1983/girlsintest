package rest

import (
  "net/http"
  "fmt"
  "strings"
  "path/filepath"
  "os"
  "io/ioutil"
  "lib/tool"
  "lib/assert"
  "github.com/nfnt/resize"
  "encoding/json"
  "appengine"
  "image"
  "image/draw"
)


func RestWithConfig(path string, cacheVersion string,handlers map[string]func(string, *os.File, http.ResponseWriter,*http.Request) ) func(http.ResponseWriter,*http.Request){
  return func(w http.ResponseWriter,r *http.Request){
    defer func(){
      if x:= recover(); x!= nil {
        fmt.Fprintf(w, fmt.Sprintf("%s", x) )
      }
    }()
  
    filePath := path+r.URL.Path
  
    file, err := tool.GetFile(filePath)
    assert.IfError(err)
    defer file.Close()
  
    info, err := file.Stat()
    assert.IfError(err)
    
    // 應該要用檔案的最後修改時間來做快取的判斷
    // 但很可惜，appengine上的檔案資訊是有被鎖住的，最後修改時間總是回傳1970/1/1（所有資訊都是0的意思）
    // 所以只好每次上傳更新時都使用自訂的cacheVersion
    if cacheVersion != "" {
      isMatch := tool.UseETag( fmt.Sprintf("%s:%s", path+r.URL.Path, cacheVersion) )
      if isMatch( w, r ) {
        return
      }
    }
    
    isDir := info.IsDir()
    if isDir {
      r.ParseForm()
      
      // 批次處理
      hasSubPath := len(r.Form["Path"]) > 0
      if hasSubPath {
        subPath := r.Form["Path"][0]
        
        filetype := filepath.Ext( subPath )[1:]  //delete first "."
        handler, exist := handlers[filetype]
        
        if( filetype == "json" ){
          w.Header().Set("Content-Type", "application/json; charset=utf8")
          fmt.Fprint(w, "{")
        }
        if exist {
          hasName := len( r.Form["Name"] ) > 0
          if hasName {
            // 處理指定名稱
            for idx, name := range r.Form["Name"] {
              targetPath := filePath + name + "/" + subPath
              
              file, err := tool.GetFile(targetPath)
              assert.IfError(err)
              defer file.Close()
              
              if( idx > 0 && filetype == "json" ){
                fmt.Fprint(w, ",")
              }
              
              fmt.Fprintf(w, "\"%s\":", name)
              handler( targetPath, file, w, r )
            }
            
          } else {
            // 處理全部
            infos, err := ioutil.ReadDir(filePath)
            assert.IfError(err)
            
            started := false
            for _, info := range infos {
              // 防止.DS_Store / _DS_Store. 也要一并修改下面的isHiddenFile
              isHiddenFile := strings.HasPrefix(info.Name(), ".") || strings.HasPrefix(info.Name(), "_")
              if isHiddenFile == false {
                name := info.Name()
                targetPath := filePath + name + "/" + subPath
                
                file, err := tool.GetFile(targetPath)
                assert.IfError(err)
                defer file.Close()
                
                // 忽略第一個豆號。注意，無法使用range的idx來判斷，因為有hidden的檔案
                if( filetype == "json" && started == true){
                  fmt.Fprint(w, ",")
                }
                
                fmt.Fprintf(w, "\"%s\":", name)
                handler( targetPath, file, w, r )
                
                started = true
              }
            }
            
          }
        }
        if( filetype == "json" ){
          fmt.Fprint(w, "}")
        }
        
      } else {
        infos, err := ioutil.ReadDir(filePath)
        assert.IfError(err)
    
        var paths []string
        for _, info := range infos {
          // 防止.DS_Store / _DS_Store. 也要一并修改上面的isHiddenFile
          isHiddenFile := strings.HasPrefix(info.Name(), ".") || strings.HasPrefix(info.Name(), "_")
          if isHiddenFile == false {
            paths = append( paths, info.Name() )
          }
        }
        jsonstr, _ := json.Marshal( paths )
        w.Header().Set("Content-Type", "application/json; charset=utf8")
        fmt.Fprintf(w, "%s", jsonstr)
      }
      
    } else {
      filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
      handler, exist := handlers[filetype]
      if exist {
        handler( path, file, w, r )
      }
      
    }
    
  }
}

func HandleCmd(ctxFactory func(r *http.Request)appengine.Context, handlers map[string]func(sys tool.ISystem)interface{}) func(string,*os.File, http.ResponseWriter,*http.Request){
  return func(path string, file *os.File, w http.ResponseWriter,r *http.Request){

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

func HandleJson() func(string, *os.File, http.ResponseWriter,*http.Request){
  return func(path string, file *os.File, w http.ResponseWriter,r *http.Request){

    bytes, err := tool.File2Bytes(file)
    assert.IfError(err)
  
    w.Header().Set("Content-Type", "application/json; charset=utf8")
    fmt.Fprintf(w, "%s", bytes)
  }
}


func HandleImage() func(string, *os.File, http.ResponseWriter,*http.Request){
  return func(path string, file *os.File, w http.ResponseWriter,r *http.Request){
    
    filePath := path+r.URL.Path
    filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
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
      img = resize.Thumbnail(uint(ow), uint(oh), img, resize.NearestNeighbor)
      nw, nh := img.Bounds().Max.X, img.Bounds().Max.Y
      sx, sy := (ow-nw)>>1, (oh-nh)>>1
      
      newimg := image.NewRGBA(image.Rect(0, 0, ow, oh))
      draw.Draw(newimg, image.Rect(sx, sy, sx+nw, sy+nh), img, image.Point{0,0}, draw.Src)
      
      img = newimg
    }
  
    w.Header().Set("Content-Type", fmt.Sprintf("image/%s; charset=utf8", filetype))
  
    if filetype == "jpg" || filetype == "jpeg" {
      tool.WriteJpg(w, img)
    }else{
      tool.WritePng(w, img)
    }
  }
}