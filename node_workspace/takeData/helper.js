var http = require('http')
var querystring = require('querystring');

function handleHttpResponse( cb ){
  return function(response){
    var str = '';
    response.on('data', function (chunk) {
      str += chunk;
    });
    response.on('error', function (err) {
      cb( err, null )
    });
    response.on('end', function () {
      cb( null, str )
    });
  }
}

function getJSON(option, method, data, cb){
  method = method || 'GET'
  option.method = method
  querystr = querystring.stringify(data)
  if( method == 'GET' ){
    option.path = [option.path, querystr].join('?')
  }else{
    option.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(querystr)
    }
  }
  var req = http.request(option, handleHttpResponse(function(err, res){
    if( err )
      cb( err )
    else
      cb( null, JSON.parse(res))
  }))
  if( method == 'POST' ){
    req.write(querystr)
  }
  req.end()
}

exports.handleHttpResponse = handleHttpResponse
exports.getJSON = getJSON