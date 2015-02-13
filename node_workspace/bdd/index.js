var assert = require("assert")
var http = require("http")
var helper = require("./helper")

var option = {
  host: 'localhost',
  port: 8080,
  path: '/goapp/Func'
}

describe('基本網路環境', function(){
  it('連結後台', function(done){
    helper.getJSON(option, 'POST', {cmd: 'QueryStreetModel'}, function(err, res){
      assert.ifError(err);
      assert(res.Success)
      done()
    })
  })
})


describe('街模', function(){
  var modelId = 0
  
  it('刪除不存在的街模必須回傳false', function(done){
    helper.getJSON(option, 'POST', {cmd: 'DeleteStreetModel', Key: 'gangan'}, function(err, res){
      assert(res.Success == false)
      done()
    })
  })
  
  it('新增', function(done){
    helper.getJSON(option, 'POST', {cmd: 'UpdateStreetModel'}, function(err, res){
      assert(res.Success)
      modelId = res.Info
      done()
    })
  })
  
  it('將新增街模設為可見', function(done){
    helper.getJSON(option, 'POST', {cmd: 'UpdateStreetModel', Key: modelId, Available: 0}, function(err, res){
      assert(res.Success)
      done()
    })
  })
  
  it('新增後必須查到', function(done){
    helper.getJSON(option, 'POST', {cmd: 'QueryStreetModel', Key: modelId}, function(err, res){
      assert(res.Success)
      assert(modelId == res.Info.Key)
      done()
    })
  })
  
  it('刪除', function(done){
    helper.getJSON(option, 'POST', {cmd: 'DeleteStreetModel', Key: modelId}, function(err, res){
      assert(res.Success)
      done()
    })
  })
  
  it('刪除之後必須無法查到', function(done){
    helper.getJSON(option, 'POST', {cmd: 'QueryStreetModel', Key: modelId}, function(err, res){
      assert(res.Success == false)
      assert(res.Info == 'datastore: no such entity')
      done()
    })
  })
})