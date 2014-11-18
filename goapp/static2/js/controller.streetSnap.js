var app = app || {};
app.controller = app.controller || {};

(function(){
	var pkg = app.controller

	function c_streetSnapContent(view){
		
		
		//import sketchfab lib
		var sketchfabModule = window['sketchfab-iframe'];
		var Sketchfab = sketchfabModule.Sketchfab;
		
		var sid = 'bb79930ee30944378ec957dcc6bed42d';
		var iframe_3dIframe = view.get3dIframe();
		console.log( 'iframe_3dIframe', iframe_3dIframe);
		var options = {
			autospin:.3,
			ui_controls:0,
			ui_infos:0,
			nocamera: 1,
			autostart: 0,
			transparent: 0,
			controls: 0,
			watermark:0,
			desc_button:0,
			stop_button:0
		};
		
		var iframeApi = new Sketchfab( iframe_3dIframe[0] );
		sketchfabModule.Q.when( iframeApi.load( sid, options )).then( addListener ).fail( function( error ){
			alert( error );
		});
		
		function addListener( data ){
			//iframeApi.start();
		}
	}
	
	pkg.c_streetSnapContent = c_streetSnapContent
})()