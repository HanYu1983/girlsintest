// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.StreetsnapListController = (function(_super) {
    __extends(StreetsnapListController, _super);

    function StreetsnapListController() {
      return StreetsnapListController.__super__.constructor.apply(this, arguments);
    }

    StreetsnapListController.prototype.applyTemplate = function(_arg, callback) {
      var configKey, configPath, done, fetchDetail, fetchJSON, fetchModelDetail, fetchModelList, fetchPackageConfig, filterTag, modelType, searchKey, serverImagePath;
      searchKey = _arg[0], modelType = _arg[1];
      configKey = modelType === 'models' ? 'model' : 'street';
      serverImagePath = function(path) {
        var filepath;
        filepath = app.tool.serverapi.filepath("http://" + window.location.host);
        return filepath(path);
      };
      fetchJSON = function(configPath) {
        var query;
        query = app.tool.serverapi.query("http://" + window.location.host);
        return query(app.tool.serverapi.ServeFile, {
          FilePath: configPath
        });
      };
      fetchPackageConfig = function(configPath) {
        return fetchJSON(configPath);
      };
      fetchModelList = function(config) {
        var promise;
        promise = $.Deferred();
        fetchJSON(config[configKey]).done(function(data) {
          var modelKey;
          if (data.Success) {
            return promise.resolve(config, (function() {
              var _i, _len, _ref, _results;
              _ref = data.Info;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                modelKey = _ref[_i];
                if (modelKey !== 'config.json') {
                  _results.push(modelKey);
                }
              }
              return _results;
            })());
          } else {
            return promise.reject(data.Info);
          }
        }).fail(function(err) {
          return promise.reject(err);
        });
        return promise;
      };
      fetchModelDetail = function(modelPath, modelKey) {
        var path;
        path = "" + modelPath + "/" + modelKey + "/config.json";
        return fetchJSON(path);
      };
      fetchDetail = function(config, modelList) {
        var ajaxs, modelKey, promise;
        promise = $.Deferred();
        ajaxs = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = modelList.length; _i < _len; _i++) {
            modelKey = modelList[_i];
            _results.push(fetchModelDetail(config[configKey], modelKey));
          }
          return _results;
        })();
        $.when.apply($, ajaxs).done(function() {
          return promise.resolve(config, modelList, arguments);
        }).fail(function(err) {
          return promise.reject(err);
        });
        return promise;
      };
      filterTag = function(tag) {
        return function(_arg1) {
          var detail, model, pattern;
          model = _arg1[0], detail = _arg1[1];
          pattern = RegExp(".?" + tag + ".?");
          return detail.Tag.match(pattern);
        };
      };
      done = function(config, modelList, modelDetails) {
        var convertDTO, dto, models;
        models = _.zip(modelList, modelDetails);
        if (searchKey != null) {
          models = _.filter(models, filterTag(searchKey));
        }
        convertDTO = function(_arg1) {
          var detail, model;
          model = _arg1[0], detail = _arg1[1];
          return {
            id: model,
            name: detail.Caption,
            date: detail.Date,
            brand: detail.Brand,
            imgStylePath: serverImagePath("" + config[configKey] + "/" + model + "/image_2.jpg"),
            imgSideAPath: serverImagePath("" + config[configKey] + "/" + model + "/image_3.jpg"),
            imgSideBPath: serverImagePath("" + config[configKey] + "/" + model + "/image_4.jpg"),
            imgSideCPath: serverImagePath("" + config[configKey] + "/" + model + "/image_5.jpg")
          };
        };
        dto = {
          searchWord: searchKey != null ? searchKey : "",
          streetsnapList: _.map(models, convertDTO)
        };
        return callback(dto);
      };
      configPath = "package/config.json";
      return fetchPackageConfig(configPath).pipe(fetchModelList).pipe(fetchDetail).then(done, function(err) {
        return alert(err);
      });
    };

    StreetsnapListController.prototype.addListener = function() {
      StreetsnapListController.__super__.addListener.call(this);
      this._view.event.on('onBtnSearchClick', (function(_this) {
        return function(evt, params) {
          return _this.event.trigger(evt.type, params);
        };
      })(this));
      this._view.event.on('onBtnModelClick', (function(_this) {
        return function(evt, params) {
          return _this.event.trigger(evt.type, params);
        };
      })(this));
      return this._view.event.on('onBtnReturnClick', (function(_this) {
        return function(evt, params) {
          return _this.event.trigger(evt.type, params);
        };
      })(this));
    };

    StreetsnapListController.prototype.removeListener = function() {
      StreetsnapListController.__super__.removeListener.call(this);
      this._view.event.off('onBtnSearchClick');
      this._view.event.off('onBtnModelClick');
      return this._view.event.off('onBtnReturnClick');
    };

    return StreetsnapListController;

  })(vic.mvc.Controller);

}).call(this);
