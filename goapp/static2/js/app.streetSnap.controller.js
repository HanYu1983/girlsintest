var app = app || {};
app.streetSnap = app.streetSnap || {};

(function(){
	function c_streetSnapContent(view, model, scope ){
		var pid = 0;
		var modelDatas;
		
		var isSearchModel = scope.params != null;
		var keyFromHash = undefined;
		if( isSearchModel )	keyFromHash = scope.params.key;
		
		model.getEvent().on( 'onOpenLoadingEvent', function(){
			scope.openLoading();
		});
		
		model.getEvent().on( 'onCloseLoadingEvent', function(){
			scope.closeLoading();
		});
		
		view.getEvent().on( 'onPhotoSmallSideClick', function( event, id ){
			pid = id;
			window.location.href = '#/street/id=' + modelDatas[pid].Key;
			//generateOneModel( modelDatas[pid] );
		});
		
		view.getEvent().on( 'onPhotoSmallClick', function( event, key ){
			model.loadModelMainPhoto( modelDatas[pid].Key, key, function( result ){
				if( result.length == 0 )	alert ( key + '並沒有所屬的相片' );
				scope.openBigPhoto( result[0].Base64Str );
			});
		});
		
		view.getEvent().on( 'onBtnMoreClick', function(){
			window.location.href = '#/street/search';
		});
		
		model.loadAllModelData( function( datas ){
			modelDatas = datas;
			generateModels( modelDatas ); 
			if( keyFromHash != undefined )	generateOneModel( model.getModelDataByKey( keyFromHash ) );
			else 	generateOneModel( modelDatas[pid] );
		});
		
		view.showArrow( true );
		
		//讀取大頭貼
		function generateModels( datas ){
			//if( datas.length > 6 )	view.showArrow( true );
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
					model.loadModelMainPhoto( datas[i].Key, app.config.getTypeCode( app.config.MODEL_HEAD ), fatchData );
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
			view.clearData();
			view.setTitle( data.Caption );
			view.setDate( data.DateUnix );
			view.setModelDetail( data.Description );
			view.setModelInvite( data.Talk );
			view.setJudge( data.Comment );
			view.setIframeData( data.ModelKey, 0 );
			generateOneModelPhoto( data.Key );
		}
		
		//產生當前模特的照片
		function generateOneModelPhoto( key ){
			model.loadModelPhotoById( key, function( datas ){
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
			});
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