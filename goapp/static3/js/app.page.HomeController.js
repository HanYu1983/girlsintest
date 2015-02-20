// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.HomeController = (function(_super) {
    __extends(HomeController, _super);

    function HomeController() {
      return HomeController.__super__.constructor.apply(this, arguments);
    }

    HomeController.prototype.addListener = function() {
      return HomeController.__super__.addListener.call(this);
    };

    HomeController.prototype.applyTemplate = function(param, callback) {
      var query;
      query = app.tool.serverapi.query("http://" + window.location.host);
      return query(app.tool.serverapi.QueryStreetModel, {
        Rand: 0
      }).done(function(data) {
        return callback({
          modelKey: data.Info.ModelKey
        });
      }).fail(function(err) {
        return alert(err);
      });
    };

    return HomeController;

  })(vic.mvc.Controller);

}).call(this);
