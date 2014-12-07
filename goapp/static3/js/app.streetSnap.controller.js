var app = app || {};
app.streetSnap = app.streetSnap || {};

(function(){
	function c_streetSnapContent(view){
		view.scope.openLoading();
		
		var query = app.api.partial( app.api.query, '../' );
		var pid = 0;
		var modelDatas;
		
		view.getEvent().on( 'onPhotoSmallSideClick', function( event, id ){
			pid = id;
			generateOneModel( modelDatas[pid] );
		});
		
		view.getEvent().on( 'onPhotoSmallClick', function( event, key ){
			view.scope.openLoading();
			loadModelMainPhoto( modelDatas[pid].Key, key, function( result ){
				view.scope.closeLoading();
				//if( result.length == 0 )	throw ( key + '並沒有所屬的相片' );
				if( result.length == 0 )	alert ( key + '並沒有所屬的相片' );
				view.scope.openBigPhoto( result[0].Base64Str );
			});
		});
		
		loadAllModelData( function( datas ){
			modelDatas = datas;
			generateModels( modelDatas ); 
			generateOneModel( modelDatas[pid] );
		});
		
		//讀取大頭貼
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
					loadModelMainPhoto( datas[i].Key, app.config.getTypeCode( app.config.MODEL_HEAD ), fatchData );
				}
			}
			
			function startToPush( retary ){
				for( var i = 0; i < retary.length; ++i ){
					view.pushOneModelToList( i, retary[i][0].Base64Str );
				}
			}
		}
		
		//顯示當前模特
		function generateOneModel( data ){
			view.scope.openLoading();
			
			var caption = data.Caption;
			var date = data.Date;
			var dateUnix = data.DateUnix;
			var desc = data.Description;
			var key = data.Key;
			var talk = data.Talk;
			var comment = data.Comment;
			var modelKey = data.ModelKey;
			view.clearData();
			view.setTitle( caption );
			view.setDate( dateUnix );
			view.setModelDetail( desc );
			view.setModelInvite( talk );
			view.setJudge( comment );
			view.setIframeData( modelKey, 0 );
			generateOneModelPhoto( key );
		}
		
		//產生當前模特的照片
		function generateOneModelPhoto( key ){
			loadModelPhotoById( key, function( datas ){
				datas.forEach( function( data ){
					switch( app.config.typeMapping[ data.Belong ] ){
						case app.config.MODEL_HEAD:
						case app.config.MODEL_STYLE:
							break;
						case app.config.MODEL_SIDE:
							view.pushOnePictureToList( data.Key, data.Base64Str );
							break;
						case app.config.MODEL_NORMAL:
							view.pushOnePictureToPhotoList( data.Key, data.Base64Str );
							break;
					}
				});
				view.scope.closeLoading();
			});
		}
		
		//讀取所有模特
		function loadAllModelData( callback ){
			$.when( query( app.api.QueryStreetModel,{} ) ).done( function(data){ 	
				if( data.Success )	callback( data.Info ); 
			} ).fail( function(err){ console.log(err) } );
		}
		
		//讀取模特的所有照片
		function loadModelPhotoById( key, callback ){
			$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key} ) )
					.done( function(data){ callback( data.Info ); } )
					.fail( function(err){ console.log(err) } );
		}
		
		//讀取指定所屬的照片
		function loadModelMainPhoto( key, belong, callback ){
			$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key, Belong:belong } ) )
					.done( function(data){ callback( data.Info ); } )
					.fail( function(err){ console.log(err) } );
		}
		
		//產生轉轉轉
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
		}
	}
	
	app.streetSnap.controller = c_streetSnapContent;
})()

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