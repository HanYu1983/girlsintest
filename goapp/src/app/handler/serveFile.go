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
    sys.GetResponse().Header().Set("Content-Type", fmt.Sprintf("image/%s", filetype))
    tool.WritePng(sys.GetResponse(), img)
    return tool.CustomView
    
  case "json":
    readChannel := tool.GetContent(sys.GetContext(), filePath)
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