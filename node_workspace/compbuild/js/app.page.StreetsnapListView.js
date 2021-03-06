// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.StreetsnapListView = (function(_super) {
    __extends(StreetsnapListView, _super);

    function StreetsnapListView(elem) {
      StreetsnapListView.__super__.constructor.call(this, elem);
      this.input_search = elem.find('#input_search');
      this.btn_search = elem.find('#btn_search');
      this.btn_return = elem.find('#btn_return');
      this.mc_modelContainer = elem.find('#mc_modelContainer');
      console.log('model');
    }

    StreetsnapListView.prototype.addListener = function() {
      var self;
      StreetsnapListView.__super__.addListener.call(this);
      self = this;
      this.btn_search.click((function(_this) {
        return function() {
          var search;
          search = _this.input_search.val();
          if (search.length > 0) {
            return _this.event.trigger('onBtnSearchClick', {
              search: search
            });
          }
        };
      })(this));
      this.btn_return.click((function(_this) {
        return function() {
          return _this.event.trigger('onBtnReturnClick');
        };
      })(this));
      return this.mc_modelContainer.delegate('div', 'click', function() {
        if (this.id === '' || this.id === 'mc_modelTitle') {
          return;
        }
        return self.event.trigger('onBtnModelClick', {
          id: this.id
        });
      });
    };

    StreetsnapListView.prototype.removeListener = function() {
      this.btn_search.off('click');
      this.btn_return.off('click');
      return this.mc_modelContainer.undelegate('div', 'click');
    };

    return StreetsnapListView;

  })(vic.mvc.View);

}).call(this);
