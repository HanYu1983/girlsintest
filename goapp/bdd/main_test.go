package bdd

import (
  "fmt"
  "testing"
  "appengine"
  "appengine/aetest"
  "github.com/franela/goblin"
)

func TestSuit(t *testing.T){
  c, err := aetest.NewContext(nil)
  if err != nil { t.Fatal(err) }
  defer c.Close()
  
  g := goblin.Goblin(t)
  
  Describe := func( msg string, fn func() ){
    g.Describe( msg, fn )
  }
  
  It := func( msg string, fn func()){
    g.It( msg, func(){
      if x:= recover(); x!= nil {
        g.Fail( fmt.Sprintf("%s", x) )
      }
      fn()
    })
  }
  
  Restful( Describe, It, c )
}


func Restful( Describe func(string, func()), It func(string, func()), c appengine.Context ){
  
  Describe("Test Restful url", func(){
    
    It("hahah", func(){
      
      
      
      
    })
    
  })
  
}