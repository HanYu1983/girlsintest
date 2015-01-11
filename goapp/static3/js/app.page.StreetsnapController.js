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
      return this._view.event.on('onImgHistoryClick', (function(_this) {
        return function() {
          return _this.onImgHistoryClick.apply(_this, arguments);
        };
      })(this));
    };

    StreetsnapController.prototype.open = function() {
      return StreetsnapController.__super__.open.call(this);
    };

    StreetsnapController.prototype.close = function() {
      return StreetsnapController.__super__.close.call(this);
    };

    StreetsnapController.prototype.applyTemplate = function(tmpl, callback) {
      var findFormatedPhoto, formatModelData, formatPhoto, isBottomPhoto, isHeadPhoto, isSidePhoto, isStylePhoto, queryDefaultTask, queryEndProcess, queryHeadPhotoTask, repairBase64;
      isStylePhoto = function(photo) {
        return photo.Belong === -3;
      };
      isSidePhoto = function(photo) {
        return photo.Belong === -2;
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
      formatModelData = function(_arg) {
        var modelData, photoData, _ref;
        modelData = _arg[0], photoData = _arg[1];
        return {
          name: modelData.Caption,
          date: modelData.DateUnix,
          styleUrl: (_ref = _.first(findFormatedPhoto(photoData, isStylePhoto))) != null ? _ref.url : void 0,
          sideList: findFormatedPhoto(photoData, isSidePhoto),
          bottomList: findFormatedPhoto(photoData, isBottomPhoto),
          modelDetail: modelData.Description,
          talk: modelData.Talk,
          protalk: modelData.Comment,
          key: modelData.ModelKey
        };
      };

      /*
      		@queryDefault()
      			.done ([modelDataList, photoDataList])->
      				model = _.first( _.map( _.zip( modelDataList, photoDataList ), formatModelData ))
      				callback tmpl.tmpl model
      				
      			.fail (err)->
      				console.log err
       */
      queryDefaultTask = (function(_this) {
        return function(callback) {
          return _this.queryDefault().done(function(_arg) {
            var model, modelDataList, photoDataList;
            modelDataList = _arg[0], photoDataList = _arg[1];
            model = _.first(_.map(_.zip(modelDataList, photoDataList), formatModelData));
            return callback(null, model);
          }).fail(function(err) {
            return callback(err);
          });
        };
      })(this);
      queryHeadPhotoTask = (function(_this) {
        return function(callback) {
          return _this.queryData(0, 6).done(function(_arg) {
            var modelDataList, photoDataList, photos;
            modelDataList = _arg[0], photoDataList = _arg[1];
            photos = _.map(photoDataList, function(photoData) {
              return _.first(_.filter(photoData, isHeadPhoto));
            });
            photos = _.map(photos, formatPhoto);
            return callback(null, photos);
          }).fail(function(err) {
            return callback(err);
          });
        };
      })(this);
      queryEndProcess = function(err, _arg) {
        var headModel, mainModel;
        mainModel = _arg[0], headModel = _arg[1];
        mainModel.historyList = headModel;
        return callback(tmpl.tmpl(mainModel));
      };
      return async.parallel([queryDefaultTask, queryHeadPhotoTask], queryEndProcess);

      /*
      		 *{"Key":5629499534213120,"Caption":"caption","Description":"description","Talk":"talk","Comment":"comment","ModelKey":"","Date":"2015-01-10T17:21:14.024316Z","DateUnix":1420910474,"Tag":"xxx","Available":true}
      		
      		callback tmpl.tmpl
      			name: 'vic'
      			date: '2014-12-2'
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

    StreetsnapController.prototype.queryDefault = function() {
      return this.queryData(0, 1);
    };

    StreetsnapController.prototype.queryData = function(offset, limit) {
      var fetchEndProcess, fetchModelData, fetchPhotoData, promise, query;
      query = app.tool.serverapi.query("http://localhost:8080/");
      fetchModelData = function(callback) {
        return query(app.tool.serverapi.QueryStreetModel, {
          Offset: offset,
          Limit: limit
        }).done(function(data) {
          return callback(null, data.Info);
        }).fail(function(err) {
          return callback(err);
        });
      };
      fetchPhotoData = function(modelDataList, callback) {
        if (modelDataList.length === 0) {
          callback(null, []);
        }
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
      console.log(evt);
      return this.event.trigger(evt.type, data);
    };

    return StreetsnapController;

  })(vic.mvc.Controller);

}).call(this);
