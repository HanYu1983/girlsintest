var app = app || {};
app.header = app.header || {};
(function(){
	function controller( view ){
		return {
			showHome:function(){
				view.showHome();
			},
			showStreetSnap:function(){
				view.showStreetSnap();
			}
		}
	}
	
	app.header.controller = controller;
})();