var app = app || {};
app.indexContent = app.indexContent || {};
(function(){
	function c_indexContent(view){
		view.setIframeData( 'bb79930ee30944378ec957dcc6bed42d' );
		
		/*
		var sketchfabModule = window['sketchfab-iframe'];
		var Sketchfab = sketchfabModule.Sketchfab;
		var sid = 'bb79930ee30944378ec957dcc6bed42d';
		var iframe_3dIframe = view.get3dIframe();
		
		var options = {
			autospin:.3,
			ui_controls:0,
			ui_infos:0,
			nocamera: 1,
			autostart: 1,
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
			view.scope.closeLoading();
		}
		*/
	}
	
	app.indexContent.controller = c_indexContent;
})()