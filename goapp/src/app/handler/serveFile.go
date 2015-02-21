package handler

import (
  "lib/tool"
  "fmt"
)

func ServeFile(sys tool.ISystem) interface{}{
  r := sys.GetRequest()
  tool.Verify( tool.ParamShouldExist( r, "FilePath") )
  tool.Verify( tool.ParamShouldExist( r, "FileType") )
  
  filepath := r.Form["FilePath"][0]
  filetype := r.Form["FileType"][0]
  
  // this process not complete yet!
  switch filetype {
  case "png", "jpg", "jpeg":
    file, err := tool.GetFile(filepath)
    defer file.Close()
    if err != nil {
      panic( err.Error() )
    }
    img, err := tool.File2Image(file, filetype)
    if err != nil {
      panic( err.Error() )
    }
    sys.GetResponse().Header().Set("Content-Type", fmt.Sprintf("image/%s", filetype))
    tool.WritePng(sys.GetResponse(), img)
    return tool.CustomView
    
  case "json":
    readChannel := tool.GetContent(sys.GetContext(), filepath)
    switch info := <-readChannel;info.(type) {
    case error:
      panic(info.(error).Error())
      
    case []byte:
      loaded := info.([]byte)
      sys.GetResponse().Header().Set("Content-Type", "application/json")
      fmt.Fprintf(sys.GetResponse(), "%s", loaded)
    }
  }
  
  return tool.CustomView
}