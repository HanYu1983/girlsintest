// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.StreetsnapView = (function(_super) {
    __extends(StreetsnapView, _super);

    function StreetsnapView(elem) {
      StreetsnapView.__super__.constructor.call(this, elem);
      this.dataDTO = elem.__dataDTO__;
      this.mc_sideContainer = elem.find('#mc_sideContainer');
      this.mc_bottomContainer = elem.find('#mc_bottomContainer');
      this.mc_historyContainer = elem.find('#mc_historyContainer');
      this.img_stylePicture = elem.find('#img_stylePicture');
      this.btn_more = elem.find('#btn_more');
      this.btn_share = elem.find('#btn_share');

      /*
      		fbcon = elem.find '#fbcommentContainer'
      		fbcomment = ( $ '#fbcomment' ).clone true
      		fbcomment.attr 'data-href', window.location.href
      		fbcon.append fbcomment
       */
    }

    StreetsnapView.prototype.addListener = function() {
      var self;
      self = this;
      this.mc_sideContainer.delegate('img', 'click', function() {
        console.log('onImgClick', {
          id: this.id,
          key: self.dataDTO.key
        });
        return self.event.trigger('onImgClick', {
          id: this.id,
          key: self.dataDTO.key
        });
      });
      this.mc_bottomContainer.delegate('img', 'click', function() {
        console.log('onImgClick', {
          id: this.id,
          key: self.dataDTO.key
        });
        return self.event.trigger('onImgClick', {
          id: this.id,
          key: self.dataDTO.key
        });
      });
      this.mc_historyContainer.delegate('img', 'click', function() {
        console.log('onImgHistoryClick', {
          id: this.id,
          key: self.dataDTO.key
        });
        return self.event.trigger('onImgHistoryClick', {
          id: this.id,
          key: self.dataDTO.key
        });
      });
      this.btn_more.click(function() {
        console.log('onBtnMoreClick');
        return self.event.trigger('onBtnMoreClick');
      });
      return this.btn_share.click(function() {
        console.log('onBtnShareClick');
        return self.event.trigger('onBtnShareClick', {
          key: self.dataDTO.key
        });
      });
    };

    StreetsnapView.prototype.removeListener = function() {
      this.mc_sideContainer.undelegate('img', 'click');
      this.mc_bottomContainer.undelegate('img', 'click');
      this.mc_historyContainer.undelegate('img', 'click');
      this.btn_more.off('click');
      return this.btn_share.off('click');
    };

    return StreetsnapView;

  })(vic.mvc.View);

}).call(this);