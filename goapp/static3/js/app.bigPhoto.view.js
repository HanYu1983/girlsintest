var app = app || {};
app.bigPhoto = app.bigPhoto || {};
(function(){
	function view( elem ){
		var img_photo = elem.find( '#img_photo' );
		var event = $('<div></div>' );
		return {
			open:function( base64str ){
				elem.fadeIn( 300 );
				this.addListener();
				img_photo.attr( 'src', 'data:image/png;base64,' + base64str );
			},
			close:function(){
				elem.fadeOut( 300 );
				this.removeListener();
			},
			addListener:function(){
				elem.on( 'click', function(){
					event.trigger( 'onCloseClick' );
				});
			},
			removeListener:function(){
				elem.off( 'click' );
			},
			getEvent:function(){
				return event;
			}
		}
	}
	
	app.bigPhoto.view = view;
})();