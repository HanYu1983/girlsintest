package bdd

import (
  "fmt"
  "testing"
  "appengine/aetest"
  "github.com/franela/goblin"
)

func TestSuit(t *testing.T){
  c, err := aetest.NewContext(nil)
  if err != nil { t.Fatal(err) }
  defer c.Close()
  
  g := goblin.Goblin(t)
  Recover := func (){
    if x:= recover(); x!= nil {
      g.Fail( fmt.Sprintf("%s", x) )
    }
  }
  
  g.Describe("Numbers", func() {
    g.It("handler", func() {
      defer Recover()
      TestHandler(c)
    })
    g.It("read file", func() {
      defer Recover()
      ReadFile(c)
    })
    g.It("promise", func() {
      defer Recover()
      TestPromise(c)
    })
    g.It("done", func(done goblin.Done){
      done()
    })
  })
}