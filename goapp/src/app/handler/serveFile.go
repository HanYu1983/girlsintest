package handler

import (
  "lib/tool"
  "lib/assert"
  "fmt"
  "path/filepath"
  "io/ioutil"
)

func ServeFile(sys tool.ISystem) interface{}{
  r := sys.GetRequest()
  w := sys.GetResponse()
  tool.Verify( tool.ParamShouldExist( r, "FilePath") )
  
  filePath := r.Form["FilePath"][0]
  
  /*
  IsMatchCache := tool.UseETag( fmt.Sprintf("ServeFile2:%s", filePath) )
  if IsMatchCache( w, r ) {
    return tool.CustomView
  }
  */
  
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
      paths = append( paths, info.Name() )
    }
    return tool.Success(paths)
  }
  
  filetype := filepath.Ext( filePath )[1:]  //delete first "."
  
  switch filetype {
  case "png", "jpg", "jpeg":
    file, err := tool.GetFile(filePath)
    defer file.Close()
    assert.IfError(err)
    
    img, err := tool.File2Image(file, filetype)
    assert.IfError(err)
    
    w.Header().Set("Content-Type", fmt.Sprintf("image/%s; charset=utf8", filetype))
    tool.WritePng(w, img)
    return tool.CustomView
    
  case "json":
    file, err := tool.GetFile(filePath)
    defer file.Close()
    assert.IfError(err)
    
    bytes, err := tool.File2Bytes(file)
    assert.IfError(err)
    
    w.Header().Set("Content-Type", "application/json; charset=utf8")
    fmt.Fprintf(w, "%s", bytes)
    return tool.CustomView
  }
  
  return tool.CustomView
}