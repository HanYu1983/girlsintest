var app = app || {};
app.controller = app.controller || {};

(function(){
	var pkg = app.controller

	function c_indexContent(view){
		//import sketchfab lib
		var sketchfabModule = window['sketchfab-iframe'];
		var Sketchfab = sketchfabModule.Sketchfab;
		//local test
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
			mc_loading.fadeOut( 300 );
			for( var i = 0; i < ary_cover.length; ++i ){
				ary_cover[i].mouseover( function(){
					var cover = $( this );
					var api;
					cover.fadeOut( 300 );
					switch( cover.attr( 'id' )){
						case 'mc_coverA':	api = ary_api[0];break;
						case 'mc_coverB':	api = ary_api[1];break;
						case 'mc_coverC':	api = ary_api[2];break;
					}
					//api.start();
					mc_forOver.mouseover( function(){
						mc_forOver.off( 'mouseover' );
						for( var k in ary_cover )	ary_cover[k].fadeIn( 500 );
						//api.stop();
					});
				});
			}
		}
	}
	
	/*
	function c_indexContent(view){
	
		var mc_iframeCon = view.getIframeContainer();
		var mc_forOver = view.getMcForOver();
		var mca = app.utils.generateIframeApi('bb79930ee30944378ec957dcc6bed42d', mc_forOver, 200, 230);
		mca.addClass( 'mc_iframeFloat' );
		
		mcb = app.utils.generateIframeApi('bb79930ee30944378ec957dcc6bed42d', mc_forOver, 200, 230);
		mcb.addClass( 'mc_iframeFloat' );
		
		mcc = app.utils.generateIframeApi('bb79930ee30944378ec957dcc6bed42d', mc_forOver, 200, 230);
		mcc.addClass( 'mc_iframeFloat' );
		
		mc_iframeCon.append( mca );
		mc_iframeCon.append( mcb );
		mc_iframeCon.append( mcc );
	}
	*/
	pkg.c_indexContent = c_indexContent
})()