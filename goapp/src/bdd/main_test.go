package bdd

import (
  "testing"
  "appengine/aetest"
)

func TestSuit(t *testing.T){
  c, err := aetest.NewContext(nil)
  if err != nil { t.Fatal(err) }
  defer func(){
    if x:= recover(); x!= nil {
      t.Fatal("TestError:%s", x)
    }
  }()
  defer c.Close()
  // Add your test function here, use Panic() to notify test error!
  TestHandler(c)
}