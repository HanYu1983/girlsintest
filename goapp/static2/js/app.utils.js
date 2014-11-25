var app = app || {};
app.utils = app.utils || {};
(function(){
	function generateIframeApi( id, mc_forOver, width, height ){
		//import sketchfab lib
		var sketchfabModule = window['sketchfab-iframe'];
		var Sketchfab = sketchfabModule.Sketchfab;
		//local test
		
		var mc_iframeRoot = $("<div></div>" );
		var mc_iframeContainer = $(	"<div class='mc_iframeContainer'></div>" );
		var iframe_model = $( "<iframe id='iframe_model' width='" + width + "px' height='" + height + "px'></iframe>" );
		var mc_cover = $("<div id='mc_cover' class='mc_cover'></div>");
		mc_iframeContainer.append( iframe_model ).append( mc_cover );
		mc_iframeRoot.append( mc_iframeContainer );
		
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
		
		var api = new Sketchfab( iframe_model[0] );
		sketchfabModule.Q.when( api.load( id, options )).then( addListener ).fail( function( error ){
			alert( error );
		});
		
		function addListener( data ){
		/*
			console.log( 'addListener' );
			//mc_loading.fadeOut( 500 );
			mc_cover.mouseover( function(){
				console.log( 'ddvv' );
				mc_cover.hide();
				//mc_cover.fadeOut( 500 );
				api.start();
				mc_forOver.mouseover( function(){
					mc_forOver.off( 'mouseover' );
					mc_cover.show();
					//mc_cover.fadeIn( 500 );
					api.stop();
				});
			});*/
		}
		
		return mc_iframeRoot;
		/*
		<div id='mc_forOver' class='mc_forOver'></div>
		<div class='outline mc_iframeContainer mc_iframeContainerA'>
			<iframe id='iframe_modelA' width='200px' height='200px'></iframe>
			<div id='mc_coverA' class='mc_cover'></div>
		</div>
		
		var ary_urlids = [ 'bb79930ee30944378ec957dcc6bed42d', 'bb79930ee30944378ec957dcc6bed42d', 'bb79930ee30944378ec957dcc6bed42d' ];
		var ary_iframes = [
			view.getIframeASource(),
			view.getIframeBSource(),
			view.getIframeCSource()
		];
		var ary_cover = [
			view.getCoverA(),
			view.getCoverB(),
			view.getCoverC()
		];
		var ary_api = [];
		var mc_forOver = view.getForOver();
		var mc_loading = view.getLoading();
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
		
		for( var i = 0; i < ary_urlids.length; ++i ){
			var api = new Sketchfab( ary_iframes[i][0] );
			sketchfabModule.Q.when( api.load( ary_urlids[i], options )).then( addListener ).fail( function( error ){
				alert( error );
			});
			ary_api.push( api );
		}
		
		var completeCount = 0;
		function addListener( data ){
			completeCount++;
			if( completeCount < 3 )	return;
			mc_loading.fadeOut( 500 );
			for( var i = 0; i < ary_cover.length; ++i ){
				ary_cover[i].mouseover( function(){
					var cover = $( this );
					var api;
					cover.fadeOut( 500 );
					switch( cover.attr( 'id' )){
						case 'mc_coverA':	api = ary_api[0];break;
						case 'mc_coverB':	api = ary_api[1];break;
						case 'mc_coverC':	api = ary_api[2];break;
					}
					api.start();
					mc_forOver.mouseover( function(){
						mc_forOver.off( 'mouseover' );
						for( var k in ary_cover )	ary_cover[k].fadeIn( 500 );
						api.stop();
					});
				});
			}
		}
		*/
	}
	
	app.utils.generateIframeApi = generateIframeApi;
})();