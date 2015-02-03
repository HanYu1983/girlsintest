// Generated by CoffeeScript 1.9.0
(function() {
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  window.app.page.MenubarView = (function(_super) {
    __extends(MenubarView, _super);

    function MenubarView() {
      return MenubarView.__super__.constructor.apply(this, arguments);
    }

    MenubarView.prototype.addListener = function() {
      var onBtnMouseOut, onBtnMouseOver, self;
      onBtnMouseOut = function() {
        var btnOver, btnSelf;
        btnSelf = $(this);
        btnOver = btnSelf.find('.navover');
        console.log(btnOver);
        return btnOver.animate({
          width: '0px'
        }, 300);
      };
      onBtnMouseOver = function() {
        var btnOver, btnSelf;
        btnSelf = $(this);
        btnOver = btnSelf.find('.navover');
        console.log(btnOver);
        return btnOver.animate({
          width: '120px'
        }, 300);
      };
      self = this;
      this._elem.delegate('div', 'click', function() {
        return self.event.trigger('onMenubarBtnClick', this.id);
      });
      this._elem.delegate('div', 'mouseover', onBtnMouseOver);
      return this._elem.delegate('div', 'mouseout', onBtnMouseOut);
    };

    return MenubarView;

  })(window.vic.mvc.View);

}).call(this);
