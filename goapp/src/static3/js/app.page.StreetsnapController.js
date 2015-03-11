// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.StreetsnapController = (function(_super) {
    __extends(StreetsnapController, _super);

    function StreetsnapController() {
      return StreetsnapController.__super__.constructor.apply(this, arguments);
    }

    StreetsnapController.prototype.addListener = function() {
      StreetsnapController.__super__.addListener.call(this);
      this._view.event.on('onImgHistoryClick', (function(_this) {
        return function() {
          return _this.onImgHistoryClick.apply(_this, arguments);
        };
      })(this));
      this._view.event.on('onImgClick', (function(_this) {
        return function() {
          return _this.onImgClick.apply(_this, arguments);
        };
      })(this));
      this._view.event.on('onBtnMoreClick', (function(_this) {
        return function() {
          return _this.onBtnMoreClick.apply(_this, arguments);
        };
      })(this));
      return this._view.event.on('onBtnShareClick', (function(_this) {
        return function() {
          return _this.onBtnShareClick.apply(_this, arguments);
        };
      })(this));
    };

    StreetsnapController.prototype.removeListener = function() {
      StreetsnapController.__super__.removeListener.call(this);
      this._view.event.off('onImgHistoryClick');
      this._view.event.off('onImgClick');
      this._view.event.off('onBtnMoreClick');
      return this._view.event.off('onBtnShareClick');
    };

    StreetsnapController.prototype.onImgHistoryClick = function(evt, data) {
      return this.event.trigger(evt.type, data);
    };

    StreetsnapController.prototype.onImgClick = function(evt, data) {
      return this.event.trigger(evt.type, data);
    };

    StreetsnapController.prototype.onBtnMoreClick = function(evt) {
      return this.event.trigger(evt.type);
    };

    StreetsnapController.prototype.onBtnShareClick = function(evt, data) {
      return this.event.trigger(evt.type, data);
    };

    StreetsnapController.prototype.applyTemplate = function(_arg, callback) {
      var configKey, configPath, done, getAllModel, key, modelType;
      key = _arg[0], modelType = _arg[1];
      configKey = modelType === 'models' ? 'model' : modelType === 'streetsnap' ? 'street' : 'product';
      done = function(config, models) {
        var convertHeadDTO, convertImageId2DTO, convertImageId2DTOForSize, detail, dto, _i, _ref, _ref1, _results;
        _ref = _.filter(models, function(_arg1) {
          var detail, modelKey;
          modelKey = _arg1[0], detail = _arg1[1];
          return modelKey === key;
        })[0], key = _ref[0], detail = _ref[1];
        convertHeadDTO = function(_arg1) {
          var detail, key;
          key = _arg1[0], detail = _arg1[1];
          return {
            id: key,
            url: app.fn.serverImagePath("" + config[configKey] + "/" + key + "/image_1.jpg")
          };
        };
        convertImageId2DTO = function(ids) {
          var basic, id, _i, _len, _ref1, _results;
          _ref1 = (function() {
            var _j, _len, _results1;
            _results1 = [];
            for (_j = 0, _len = ids.length; _j < _len; _j++) {
              id = ids[_j];
              _results1.push("" + config[configKey] + "/" + key + "/image_" + id + ".jpg");
            }
            return _results1;
          })();
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            basic = _ref1[_i];
            _results.push({
              id: basic,
              url: app.fn.serverImagePath(basic)
            });
          }
          return _results;
        };
        convertImageId2DTOForSize = function(ids) {
          var basic, id, _i, _len, _ref1, _results;
          _ref1 = (function() {
            var _j, _len, _results1;
            _results1 = [];
            for (_j = 0, _len = ids.length; _j < _len; _j++) {
              id = ids[_j];
              _results1.push("" + config[configKey] + "/" + key + "/image_" + id + ".jpg");
            }
            return _results1;
          })();
          _results = [];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            basic = _ref1[_i];
            _results.push({
              id: basic,
              url: app.fn.serverImagePath100(basic)
            });
          }
          return _results;
        };
        dto = {
          historyList: _.map(models, convertHeadDTO),
          name: detail.Caption,
          date: detail.Date,
          styleUrl: app.fn.serverImagePath("" + config[configKey] + "/" + key + "/image_2.jpg"),
          sideList: convertImageId2DTOForSize([3, 4, 5]),
          bottomList: detail.ImageCount > 5 ? convertImageId2DTO((function() {
            _results = [];
            for (var _i = 6, _ref1 = detail.ImageCount; 6 <= _ref1 ? _i <= _ref1 : _i >= _ref1; 6 <= _ref1 ? _i++ : _i--){ _results.push(_i); }
            return _results;
          }).apply(this)) : void 0,
          modelDetail: detail.Description,
          talk: detail.Talk,
          protalk: detail.Comment,
          modelKey: detail.ModelKey,
          key: key
        };
        return callback(dto);
      };
      configPath = "package/config.json";
      if (app.cache == null) {
        app.cache = {};
      }
      getAllModel = app.fn.memorizeGetAllModel(app.cache);
      return getAllModel(configPath)(configKey).done(done).fail(function(err) {
        return alert(err);
      });
    };

    return StreetsnapController;

  })(vic.mvc.Controller);

}).call(this);
