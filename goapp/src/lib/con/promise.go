package con

import (
  "errors"
  "fmt"
)

type Either struct {
  Err error
  Result interface{}
}

func IdentifyError( err interface{} ) error{
  switch err.(type) {
  case string:
    return errors.New( err.(string) )
  case error:
    return err.(error)
  default:
    return errors.New( fmt.Sprintf("%s", err) )
  }
}

func RecoverErrorToChan(c chan Either ) func () {
  return func (){
    if err:= recover(); err != nil {
      c <- Either{ Err: IdentifyError(err), Result: nil }
      close(c)
    }
  }
}

func Promise( fn func()interface{} ) chan Either {
  ret := make(chan Either)
  todo := func(){
    defer RecoverErrorToChan( ret )()
    ret <- Either{ Err: nil, Result: fn() }
    close( ret )
  }
  go todo()
  return ret
}

func When( chans [](chan Either) ) chan Either{
  ret := make(chan Either)
  todo := func(){
    defer RecoverErrorToChan( ret )()
    for _, c := range chans {
      ret <- <-c
    }
    close( ret )
  }
  go todo()
  return ret
}