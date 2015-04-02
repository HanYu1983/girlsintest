var app = app || {};
app.bigPhoto = app.bigPhoto || {};
(function(){
	function controller( view ){
		return {
			open:function( base64str ){
				view.open( base64str );
				this.addListener();
			},
			close:function(){
				view.close();
				this.removeListener();
			},
			addListener:function(){
				var self = this;
				view.getEvent().on( 'onCloseClick', function(){
					self.close();
				});
			},
			removeListener:function(){
				view.getEvent().off( 'onCloseClick' );
			}
		}
	}
	
	app.bigPhoto.controller = controller;
})();