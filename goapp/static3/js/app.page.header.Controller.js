// Generated by CoffeeScript 1.8.0
(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_base = window.app).header == null) {
    _base.header = {};
  }

  window.app.header.Controller = (function(_super) {
    __extends(Controller, _super);

    function Controller() {
      return Controller.__super__.constructor.apply(this, arguments);
    }

    Controller.prototype.addListener = function() {
      var self;
      Controller.__super__.addListener.call(this);
      self = this;
      return this._view.event.on('onHeaderBtnBackhomeClick', function() {
        return self.event.trigger('onHeaderBtnBackhomeClick');
      });
    };

    return Controller;

  })(vic.mvc.Controller);

}).call(this);