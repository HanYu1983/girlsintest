// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.BigPhotoController = (function(_super) {
    __extends(BigPhotoController, _super);

    function BigPhotoController() {
      return BigPhotoController.__super__.constructor.apply(this, arguments);
    }

    BigPhotoController.prototype.addListener = function() {
      BigPhotoController.__super__.addListener.call(this);
      return this._view.event.on('onBtnCloseClick', (function(_this) {
        return function() {
          return _this.onBtnCloseClick.apply(_this, arguments);
        };
      })(this));
    };

    BigPhotoController.prototype.applyTemplate = function(_arg, callback) {
      var belongKey, modelKey, query, repairBase64;
      modelKey = _arg[0], belongKey = _arg[1];
      repairBase64 = function(base64) {
        return base64.replace('\r', '').replace('\n', '');
      };
      query = app.tool.serverapi.query("http://" + window.location.host);
      return query(app.tool.serverapi.QueryPhotoWithStreetModel, {
        StreetModelKey: modelKey,
        Belong: belongKey
      }).done(function(photoData) {
        if (photoData.Info.length > 0) {
          return callback({
            url: app.tool.getFullBase64str(repairBase64(photoData.Info[0].Base64Str))
          });
        } else {
          alert('data error, no picture');
          return callback({
            url: ''
          });
        }
      }).fail(function(err) {
        return callback(err);
      });
    };

    BigPhotoController.prototype.onBtnCloseClick = function(evt) {
      return this.event.trigger(evt.type);
    };

    return BigPhotoController;

  })(vic.mvc.Controller);

}).call(this);
