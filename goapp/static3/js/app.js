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
      this.menubar.event.on('onMenubarBtnClick', function(e, id) {
        switch (id) {
          case 'btn_nav_celebrity':
            return self.openPage(PageCelebrity);
          case 'btn_nav_model':
            return self.openPage(PageModels);
          case 'btn_nav_event':
            return self.openPage(PageEvent);
          case 'btn_nav_streetSnap':
            return self.openPage(PageStreetsnap);
          case 'btn_nav_news':
            return self.openPage(PageNews);
        }
      });
      Router = Backbone.Router.extend({
        routes: {
          'streetsnap_id=:id': 'streetsnap',
          '': 'default'
        },
        streetsnap: (function(_this) {
          return function(id) {
            return _this.openPage(PageStreetsnap, arguments);
          };
        })(this),
        "default": function() {
          return console.log('default');
        }
      });
      this.router = new Router();
      Backbone.history.start();
      this.openPopup(PageBigPhoto, ['images/streetSnap/test1.jpg']);
    }

    Main.prototype.openPopup = function(name, param) {
      this.closeAllPage(this.mc_popupContainer);
      return this.bindEvent(name, this.openPageController(name, this.mc_popupContainer, param));
    };

    Main.prototype.openPage = function(name, param) {
      this.closeAllPage(this.mc_pageContainer);
      return this.bindEvent(name, this.openPageController(name, this.mc_pageContainer, param));
    };

    Main.prototype.bindEvent = function(name, controller) {
      switch (name) {
        case PageStreetsnap:
          console.log('bind!!');
          return controller.event.on('onImgHistoryClick', (function(_this) {
            return function() {
              return _this.onImgHistoryClick.apply(_this, arguments);
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
          return controller.event.off('onImgHistoryClick');
      }
    };

    Main.prototype.openPageController = function(name, container, param) {
      var controller;
      if (this.mvcConfig[name] === void 0) {
        return;
      }
      controller = new this.mvcConfig[name].controller;
      controller.applyTemplate(this.mvcConfig[name].tmpl, param, (function(_this) {
        return function(elem) {
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
      console.log("streetsnap_id=" + id);
      return this.router.navigate("streetsnap_id=" + id, {
        trigger: true
      });
    };

    return Main;

  })();

  new window.app.Main(app.config.mvcConfig);

}).call(this);
