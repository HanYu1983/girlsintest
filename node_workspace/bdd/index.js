var assert = require("assert")
var http = require("http")
var helper = require("./helper")
var _ = require("underscore")

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


describe('街模照片', function(){
  
  var modelKey
  
  before(function(done){
    helper.getJSON(option, 'POST', {cmd: 'UpdateStreetModel'}, function(err, res){
      assert(res.Success)
      modelKey = res.Info
      done()
    })
  })

  var photoKey
  var base64 = 'test\rphoto\n\n'
  var normalizedBase64 = 'testphoto'
  
  it('新增照片', function(done){
    helper.getJSON(option, 'POST', {cmd: 'AddPhotoToStreetModel', StreetModelKey: modelKey, Base64:base64}, function(err, res){
      assert(res.Success)
      photoKey = res.Info
      done()
    })
  })
  
  it('查詢照片', function(done){
    helper.getJSON(option, 'POST', {cmd: 'QueryPhotoWithStreetModel', StreetModelKey: modelKey, Key: photoKey}, function(err, res){
      assert(res.Success)
      var photos = _.filter(res.Info, function(photo){
        return photo.Key == photoKey
      })
      assert(photos.length == 1)
      var photo = photos[0]
      assert(photo.Base64Str == normalizedBase64)
      done()
    })
  })
  
  var belong = 100
  
  it('更改照片所屬', function(done){
    helper.getJSON(option, 'POST', {cmd: 'UpdatePhotoWithStreetModel', StreetModelKey: modelKey, PhotoKey: photoKey, Belong: belong}, function(err, res){
      assert(res.Success)
      assert(res.Info.Belong == 100)
      done()
    })
  })
  
  after(function(done){
    helper.getJSON(option, 'POST', {cmd: 'DeleteStreetModel', Key: modelKey}, function(err, res){
      assert(res.Success)
      done()
    })
  })
})