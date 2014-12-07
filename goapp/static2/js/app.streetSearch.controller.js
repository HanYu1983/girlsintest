var app = app || {};
app.streetSearch = app.streetSearch || {};

(function(){
	function controller(view, model){
		model.loadAllModelData( function( datas ){
			console.log( datas );
		});
		
		return {
		
		}
	}
	
	app.streetSearch.controller = controller;
})();