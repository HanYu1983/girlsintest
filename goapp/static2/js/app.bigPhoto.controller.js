var app = app || {};
app.bigPhoto = app.bigPhoto || {};
(function(){
	function controller( view ){
		return {
			open:function( base64str ){
				view.open( base64str );
			},
			close:function(){
				view.close();
			}
		}
	}
	
	app.bigPhoto.controller = controller;
})();