// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.MenubarView = (function(_super) {
    __extends(MenubarView, _super);

    function MenubarView() {
      return MenubarView.__super__.constructor.apply(this, arguments);
    }

    MenubarView.prototype.addListener = function() {
      var self;
      self = this;
      return this._elem.delegate('div', 'click', function() {
        return self.event.trigger('onMenubarBtnClick', this.id);
      });
    };

    return MenubarView;

  })(window.vic.mvc.View);

}).call(this);
