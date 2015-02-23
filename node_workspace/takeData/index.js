var helper = require('./helper')
var http = require('http')
var _ = require('underscore')
var async = require('async')
var fs = require('fs')

var option = {
  host: 'test-girlsin3d.appspot.com',
  port: 80,
  path: '/goapp/Func'
}


function mkdir(path){
  return function(callback){
    fs.mkdir(path, function(err){
      callback(err)
    })
  }
}

function query(data, callback){
  helper.getJSON(option, 'POST', data, function(err, res){
    if( err != null ){
      callback(err)
    }else{
      var result = res.Info
      callback(null, result)
    }
  })
}

function queryPhoto(key){
  return function(callback){
    query({cmd: 'QueryPhotoWithStreetModel', StreetModelKey: key}, callback)
  }
}

function queryAllPhotos(models, callback){
  function getKey(model){
    return model.Key
  }
  var keys = _.map( models, getKey )
  var querys = _.map( keys, queryPhoto )
  async.parallel( querys, function(err, photos){
    if( err!= null ){
      callback(err)
    }else{
      callback(null, _.zip(models, photos))
    }
  })
}

function adjustPhotoOrderAndMark(photos){
  function swapBelong(ori, to){
    return function(photo){
      if( photo.Belong == ori ){
        photo.Belong = to
      }
      return photo
    }
  }
  
  photos = _.map( photos, swapBelong(-1, 1))
  photos = _.map( photos, swapBelong(-2, 2))
  photos = _.map( photos, swapBelong(-3, 3))
  photos = _.map( photos, swapBelong(0, 4))
  photos = _.sortBy( photos, 'Belong')
  var total = _.reduce( photos, function(curr, model){
    model.index = curr
    return curr+1
  }, 1)
  return photos
}

function formatModel(model){
  var ret = JSON.parse(JSON.stringify(model)) //copy
  var date = new Date(ret.DateUnix* 1000)
  ret.Date = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/')
  delete ret.DateUnix
  delete ret.Key
  return ret
}

function writeModel(modelPhotoPair){
  return function(callback){
    var model = modelPhotoPair[0]
    var photos = modelPhotoPair[1]
    var path = "model/"+model.Key
    
    photos = adjustPhotoOrderAndMark(photos)
    
    function writeConfig(path){
      return function(callback){
        var formated = formatModel(model)
        fs.writeFile(path, JSON.stringify(formated), 'utf8', function(err) {
          callback(err)
        });
      }
    }
    
    function withPath(path){
      return function writePhoto(photo){
        return function(callback){
          var filename = path+"/image_"+photo.index+".jpg"
          var base64 = photo.Base64Str
          fs.writeFile(filename, base64, 'base64', function(err) {
            callback(err)
          });
        }
      }
    }
    
    function writeAllPhoto(path){
      return function(callback){
        var querys = _.map( photos, withPath(path) )
        async.parallel( querys, callback )
      }
    }
    
    async.series([
      mkdir(path), 
      writeConfig(path+'/config.json'),
      writeAllPhoto(path)
    ], callback)
  }
}

function writeAllModel(modelPhotoPairs, callback){
  var querys = _.map( modelPhotoPairs, writeModel )
  async.parallel( querys, callback )
}

function fetchModelAndPhoto(callback){
  var fn = async.compose(writeAllModel, queryAllPhotos, query)
  fn({cmd: 'QueryStreetModel'}, callback)
}

function fetchAll(callback){
  async.series([
    mkdir("model"),
    fetchModelAndPhoto
  ], callback)
}

fetchAll(function(err){
  if( err != null )
    console.log(err)
  else 
    console.log('done')
})
