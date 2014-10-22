var app = app || {};
app.controller = app.controller || {};

(function(){
	var pkg = app.controller

	function c_indexContent(view){
		var sketchfabModule = window['sketchfab-iframe'];
		var moduleVersion = sketchfabModule.version;
		var Sketchfab = sketchfabModule.Sketchfab;
		var Q = sketchfabModule.Q;
		var urlid = "bb79930ee30944378ec957dcc6bed42d";
		var iframeWindow = view.get3dIframe();
		var options = {
			autospin:.3,
			ui_controls:0,
			ui_infos:0,
			"nocamera": 1,
			"autostart": 1,
			"transparent": 0,
			"controls": 0,
			"watermark":0,
			"desc_button":0,
			"stop_button":0
		};

		var api = new Sketchfab(iframeWindow);
		Q.when(api.load(urlid, options)).then(function(data) {
			console.log( data );
			api.start();
		}).fail( function(error) {
			console.log( error );
		});
		
		view.onBtnMainClick( function(){
			window.location.href = 'hot.html';
		});
	}
	
	pkg.c_indexContent = c_indexContent
})()