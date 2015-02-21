package bdd

import (
  "appengine"
  "lib/tool"
)

func ReadFile(ctx appengine.Context){
  filePath := "main_test.go"
  file, err := tool.GetFile(filePath)
  defer file.Close()
  if err != nil {
    panic( err.Error() )
  }
}