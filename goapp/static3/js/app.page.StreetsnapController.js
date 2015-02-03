// Generated by CoffeeScript 1.9.0
(function() {
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

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
      this._view.event.off('onImgHistoryClick');
      this._view.event.off('onImgClick');
      this._view.event.off('onBtnMoreClick');
      return this._view.event.off('onBtnShareClick');
    };

    StreetsnapController.prototype.open = function() {
      return StreetsnapController.__super__.open.call(this);
    };

    StreetsnapController.prototype.close = function() {
      return StreetsnapController.__super__.close.call(this);
    };

    StreetsnapController.prototype.applyTemplate = function(_arg, callback) {
      var EmptyModel, findFormatedPhoto, formatModelData, formatPhoto, isBottomPhoto, isHeadPhoto, isSidePhoto, isStylePhoto, key, modelType, queryDefaultTask, queryEndProcess, queryHeadPhotoTask, repairBase64;
      key = _arg[0], modelType = _arg[1];
      isStylePhoto = function(photo) {
        return photo.Belong === -2;
      };
      isSidePhoto = function(photo) {
        return photo.Belong === -3;
      };
      isHeadPhoto = function(photo) {
        return photo.Belong === -1;
      };
      isBottomPhoto = function(photo) {
        return photo.Belong === 0;
      };
      repairBase64 = function(base64) {
        return base64.replace('\r', '').replace('\n', '');
      };
      formatPhoto = function(photo) {
        return {
          id: photo.Key,
          url: app.tool.getFullBase64str(repairBase64(photo.Base64Str))
        };
      };
      findFormatedPhoto = function(photoData, filterFn) {
        return _.map(_.filter(photoData, filterFn), formatPhoto);
      };
      formatModelData = function(_arg1) {
        var modelData, photoData, _ref;
        modelData = _arg1[0], photoData = _arg1[1];
        return {
          name: modelData.Caption,
          date: app.tool.getFullDay(modelData.DateUnix),
          styleUrl: (_ref = _.first(findFormatedPhoto(photoData, isStylePhoto))) != null ? _ref.url : void 0,
          sideList: findFormatedPhoto(photoData, isSidePhoto),
          bottomList: findFormatedPhoto(photoData, isBottomPhoto),
          modelDetail: modelData.Description,
          talk: modelData.Talk,
          protalk: modelData.Comment,
          modelKey: modelData.ModelKey,
          key: modelData.Key
        };
      };
      EmptyModel = {
        name: '',
        date: '',
        styleUrl: '',
        sideList: '',
        bottomList: '',
        modelDetail: '',
        talk: '',
        protalk: '',
        modelKey: '',
        key: ''
      };
      queryDefaultTask = (function(_this) {
        return function(callback) {
          var queryFn;
          queryFn = key != null ? function() {
            return _this.queryKey(key);
          } : function() {
            return _this.queryDefault(modelType);
          };
          return queryFn().done(function(_arg1) {
            var model, modelDataList, photoDataList;
            modelDataList = _arg1[0], photoDataList = _arg1[1];
            model = _.first(_.map(_.zip(modelDataList, photoDataList), formatModelData));
            return callback(null, model != null ? model : EmptyModel);
          }).fail(function(err) {
            return callback(err);
          });
        };
      })(this);
      queryHeadPhotoTask = (function(_this) {
        return function(callback) {
          return _this.queryDataList(modelType, 0, 6).done(function(_arg1) {
            var modelDataList, photoDataList, photos;
            modelDataList = _arg1[0], photoDataList = _arg1[1];
            photos = _.map(photoDataList, function(photoData) {
              return _.first(_.filter(photoData, isHeadPhoto));
            });
            photos = _.map(_.zip(photos, modelDataList), function(_arg2) {
              var model, photo;
              photo = _arg2[0], model = _arg2[1];
              return {
                id: model.Key,
                url: app.tool.getFullBase64str(repairBase64(photo.Base64Str))
              };
            });
            return callback(null, photos);
          }).fail(function(err) {
            return callback(err);
          });
        };
      })(this);
      queryEndProcess = function(err, _arg1) {
        var headModel, mainModel;
        mainModel = _arg1[0], headModel = _arg1[1];
        if (err != null) {
          return console.log(err);
        } else {
          mainModel.historyList = headModel;
          return callback(mainModel);
        }
      };
      return async.parallel([queryDefaultTask, queryHeadPhotoTask], queryEndProcess);

      /*
      		#{"Key":5629499534213120,"Caption":"caption","Description":"description","Talk":"talk","Comment":"comment","ModelKey":"","Date":"2015-01-10T17:21:14.024316Z","DateUnix":1420910474,"Tag":"xxx","Available":true}
      		
      		callback
      			name: 'vic'
      			date: '2014-12-2'
      			modelKey:'dddd'
      			styleUrl:'images/streetSnap/test2.jpg'
      			sideList:[ {id:'01', url:'images/streetSnap/test1.jpg'}, {id:'02', url:'images/streetSnap/test1.jpg' }]
      			bottomList:[ {id:'01', url:'images/streetSnap/test1.jpg'}, {id:'02', url:'images/streetSnap/test1.jpg' }]
      			modelDetail:'''名字　　　　　　　　　: Alice</br>喜歡的品牌　　　　　　: Burberry</br>
      							喜歡的穿衣風格　　　　: American Style</br>
      							喜歡的雜誌　　　　　　: Vogue, ELLE</br>
      							最近喜歡看的電視節目　: 不是政論節目都好'''
      			talk:'對於時尚,我覺得最重要的是穿出自己的風格, 而不是一昧跟隨著流行。但當然也需要觀察最近的趨勢.也許有朝一日也可以成為部落格'
      			protalk:'於東區街頭看到這個小女孩, 桃紅T-Shirt加上深藍帽T的搭配，呈現出初秋可愛的氣息'
       */
    };

    StreetsnapController.prototype.queryDataList = function(modelType, offset, limit) {
      this.queryData({
        Offset: offset,
        Limit: limit
      });
      if (modelType === "models") {
        return this.queryData({
          ModelType: "m",
          Offset: offset,
          Limit: limit
        });
      } else {
        return this.queryData({
          ModelType: "s",
          Offset: offset,
          Limit: limit
        });
      }
    };

    StreetsnapController.prototype.queryDefault = function(modelType) {
      return this.queryDataList(modelType, 0, 1);
    };

    StreetsnapController.prototype.queryKey = function(key) {
      return this.queryData({
        Key: key
      });
    };

    StreetsnapController.prototype.queryData = function(option) {
      var fetchEndProcess, fetchModelData, fetchPhotoData, promise, query;
      query = app.tool.serverapi.query("http://" + window.location.host);
      fetchModelData = function(callback) {
        return query(app.tool.serverapi.QueryStreetModel, option).done(function(data) {
          var list;
          list = Array.isArray(data.Info) ? data.Info : [data.Info];
          return callback(null, list);
        }).fail(function(err) {
          return callback(err);
        });
      };
      fetchPhotoData = function(modelDataList, callback) {
        if (modelDataList.length === 0) {
          return callback(null, [[], []]);
        } else {
          return async.map(modelDataList, function(model, callback) {
            return query(app.tool.serverapi.QueryPhotoWithStreetModel, {
              StreetModelKey: model.Key
            }).done(function(photoData) {
              return callback(null, photoData.Info);
            }).fail(function(err) {
              return callback(err);
            });
          }, function(err, photoDataList) {
            return callback(err, [modelDataList, photoDataList]);
          });
        }
      };
      promise = jQuery.Deferred();
      fetchEndProcess = (function(_this) {
        return function(err, results) {
          if (err != null) {
            return promise.reject(err);
          } else {
            return promise.resolve(results);
          }
        };
      })(this);
      async.waterfall([fetchModelData, fetchPhotoData], fetchEndProcess);
      return promise;
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

    return StreetsnapController;

  })(vic.mvc.Controller);

}).call(this);
