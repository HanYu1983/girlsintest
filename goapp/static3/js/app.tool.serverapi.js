// Generated by CoffeeScript 1.8.0
(function() {
  var apipath, pkg, query, querySignal, _base;

  if (app.tool == null) {
    app.tool = {};
  }

  if ((_base = app.tool).serverapi == null) {
    _base.serverapi = {};
  }

  pkg = app.tool.serverapi;

  apipath = 'goapp/Func';

  pkg.QueryStreetModel = 'QueryStreetModel';

  pkg.CreateStreetModel = 'UpdateStreetModel';

  pkg.UpdateStreetModel = 'UpdateStreetModel';

  pkg.AddPhotoToStreetModel = 'AddPhotoToStreetModel';

  pkg.QueryPhotoWithStreetModel = 'QueryPhotoWithStreetModel';

  pkg.DeletePhotoWithStreetModel = 'DeletePhotoWithStreetModel';

  query = function(host) {
    return function(cmd, data) {
      var promise;
      data.cmd = cmd;
      promise = jQuery.Deferred();
      $.when($.ajax(host + "/" + apipath, {
        type: 'post',
        data: data
      })).done(function(data) {
        return promise.resolve(data);
      }).fail(function(err) {
        return promise.reject(err);
      });
      return promise;
    };
  };

  querySignal = function(host) {
    return function(cmd, data) {
      return Bacon.fromPromise(query(host, cmd, data));
    };
  };

  pkg.query = query;

  pkg.querySignal = querySignal;

}).call(this);
