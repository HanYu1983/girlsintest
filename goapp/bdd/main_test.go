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
      t.Fatal("TestError:", x)
    }
  }()
  defer c.Close()
  // Add your test function here, use Panic() to notify test error!
  TestHandler(c)
  ReadFile(c)
}

func gen(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}