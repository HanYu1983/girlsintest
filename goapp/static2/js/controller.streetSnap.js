var app = app || {};
app.controller = app.controller || {};

(function(){
	var pkg = app.controller;

	function c_streetSnapContent(view){
		var query = app.api.partial( app.api.query, '../' );
		var pid = 0;
		var modelDatas;
		
		view.getEvent().on( 'onPhotoSmallSideClick', function( event, id ){
			pid = id;
			generateOneModel( modelDatas[pid] );
		});
		
		loadAllModelData( function( datas ){
			modelDatas = datas;
			generateModels( modelDatas ); 
			generateOneModel( modelDatas[pid] );
		});
		
		function generateModels( datas ){
			if( datas.length > 6 )	view.showArrow( true );
			getPhotosByEveryModelAndThen( startToPush );
			
			//要按照順序把圖片load下來
			function getPhotosByEveryModelAndThen( callback ){
				var count = 0;
				var retary = [];
				for( var i = 0; i < datas.length; ++i ){
					var fatchData = (function(idx){
						return function( _data ){
							retary[idx] = _data;
							if( ++count >= datas.length )	callback( retary );
						}
					})( i );
					loadModelMainPhoto( datas[i].Key, fatchData );
				}
			}
			
			function startToPush( retary ){
				for( var i = 0; i < retary.length; ++i ){
					view.pushOneModelToList( i, retary[i][0].Base64Str );
				}
			}
		}
		
		/*
		function cache( data, fn ){
			return function(){
				var key = arguments[0]
				if data[key]
					return data[key]
				fn.apply( null, arguments )
			}
		}
		
		function getPhoto( key, url ){
			//call back
		}
		
		getPhoto = cache( {}, getPhoto )
		getPhoto();
		*/
		/*
		function getPhoto( key, url ){
			return cache( key, url )
		}
		var datas;
		
		function cache( url ){
			if( datas[key] )	return datas[key];
			
		}
		*/
		function generateOneModel( data ){
			
			var caption = data.Caption;
			var date = data.Date;
			var desc = data.Description;
			var key = data.Key;
			var talk = data.Talk;
			var comment = data.Comment;
			var modelKey = data.ModelKey;
			view.clearData();
			view.setTitle( caption );
			view.setDate( date );
			view.setModelDetail( desc );
			view.setModelInvite( talk );
			view.setJudge( comment );
			
			//for dynamic iframe
			//setSketchfab( modelKey );
			//for static iframe
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
		
		function loadModelMainPhoto( key, callback ){
			$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key, Belong:0 } ) )
					.done( function(data){ callback( data.Info ); } )
					.fail( function(err){ console.log(err) } );
		}
		
		function setSketchfab( sid ){
			var sketchfabModule = window['sketchfab-iframe'];
			var Sketchfab = sketchfabModule.Sketchfab;
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
			sketchfabModule.Q.when( iframeApi.load( sid, options )).fail( function( error ){
				alert( error );
			});
			/*
			function addListener( data ){
				iframeApi.start();
			}*/
		}
	}
	
	pkg.c_streetSnapContent = c_streetSnapContent
})()