// Generated by CoffeeScript 1.8.0
(function() {
  var CloseablePageList, PageCelebrity, PageEvent, PageHome, PageModels, PageNews, PageStreetsnap, PageStreetsnapList;

  PageHome = 'home';

  PageCelebrity = 'celebrity';

  PageModels = 'models';

  PageEvent = 'event';

  PageStreetsnap = 'streetsnap';

  PageStreetsnapList = 'streetsnapList';

  PageNews = 'news';

  CloseablePageList = [PageHome, PageCelebrity, PageModels, PageEvent, PageStreetsnap, PageStreetsnapList, PageNews];

  window.app.Main = (function() {
    function Main(mvcConfig) {
      var self;
      this.mvcConfig = mvcConfig;
      this.coll_pages = {};
      this.mc_pageContainer = $('#mc_pageContainer');
      self = this;
      this.header = new window.app.header.Controller(new window.app.header.View($('#mc_header')));
      this.header.open();
      this.header.event.on('onHeaderBtnBackhomeClick', function() {
        return self.openPage(PageHome);
      });
      this.menubar = new window.app.menubar.Controller(new window.app.menubar.View($('#mc_menubar')));
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
      this.openPage(PageStreetsnap);
    }

    Main.prototype.openPage = function(name, model) {
      this.closeAllPage();
      return this.bindEvent(name, this.openPageController(name, model));
    };

    Main.prototype.bindEvent = function(name, controller) {};

    Main.prototype.closePage = function(name) {
      return this.unbindEvent(name, this.closePageController(name));
    };

    Main.prototype.unbindEvent = function(name, controller) {
      if (controller === void 0) {

      }
    };

    Main.prototype.openPageController = function(name, model) {
      var controller, elem;
      if (this.mvcConfig[name] === void 0) {
        return;
      }
      elem = this.mvcConfig[name].tmpl.tmpl(model);
      elem.appendTo(this.mc_pageContainer);
      controller = new this.mvcConfig[name].controller(new this.mvcConfig[name].view(elem));
      controller.open();
      return this.coll_pages[name] = controller;
    };

    Main.prototype.closePageController = function(name) {
      var page;
      if (this.coll_pages[name] === void 0) {
        return;
      }
      page = this.coll_pages[name];
      this.mc_pageContainer.empty();
      this.coll_pages[name].close();
      delete this.coll_pages[name];
      return page;
    };

    Main.prototype.closeAllPage = function() {
      var page, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = CloseablePageList.length; _i < _len; _i++) {
        page = CloseablePageList[_i];
        _results.push(this.closePage(page));
      }
      return _results;
    };

    return Main;

  })();

  console.log(app.mvcConfig);

  new window.app.Main(app.mvcConfig);

}).call(this);
