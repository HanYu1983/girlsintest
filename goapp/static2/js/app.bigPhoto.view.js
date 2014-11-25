var app = app || {};
app.bigPhoto = app.bigPhoto || {};
(function(){
	function view( elem ){
		return {
			open:function( base64str ){
				elem.fadeIn( 500 );
			},
			close:function(){
				elem.fadeOut( 500 );
			}
		}
	}
	
	app.bigPhoto.view = view;
})();