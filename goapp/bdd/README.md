# GAE 測試套件入口
＊main_test  加上`_test`GAE才找到要測試原始碼
```
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
}
```