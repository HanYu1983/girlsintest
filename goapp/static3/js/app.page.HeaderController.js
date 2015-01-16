// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.HeaderController = (function(_super) {
    __extends(HeaderController, _super);

    function HeaderController() {
      return HeaderController.__super__.constructor.apply(this, arguments);
    }

    HeaderController.prototype.addListener = function() {
      var self;
      HeaderController.__super__.addListener.call(this);
      self = this;
      return this._view.event.on('onHeaderBtnBackhomeClick', function() {
        return self.event.trigger('onHeaderBtnBackhomeClick');
      });
    };

    HeaderController.prototype.showHome = function() {
      return this._view.showHome();
    };

    HeaderController.prototype.showStreetsnap = function() {
      return this._view.showStreetsnap();
    };

    return HeaderController;

  })(vic.mvc.Controller);

}).call(this);
