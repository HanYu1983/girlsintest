// Generated by CoffeeScript 1.8.0
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.app.page.StreetsnapView = (function(_super) {
    __extends(StreetsnapView, _super);

    function StreetsnapView(elem) {
      StreetsnapView.__super__.constructor.call(this, elem);
      this.mc_sideContainer = elem.find('#mc_sideContainer');
      this.mc_bottomContainer = elem.find('#mc_bottomContainer');
      this.mc_historyContainer = elem.find('#mc_historyContainer');
      this.img_stylePicture = elem.find('#img_stylePicture');
      this.btn_more = elem.find('#btn_more');
    }

    StreetsnapView.prototype.addListener = function() {
      var self;
      self = this;
      this.mc_sideContainer.delegate('img', 'click', function() {
        console.log('onImgClick', {
          id: this.id
        });
        return self.event.trigger('onImgClick', {
          id: this.id
        });
      });
      this.mc_bottomContainer.delegate('img', 'click', function() {
        console.log('onImgClick', {
          id: this.id
        });
        return self.event.trigger('onImgClick', {
          id: this.id
        });
      });
      this.mc_historyContainer.delegate('img', 'click', function() {
        console.log('onImgHistoryClick', {
          id: this.id
        });
        return self.event.trigger('onImgHistoryClick', {
          id: this.id
        });
      });
      this.img_stylePicture.click(function() {
        console.log('onImgClick', {
          id: this.id
        });
        return self.event.trigger('onImgClick', {
          id: this.id
        });
      });
      return this.btn_more.click(function() {
        console.log('onBtnMoreClick');
        return self.event.trigger('onBtnMoreClick');
      });
    };

    StreetsnapView.prototype.removeListener = function() {
      this.mc_sideContainer.undelegate('img', 'click');
      this.mc_bottomContainer.undelegate('img', 'click');
      this.mc_historyContainer.undelegate('img', 'click');
      this.img_stylePicture.off('click');
      return this.btn_more.off('click');
    };


    /*
    		@txt_name = elem.find '#txt_name'
    		@txt_date = elem.find '#txt_date'
    		@txt_proContent = elem.find '#txt_proContent'
    		@iframe_3dIframe = elem.find '#iframe_3dIframe'
    		@img_stylePicture = elem.find '#img_stylePicture'
    		@mc_sideContainer = elem.find '#mc_sideContainer'
    		@mc_bottomContainer = elem.find '#mc_bottomContainer'
    		@mc_sideContainer.empty()
    		@mc_bottomContainer.empty()
    		
    		@setName 'vic'
    		@setDate 'ddffffff'
    		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
    		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
    		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
    		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
    		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
    		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
    		
    	setName: ( name ) ->
    		@txt_name.html name
    	
    	setDate: ( date ) ->
    		@txt_date.html date
    		
    	setStylePicture: ( pid, base64 ) ->
    		@img_stylePicture.attr 'src', app.tool.getFullBase64str base64
    	
    	addSidePicture: ( pid, base64 ) ->
    		img = "<img id='" + pid + "' class='relative f_left' src='" + app.tool.getFullBase64str base64 + "'/>"
    		@mc_sideContainer.append img
    		
    	addBottomPicture: ( pid, base64 ) ->
    		img = "<img id='" + pid + "' class='relative f_left' src='" + app.tool.getFullBase64str base64 + "'/>"
    		@mc_bottomContainer.append img
     */

    return StreetsnapView;

  })(vic.mvc.View);

}).call(this);
