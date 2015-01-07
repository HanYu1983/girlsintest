// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.menubar = {};

  window.app.menubar.View = (function(_super) {
    __extends(View, _super);

    function View() {
      return View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.addListener = function() {
      var self;
      self = this;
      return this._elem.delegate('div', 'click', function() {
        return self.event.trigger('onMenubarBtnClick', this.id);
      });
    };

    return View;

  })(window.vic.mvc.View);

  window.app.menubar.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.addListener = function() {
      var self;
      Controller.__super__.addListener.call(this);
      self = this;
      return this._view.event.on('onMenubarBtnClick', function(e, id) {
        return self.event.trigger('onMenubarBtnClick', id);
      });
    };

    return Controller;

  })(vic.mvc.Controller);

}).call(this);