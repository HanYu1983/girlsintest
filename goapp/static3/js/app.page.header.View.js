// Generated by CoffeeScript 1.8.0
(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_base = window.app).header == null) {
    _base.header = {};
  }

  window.app.header.View = (function(_super) {
    __extends(View, _super);

    function View(elem) {
      View.__super__.constructor.call(this, elem);
      this._btn_backhome = elem.find('#btn_backhome');
    }

    View.prototype.addListener = function() {
      var self;
      self = this;
      return this._btn_backhome.click(function() {
        return self.event.trigger('onHeaderBtnBackhomeClick');
      });
    };

    return View;

  })(window.vic.mvc.View);

}).call(this);