// Generated by CoffeeScript 1.8.0
(function() {
  var CloseablePageList, PageBigPhoto, PageCelebrity, PageEvent, PageHome, PageModels, PageNews, PageStreetsnap, PageStreetsnapList;

  PageHome = 'home';

  PageCelebrity = 'celebrity';

  PageModels = 'models';

  PageEvent = 'event';

  PageStreetsnap = 'streetsnap';

  PageStreetsnapList = 'streetsnapList';

  PageNews = 'news';

  PageBigPhoto = 'bigPhoto';

  CloseablePageList = [PageHome, PageCelebrity, PageModels, PageEvent, PageStreetsnap, PageStreetsnapList, PageNews];

  window.app.Main = (function() {
    function Main(mvcConfig) {
      var Router, self;
      this.mvcConfig = mvcConfig;
      this.coll_pages = {};
      this.mc_pageContainer = $('#mc_pageContainer');
      this.mc_popupContainer = $('#mc_popupContainer');
      self = this;
      this.header = new window.app.page.HeaderController(new window.app.page.HeaderView($('#mc_header')));
      this.header.open();
      this.header.event.on('onHeaderBtnBackhomeClick', function() {
        return self.openPage(PageHome);
      });
      this.menubar = new window.app.page.MenubarController(new window.app.page.MenubarView($('#mc_menubar')));
      this.menubar.open();
      this.menubar.event.on('onMenubarBtnClick', (function(_this) {
        return function(e, id) {
          switch (id) {
            case 'btn_nav_celebrity':
              return _this.router.navigate('celebrity', {
                trigger: true
              });
            case 'btn_nav_model':
              return _this.router.navigate('models', {
                trigger: true
              });
            case 'btn_nav_event':
              return _this.router.navigate('event', {
                trigger: true
              });
            case 'btn_nav_streetSnap':
              return _this.router.navigate('streetsnap', {
                trigger: true
              });
            case 'btn_nav_news':
              return _this.router.navigate('news', {
                trigger: true
              });
          }
        };
      })(this));
      Router = Backbone.Router.extend({
        routes: {
          'streetsnap': 'streetsnap',
          'streetsnap/id=:id': 'streetsnap',
          'streetsnapList': 'streetsnapList',
          'models': 'models',
          'models/id=:id': 'models',
          'celebrity': 'celebrity',
          'event': 'event',
          'news': 'news',
          '': 'default'
        },
        streetsnap: (function(_this) {
          return function(id) {
            return _this.openPage(PageStreetsnap, [id, 'streetsnap']);
          };
        })(this),
        streetsnapList: (function(_this) {
          return function() {
            return _this.openPage(PageStreetsnapList);
          };
        })(this),
        models: (function(_this) {
          return function(id) {
            return _this.openPage(PageModels, [id, 'models']);
          };
        })(this),
        celebrity: (function(_this) {
          return function() {};
        })(this),
        event: (function(_this) {
          return function() {};
        })(this),
        news: (function(_this) {
          return function() {};
        })(this),
        "default": (function(_this) {
          return function() {
            return _this.openPage(PageHome);
          };
        })(this)
      });
      this.router = new Router();
      Backbone.history.start();
    }

    Main.prototype.openPopup = function(name, param) {
      return this.bindEvent(name, this.openPageController(name, this.mc_popupContainer, param));
    };

    Main.prototype.closePopup = function(name) {
      return this.closePage(name, this.mc_popupContainer);
    };

    Main.prototype.openPage = function(name, param) {
      this.closeAllPage(this.mc_pageContainer);
      return this.bindEvent(name, this.openPageController(name, this.mc_pageContainer, param));
    };

    Main.prototype.bindEvent = function(name, controller) {
      switch (name) {
        case PageStreetsnap:
          controller.event.on('onImgHistoryClick', (function(_this) {
            return function() {
              return _this.onImgHistoryClick.apply(_this, arguments);
            };
          })(this));
          controller.event.on('onImgClick', (function(_this) {
            return function() {
              return _this.onImgClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onBtnMoreClick', (function(_this) {
            return function() {
              return _this.onBtnMoreClick.apply(_this, arguments);
            };
          })(this));
        case PageStreetsnapList:
          return controller.event.on('onBtnSearchClick', (function(_this) {
            return function() {
              return _this.onBtnSearchClick.apply(_this, arguments);
            };
          })(this));
        case PageModels:
          controller.event.on('onImgHistoryClick', (function(_this) {
            return function() {
              return _this.onModelsImgHistoryClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onImgClick', (function(_this) {
            return function() {
              return _this.onModelsImgClick.apply(_this, arguments);
            };
          })(this));
        case PageBigPhoto:
          return controller.event.on('onBtnCloseClick', (function(_this) {
            return function() {
              return _this.onBtnCloseClick.apply(_this, arguments);
            };
          })(this));
      }
    };

    Main.prototype.closePage = function(name, container) {
      return this.unbindEvent(name, this.closePageController(name, container));
    };

    Main.prototype.unbindEvent = function(name, controller) {
      if (controller === void 0) {
        return;
      }
      switch (name) {
        case PageStreetsnap:
          controller.event.off('onImgHistoryClick');
          controller.event.off('onImgClick');
          return controller.event.off('onBtnMoreClick');
        case PageStreetsnapList:
          return controller.event.off('onBtnSearchClick');
        case PageModels:
          controller.event.off('onImgHistoryClick');
          return controller.event.off('onImgClick');
        case PageBigPhoto:
          return controller.event.off('onBtnCloseClick');
      }
    };

    Main.prototype.openPageController = function(name, container, param) {
      var controller;
      if (this.mvcConfig[name] === void 0) {
        return;
      }
      controller = new this.mvcConfig[name].controller;

      /*
      		controller.applyTemplate @mvcConfig[ name ].tmpl, param, (elem)=>
      			elem.appendTo container
      			controller.setView new @mvcConfig[ name ].view elem
      			controller.open()
      			@coll_pages[ name ] = controller
       */
      controller.applyTemplate(param, (function(_this) {
        return function(dataDTO) {
          var elem;
          console.log(dataDTO);
          elem = _this.mvcConfig[name].tmpl.tmpl(dataDTO);
          elem.__dataDTO__ = dataDTO;
          elem.appendTo(container);
          controller.setView(new _this.mvcConfig[name].view(elem));
          controller.open();
          return _this.coll_pages[name] = controller;
        };
      })(this));
      return controller;
    };

    Main.prototype.closePageController = function(name, container) {
      var page;
      if (this.coll_pages[name] === void 0) {
        return;
      }
      page = this.coll_pages[name];
      container.empty();
      this.coll_pages[name].close();
      delete this.coll_pages[name];
      return page;
    };

    Main.prototype.closeAllPage = function(container) {
      var page, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = CloseablePageList.length; _i < _len; _i++) {
        page = CloseablePageList[_i];
        _results.push(this.closePage(page, container));
      }
      return _results;
    };

    Main.prototype.onImgHistoryClick = function(evt, _arg) {
      var id;
      id = _arg.id;
      return this.router.navigate("streetsnap/id=" + id, {
        trigger: true
      });
    };

    Main.prototype.onImgClick = function(evt, _arg) {
      var id, key;
      id = _arg.id, key = _arg.key;
      return this.openPopup(PageBigPhoto, [key, id]);
    };

    Main.prototype.onBtnMoreClick = function(evt) {
      return this.router.navigate('streetsnapList', {
        trigger: true
      });
    };

    Main.prototype.onModelsImgHistoryClick = function(evt, _arg) {
      var id;
      id = _arg.id;
      return this.router.navigate("models/id=" + id, {
        trigger: true
      });
    };

    Main.prototype.onModelsImgClick = function(evt, _arg) {
      var id, key;
      id = _arg.id, key = _arg.key;
      return this.openPopup(PageBigPhoto, [key, id]);
    };

    Main.prototype.onBtnCloseClick = function() {
      return this.closePopup(PageBigPhoto);
    };

    Main.prototype.onBtnSearchClick = function(evt, params) {
      return console.log(params.search);
    };

    return Main;

  })();

  new window.app.Main(app.config.mvcConfig);

}).call(this);
