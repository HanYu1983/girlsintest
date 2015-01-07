// Generated by CoffeeScript 1.8.0
(function() {
  window.app.Main = (function() {
    function Main() {
      var self;
      this.coll_tmpls = {
        home: $('#tmpl_home'),
        celebrity: $('#tmpl_celebrity'),
        models: $('#tmpl_models'),
        event: $('#tmpl_event'),
        streetsnap: $('#tmpl_streetsnap'),
        news: $('#tmpl_news')
      };
      this.mc_pageContainer = $('#mc_pageContainer');
      self = this;
      this.header = new window.app.header.Controller(new window.app.header.View($('#mc_header')));
      this.header.open();
      this.header.event.on('onHeaderBtnBackhomeClick', function() {
        return self.openHome();
      });
      this.menubar = new window.app.menubar.Controller(new window.app.menubar.View($('#mc_menubar')));
      this.menubar.open();
      this.menubar.event.on('onMenubarBtnClick', function(e, id) {
        switch (id) {
          case 'btn_nav_celebrity':
            return self.openCelebrity();
          case 'btn_nav_model':
            return self.openModels();
          case 'btn_nav_event':
            return self.openEvent();
          case 'btn_nav_streetSnap':
            return self.openStreetsnap();
          case 'btn_nav_news':
            return self.openNews();
        }
      });
      this.openStreetsnap();
    }

    Main.prototype.openHome = function() {
      return this.openTargetPage('home');
    };

    Main.prototype.openCelebrity = function() {
      return this.openTargetPage('celebrity');
    };

    Main.prototype.openModels = function() {
      return this.openTargetPage('models');
    };

    Main.prototype.openEvent = function() {
      return this.openTargetPage('event');
    };

    Main.prototype.openStreetsnap = function() {
      return this.openTargetPage('streetsnap');
    };

    Main.prototype.openNews = function() {
      return this.openTargetPage('news');
    };

    Main.prototype.openTargetPage = function(name, data) {
      var tmpl;
      tmpl = this.coll_tmpls[name].tmpl(data);
      tmpl.fadeIn(400);
      this.mc_pageContainer.empty();
      return this.mc_pageContainer.append(tmpl);
    };

    Main.prototype.closeTargetPage = function(name) {};

    return Main;

  })();

  new window.app.Main();

}).call(this);