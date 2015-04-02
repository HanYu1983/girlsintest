// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.MenubarController = (function(_super) {
    __extends(MenubarController, _super);

    function MenubarController() {
      return MenubarController.__super__.constructor.apply(this, arguments);
    }

    MenubarController.prototype.addListener = function() {
      var self;
      MenubarController.__super__.addListener.call(this);
      self = this;
      return this._view.event.on('onMenubarBtnClick', function(e, id) {
        return self.event.trigger('onMenubarBtnClick', id);
      });
    };

    MenubarController.prototype.removeListener = function() {
      return this._view.event.off('onMenubarBtnClick');
    };

    return MenubarController;

  })(vic.mvc.Controller);

}).call(this);