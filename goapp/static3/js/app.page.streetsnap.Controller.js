// Generated by CoffeeScript 1.8.0
(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_base = window.app.page).streetsnap == null) {
    _base.streetsnap = {};
  }

  window.app.page.streetsnap.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.addListener = function() {
      return Controller.__super__.addListener.call(this);
    };

    Controller.prototype.open = function() {
      return Controller.__super__.open.call(this);
    };

    Controller.prototype.close = function() {
      return Controller.__super__.close.call(this);
    };

    return Controller;

  })(vic.mvc.Controller);

}).call(this);