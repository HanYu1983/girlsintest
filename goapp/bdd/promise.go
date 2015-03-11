package bdd

import (
  "lib/tool"
  "appengine"
  "os"
  "lib/con"
)

func TestPromise(c appengine.Context) {
  getfile := func(path string)func()interface{}{
    return func()interface{}{
      file, err := tool.GetFile( path )
      if err != nil { 
        panic( err )
      }
      return file
    }
  }
  
  files := []chan con.Either {
    con.Promise( getfile("README.md") ),
    con.Promise( getfile("handler.go") ),
    con.Promise( getfile("promise.go") ),
  }
  
  for either := range con.When( files ) {
    if either.Err != nil {
      panic( either.Err.Error() )
    } else {
      content, err := tool.File2Bytes( either.Result.(*os.File) )
      if err != nil {
        panic( err.Error() )
      } else {
        c.Infof( "file: %s", content )
      }
    }
  }
  
}