package bdd

import (
  "appengine"
  "lib/tool"
)

func ReadFile(ctx appengine.Context){
  readChannel := tool.GetContent(ctx, "main_test.go")
  switch info := <-readChannel;info.(type) {
  case error:
    panic(info.(error).Error())
  case []byte:
    loaded := info.([]byte)
    ctx.Infof("loaded %s", loaded)
  }
}