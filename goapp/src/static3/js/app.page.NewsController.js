// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.NewsController = (function(_super) {
    __extends(NewsController, _super);

    function NewsController() {
      return NewsController.__super__.constructor.apply(this, arguments);
    }

    NewsController.prototype.applyTemplate = function(_arg, callback) {
      var boundIndex, configPath, convertFormat, done, fetchDetail, fetchEventConfig, fetchPackageConfig, host, id, path, pathname, that;
      id = _arg[0];
      that = this;
      boundIndex = function(id, count) {
        id = id != null ? id : count;
        if (id < 1) {
          id = 1;
        } else if (id > count) {
          id = count;
        }
        return id;
      };
      fetchPackageConfig = function(configPath) {
        return $.ajax(path);
      };
      fetchEventConfig = function(config) {
        return $.ajax(config.eventConfig + "/config.json");
      };
      fetchDetail = function(config) {
        var count, filepath, prefix, promise, resourcePath;
        resourcePath = config.resource;
        prefix = config.prefix;
        count = config.count;
        id = boundIndex(id, count);
        that.id = id;
        that.count = count;
        filepath = "" + resourcePath + "/" + prefix + id + "/config.json";
        promise = $.Deferred();
        $.ajax(filepath).done(function(detail) {
          return promise.resolve(config, detail);
        }).fail(function(err) {
          return promise.reject(err);
        });
        return promise;
      };
      convertFormat = function(config, detail) {
        var count, folderpath, imageId, imageurl, imageurls, prefix, resourcePath;
        resourcePath = config.resource;
        prefix = config.prefix;
        count = config.count;
        folderpath = "" + resourcePath + "/" + prefix + id;
        imageurls = (function() {
          var _i, _ref, _results;
          _results = [];
          for (imageId = _i = 1, _ref = detail.count; 1 <= _ref ? _i <= _ref : _i >= _ref; imageId = 1 <= _ref ? ++_i : --_i) {
            _results.push("" + resourcePath + "/" + prefix + id + "/image_" + imageId + ".png");
          }
          return _results;
        })();
        return {
          title: detail.title,
          date: detail.date,
          sideList: (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = imageurls.length; _i < _len; _i++) {
              imageurl = imageurls[_i];
              _results.push({
                path: imageurl
              });
            }
            return _results;
          })(),
          content: detail.content,
          from: detail.from
        };
      };
      done = function(model) {
        return callback(model);
      };
      host = window.location.host;
      pathname = window.location.pathname.split('/').slice(1, window.location.pathname.split('/').length - 1).join('/');
      configPath = "package/config.json";
      path = "http://" + host + "/" + pathname + "/" + configPath;
      return fetchPackageConfig().pipe(fetchEventConfig).pipe(fetchDetail).pipe(convertFormat).then(done, function(err) {
        return alert(err);
      });
    };

    NewsController.prototype.addListener = function() {
      NewsController.__super__.addListener.call(this);
      this._view.event.on('onBtnPrevClick', (function(_this) {
        return function(evt) {
          _this.id--;
          if (_this.id < 1) {
            _this.id = 1;
          }
          return _this.event.trigger(evt.type, {
            id: _this.id
          });
        };
      })(this));
      return this._view.event.on('onBtnNextClick', (function(_this) {
        return function(evt) {
          _this.id++;
          if (_this.id > _this.count) {
            _this.id = _this.count;
          }
          return _this.event.trigger(evt.type, {
            id: _this.id
          });
        };
      })(this));
    };

    NewsController.prototype.removeListener = function() {
      NewsController.__super__.removeListener.call(this);
      this._view.event.off('onBtnPrevClick');
      return this._view.event.off('onBtnNextClick');
    };

    return NewsController;

  })(vic.mvc.Controller);

}).call(this);
