// Generated by CoffeeScript 1.9.0
(function() {
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  window.app.page.HeaderView = (function(_super) {
    __extends(HeaderView, _super);

    function HeaderView(elem) {
      HeaderView.__super__.constructor.call(this, elem);
      this._btn_backhome = elem.find('#btn_backhome');
      this.img_homeLogo = elem.find('#img_homeLogo');
      this.img_streetSnapLogo = elem.find('#img_streetSnapLogo');
      this.img_streetNewsLogo = elem.find('#img_streetNewsLogo');
      this.img_streetModelsLogo = elem.find('#img_streetModelsLogo');
      this.img_streetEventLogo = elem.find('#img_streetEventLogo');
      this.img_streetCelebrityLogo = elem.find('#img_streetCelebrityLogo');
    }

    HeaderView.prototype.addListener = function() {
      return this._btn_backhome.click((function(_this) {
        return function() {
          return _this.event.trigger('onHeaderBtnBackhomeClick');
        };
      })(this));
    };

    HeaderView.prototype.removerListener = function() {
      return this._btn_backhome.off('click');
    };

    HeaderView.prototype.showHome = function() {
      this.img_streetSnapLogo.hide();
      this.img_streetNewsLogo.hide();
      this.img_streetModelsLogo.hide();
      this.img_streetEventLogo.hide();
      this.img_streetCelebrityLogo.hide();
      return this.img_homeLogo.fadeIn(400);
    };

    HeaderView.prototype.showStreetsnap = function() {
      this.img_streetSnapLogo.fadeIn(400);
      this.img_streetNewsLogo.hide();
      this.img_streetModelsLogo.hide();
      this.img_streetEventLogo.hide();
      this.img_streetCelebrityLogo.hide();
      return this.img_homeLogo.hide();
    };

    HeaderView.prototype.showNews = function() {
      this.img_streetSnapLogo.hide();
      this.img_streetNewsLogo.fadeIn(400);
      this.img_streetModelsLogo.hide();
      this.img_streetEventLogo.hide();
      this.img_streetCelebrityLogo.hide();
      return this.img_homeLogo.hide();
    };

    HeaderView.prototype.showModels = function() {
      this.img_streetSnapLogo.hide();
      this.img_streetNewsLogo.hide();
      this.img_streetModelsLogo.fadeIn(400);
      this.img_streetEventLogo.hide();
      this.img_streetCelebrityLogo.hide();
      return this.img_homeLogo.hide();
    };

    HeaderView.prototype.showEvent = function() {
      this.img_streetSnapLogo.hide();
      this.img_streetNewsLogo.hide();
      this.img_streetModelsLogo.hide();
      this.img_streetEventLogo.fadeIn(400);
      this.img_streetCelebrityLogo.hide();
      return this.img_homeLogo.hide();
    };

    HeaderView.prototype.showCelebrity = function() {
      this.img_streetSnapLogo.hide();
      this.img_streetNewsLogo.hide();
      this.img_streetModelsLogo.hide();
      this.img_streetEventLogo.hide();
      this.img_streetCelebrityLogo.fadeIn(400);
      return this.img_homeLogo.hide();
    };

    return HeaderView;

  })(window.vic.mvc.View);

}).call(this);
