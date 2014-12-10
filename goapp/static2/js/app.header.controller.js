var app = app || {};
app.header = app.header || {};
(function(){
	function controller( view, scope ){
		var events = scope.events;
		console.log( 'scope', scope );
		console.log( 'events', events );
		events.on( 'jumpPageEvent', function( e, pageName ){
			console.log( e );
			switch( pageName ){
				case 'index':
					view.showHome();
					break;
				case 'street':
					view.showStreetSnap();
					break;
			}
		});
	}
	
	app.header.controller = controller;
})();