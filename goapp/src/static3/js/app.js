// Generated by CoffeeScript 1.8.0
(function() {
  var CloseablePageList, PageBigPhoto, PageCelebrity, PageEvent, PageHome, PageModels, PageModelsList, PageNews, PageStreetsnap, PageStreetsnapList;

  PageHome = 'home';

  PageCelebrity = 'celebrity';

  PageModels = 'models';

  PageModelsList = 'modelsList';

  PageEvent = 'event';

  PageStreetsnap = 'streetsnap';

  PageStreetsnapList = 'streetsnapList';

  PageNews = 'news';

  PageBigPhoto = 'bigPhoto';

  CloseablePageList = [PageHome, PageCelebrity, PageModels, PageModelsList, PageEvent, PageStreetsnap, PageStreetsnapList, PageNews];

  window.app.Main = (function() {
    function Main(mvcConfig) {
      var Router, self;
      this.mvcConfig = mvcConfig;
      this.coll_pages = {};
      this.mc_pageContainer = $('#mc_pageContainer');
      this.mc_popupContainer = $('#mc_popupContainer');
      this.mc_loading = $('#mc_loading');
      self = this;
      this.header = new window.app.page.HeaderController(new window.app.page.HeaderView($('#mc_header')));
      this.header.open();
      this.header.event.on('onHeaderBtnBackhomeClick', (function(_this) {
        return function() {
          return _this.router.navigate('', {
            trigger: true
          });
        };
      })(this));
      this.menubar = new window.app.page.MenubarController(new window.app.page.MenubarView($('#mc_menubar')));
      this.menubar.open();
      this.menubar.event.on('onMenubarBtnClick', (function(_this) {
        return function(e, id) {
          switch (id) {
            case 'btn_nav_celebrity':
              return alert('敬請期待');
            case 'btn_nav_model':
              return _this.router.navigate('modelsList', {
                trigger: true
              });
            case 'btn_nav_event':
              return alert('敬請期待');
            case 'btn_nav_streetSnap':
              return _this.router.navigate('streetsnapList', {
                trigger: true
              });
            case 'btn_nav_news':
              return alert('敬請期待');
          }
        };
      })(this));
      Router = Backbone.Router.extend({
        routes: {
          'streetsnap': 'streetsnap',
          'streetsnap/id=:id': 'streetsnap',
          'streetsnapList': 'streetsnapList',
          'streetsnapList/search=:search': 'streetsnapList',
          'models': 'models',
          'models/id=:id': 'models',
          'modelsList': 'modelsList',
          'modelsList/search=:search': 'modelsList',
          'celebrity': 'celebrity',
          'event': 'event',
          'news': 'news',
          '': 'default'
        },
        streetsnap: (function(_this) {
          return function(id) {
            _this.openPage(PageStreetsnap, [id, 'streetsnap']);
            return _this.header.showStreetsnap();
          };
        })(this),
        streetsnapList: (function(_this) {
          return function(search) {
            _this.openPage(PageStreetsnapList, [search, 'streetsnap']);
            return _this.header.showStreetsnap();
          };
        })(this),
        models: (function(_this) {
          return function(id) {
            _this.openPage(PageModels, [id, 'models']);
            return _this.header.showModels();
          };
        })(this),
        modelsList: (function(_this) {
          return function(search) {
            _this.openPage(PageModelsList, [search, 'models']);
            return _this.header.showModels();
          };
        })(this),
        celebrity: (function(_this) {
          return function() {
            return _this.header.showCelebrity();
          };
        })(this),
        event: (function(_this) {
          return function() {
            return _this.header.showEvent();
          };
        })(this),
        news: (function(_this) {
          return function() {
            console.log('news');
            _this.header.showNews();
            return _this.openPage(PageNews, '1');
          };
        })(this),
        "default": (function(_this) {
          return function() {
            _this.openPage(PageHome);
            return _this.header.showHome();
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
          controller.event.on('onBtnMoreClick', (function(_this) {
            return function() {
              return _this.onBtnMoreClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onBtnShareClick', (function(_this) {
            return function() {
              return _this.onBtnShareClick.apply(_this, arguments);
            };
          })(this));
        case PageStreetsnapList:
          controller.event.on('onBtnSearchClick', (function(_this) {
            return function() {
              return _this.onBtnSearchClick.apply(_this, arguments);
            };
          })(this));
          controller.event.on('onBtnModelClick', (function(_this) {
            return function() {
              return _this.onBtnModelClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onBtnReturnClick', (function(_this) {
            return function() {
              return _this.onBtnReturnClick.apply(_this, arguments);
            };
          })(this));
        case PageModels:
          controller.event.on('onImgHistoryClick', (function(_this) {
            return function() {
              return _this.onModelsImgHistoryClick.apply(_this, arguments);
            };
          })(this));
          controller.event.on('onImgClick', (function(_this) {
            return function() {
              return _this.onModelsImgClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onBtnMoreClick', (function(_this) {
            return function() {
              return _this.onModelsBtnMoreClick.apply(_this, arguments);
            };
          })(this));
        case PageModelsList:
          controller.event.on('onBtnSearchClick', (function(_this) {
            return function() {
              return _this.onModelsBtnSearchClick.apply(_this, arguments);
            };
          })(this));
          controller.event.on('onBtnModelClick', (function(_this) {
            return function() {
              return _this.onModelsBtnModelClick.apply(_this, arguments);
            };
          })(this));
          return controller.event.on('onBtnReturnClick', (function(_this) {
            return function() {
              return _this.onModelsBtnReturnClick.apply(_this, arguments);
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
          controller.event.off('onBtnMoreClick');
          return controller.event.off('onBtnShareClick');
        case PageStreetsnapList:
          controller.event.off('onBtnSearchClick');
          controller.event.off('onBtnModelClick');
          return controller.event.off('onBtnReturnClick');
        case PageModels:
          controller.event.off('onModelsImgHistoryClick');
          controller.event.off('onModelsImgClick');
          return controller.event.off('onModelsBtnMoreClick');
        case PageModelsList:
          controller.event.off('onModelsBtnSearchClick');
          controller.event.off('onModelsBtnModelClick');
          return controller.event.off('onModelsBtnReturnClick');
        case PageBigPhoto:
          return controller.event.off('onBtnCloseClick');
      }
    };

    Main.prototype.openPageController = function(name, container, param) {
      var controller;
      if (this.mvcConfig[name] === void 0) {
        return;
      }
      this.openLoading();
      controller = new this.mvcConfig[name].controller;
      controller.applyTemplate(param, (function(_this) {
        return function(dataDTO) {
          var elem;
          console.log(dataDTO);
          elem = _this.mvcConfig[name].tmpl.tmpl(dataDTO, _this);
          elem.__dataDTO__ = dataDTO;
          elem.appendTo(container);
          controller.setView(new _this.mvcConfig[name].view(elem));
          controller.open();
          _this.coll_pages[name] = controller;
          return _this.closeLoading();
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

    Main.prototype.openLoading = function() {
      return this.mc_loading.fadeIn(400);
    };

    Main.prototype.closeLoading = function() {
      return this.mc_loading.fadeOut(400);
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

    Main.prototype.onBtnShareClick = function(evt, _arg) {
      var key;
      key = _arg.key;
      return vic.facebook.postMessageToMyboard({
        name: 'test-share',
        link: "http://" + window.location.host + "/angular-test-coffee/index.html#streetsnap/id=" + key,
        picture: '',
        caption: 'caption',
        description: 'description',
        callback: function() {
          return console.log('success');
        },
        error: function() {
          return console.log('error');
        }
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

    Main.prototype.onModelsBtnMoreClick = function(evt) {
      return this.router.navigate('modelsList', {
        trigger: true
      });
    };

    Main.prototype.onBtnCloseClick = function() {
      return this.closePopup(PageBigPhoto);
    };

    Main.prototype.onBtnSearchClick = function(evt, params) {
      return this.router.navigate('streetsnapList/search=' + params.search, {
        trigger: true
      });
    };

    Main.prototype.onBtnModelClick = function(evt, params) {
      return this.router.navigate('streetsnap/id=' + params.id, {
        trigger: true
      });
    };

    Main.prototype.onBtnReturnClick = function(evt, params) {
      return this.router.navigate('streetsnapList', {
        trigger: true
      });
    };

    Main.prototype.onModelsBtnSearchClick = function(evt, params) {
      return this.router.navigate('modelsList/search=' + params.search, {
        trigger: true
      });
    };

    Main.prototype.onModelsBtnModelClick = function(evt, params) {
      return this.router.navigate('models/id=' + params.id, {
        trigger: true
      });
    };

    Main.prototype.onModelsBtnReturnClick = function(evt, params) {
      return this.router.navigate('modelsList', {
        trigger: true
      });
    };

    Main.prototype.brandToColor = function(brand) {
      switch (brand) {
        case 'AAA':
          return 'yellow';
        case 'BBB':
          return 'red';
      }
    };

    return Main;

  })();

  new window.app.Main(app.config.mvcConfig);

}).call(this);