package handler

import (
  "lib/tool"
  "archive/zip"
  "os"
  "lib/assert"
  "fmt"
)
// gae不支援寫檔
func ZipModel (sys tool.ISystem) {
  key := ""
  outputFileName := fmt.Sprintf("model-%s.zip", key)
  outputFile, err := os.Create(outputFileName)
  assert.IfError(err)
  defer outputFile.Close()
  
  w := zip.NewWriter(outputFile)
  defer w.Close()
  
  var files = []struct{
    Name, Body string
  }{
    {"readme.txt", "readme content"},
    {"todo.txt", "todo content"},
  }
  
  for _, file := range files {
    f, err := w.Create(file.Name)
    assert.IfError(err)
    
    _, err = f.Write([]byte(file.Body))
    assert.IfError(err)
  }
  
  err = w.Close()
  assert.IfError(err)
}