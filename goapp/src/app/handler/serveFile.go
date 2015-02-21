package handler

import (
  "lib/tool"
  "fmt"
  "path/filepath"
)

func ServeFile(sys tool.ISystem) interface{}{
  r := sys.GetRequest()
  tool.Verify( tool.ParamShouldExist( r, "FilePath") )
  
  filePath := r.Form["FilePath"][0]
  filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
  switch filetype {
  case "png", "jpg", "jpeg":
    file, err := tool.GetFile(filePath)
    defer file.Close()
    if err != nil {
      panic( err.Error() )
    }
    img, err := tool.File2Image(file, filetype)
    if err != nil {
      panic( err.Error() )
    }
    sys.GetResponse().Header().Set("Content-Type", fmt.Sprintf("image/%s; charset=utf8", filetype))
    tool.WritePng(sys.GetResponse(), img)
    return tool.CustomView
    
  case "json":
    file, err := tool.GetFile(filePath)
    defer file.Close()
    if err != nil {
      panic( err.Error() )
    }
    bytes, err := tool.File2Bytes(file)
    if err != nil {
      panic( err.Error() )
    }
    sys.GetResponse().Header().Set("Content-Type", "application/json; charset=utf8")
    fmt.Fprintf(sys.GetResponse(), "%s", bytes)
    return tool.CustomView
  }
  
  return tool.CustomView
}