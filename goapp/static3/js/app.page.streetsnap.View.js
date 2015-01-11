// Generated by CoffeeScript 1.8.0
(function() {
  var _base,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_base = window.app.page).streetsnap == null) {
    _base.streetsnap = {};
  }

  window.app.page.streetsnap.View = (function(_super) {
    __extends(View, _super);

    function View(elem) {
      View.__super__.constructor.call(this, elem);
      this.txt_name = elem.find('#txt_name');
      this.txt_date = elem.find('#txt_date');
      this.txt_proContent = elem.find('#txt_proContent');
      this.iframe_3dIframe = elem.find('#iframe_3dIframe');
      this.img_stylePicture = elem.find('#img_stylePicture');
      this.mc_sideContainer = elem.find('#mc_sideContainer');
      this.mc_bottomContainer = elem.find('#mc_bottomContainer');
      this.mc_sideContainer.empty();
      this.mc_bottomContainer.empty();
      this.setName('vic');
      this.setDate('ddffffff');
      this.addSidePicture('aaxx', 'images/streetSnap/test1.jpg');
      this.addSidePicture('aaxx', 'images/streetSnap/test1.jpg');
      this.addSidePicture('aaxx', 'images/streetSnap/test1.jpg');
      this.addBottomPicture('aaxx', 'images/streetSnap/test1.jpg');
      this.addBottomPicture('aaxx', 'images/streetSnap/test1.jpg');
      this.addBottomPicture('aaxx', 'images/streetSnap/test1.jpg');
    }

    View.prototype.setName = function(name) {
      return this.txt_name.html(name);
    };

    View.prototype.setDate = function(date) {
      return this.txt_date.html(date);
    };

    View.prototype.setStylePicture = function(pid, base64) {
      return this.img_stylePicture.attr('src', base64);
    };

    View.prototype.addSidePicture = function(pid, base64) {
      var img;
      img = "<img id='" + pid + "' class='relative f_left' src='" + base64 + "'/>";
      return this.mc_sideContainer.append(img);
    };

    View.prototype.addBottomPicture = function(pid, base64) {
      var img;
      img = "<img id='" + pid + "' class='relative f_left' src='" + base64 + "'/>";
      return this.mc_bottomContainer.append(img);
    };

    return View;

  })(vic.mvc.View);

}).call(this);
