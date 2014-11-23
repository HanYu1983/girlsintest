var app = app || {};
app.controller = app.controller || {};

(function(){
	var pkg = app.controller;

	function c_streetSnapContent(view){
		var query = app.api.partial( app.api.query, '../' );
		var pid = 0;
		
		loadAllModelData( function( datas ){
			generateModels(datas); 
			generateOneModel( datas[pid] );
		});
		
		function generateModels( datas ){
			datas.forEach( function( data ){
				console.log( data );
				//view.pushOneModelToList( data.Base64Str );
			} );
		}
		
		function generateOneModel( data ){
			var caption = data.Caption;
			var date = data.Date;
			var desc = data.Description;
			var key = data.Key;
			var talk = data.Talk;
			var comment = data.Comment;
			var modelKey = data.ModelKey;
			view.setTitle( caption );
			view.setDate( date );
			view.setModelDetail( desc );
			view.setModelInvite( talk );
			view.setJudge( comment );
			view.setIframeData( modelKey );
			generateOneModelPhoto( key );
		}
		
		function generateOneModelPhoto( key ){
			loadModelPhotoById( key, function( datas ){
				datas.forEach( function( data ){
					view.pushOnePictureToList( data.Base64Str );
					view.pushOnePictureToPhotoList( data.Base64Str );
				});
			});
		}

		function loadAllModelData( callback ){
			$.when( query( app.api.QueryStreetModel,{} ) ).done( function(data){ 	
				if( data.Success )	callback( data.Info ); 
			} ).fail( function(err){ console.log(err) } );
		}
		
		function loadModelPhotoById( key, callback ){
			$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key} ) )
					.done( function(data){ callback( data.Info ); } )
					.fail( function(err){ console.log(err) } );
		}
		//import sketchfab lib
		/*
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
		*/
	}
	
	pkg.c_streetSnapContent = c_streetSnapContent
})()