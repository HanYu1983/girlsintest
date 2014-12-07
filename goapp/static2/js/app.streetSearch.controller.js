var app = app || {};
app.streetSearch = app.streetSearch || {};

(function(){
	function controller(view, model){
		var pid = 0;
		model.loadAllModelData( function( datas ){
			datas.forEach( function( data ){
				view.pushOneModel( data );
			});
		});
		
		model.loadAllModelData( function( datas ){
			loadModelPhotoByPid( datas );
		});
		
		function loadModelPhotoByPid(datas ){
			datas.slice( pid, 6 ).forEach( function ( data ){
			
				var fatchData = function ( key ){
					return function( _data ){
						console.log( key, _data );
						_data.forEach( function( __data ){
							switch( app.config.typeMapping[ __data.Belong ] ){
								case app.config.MODEL_HEAD:
								case app.config.MODEL_STYLE:
									break;
								case app.config.MODEL_SIDE:
								//	view.pushOneModelMainPhoto( key, __data.Base64Str );
									break;
								case app.config.MODEL_NORMAL:
								//	view.pushOnePictureToPhotoList( __data.Key, __data.Base64Str );
									view.pushOneModelMainPhoto( key, __data.Base64Str );
									break;
							}
						});
						
					}
				}( data.Key );
				
				model.loadModelPhotoById( data.Key, fatchData )
			})
		}
		
		return {
		
		}
	}
	
	app.streetSearch.controller = controller;
})();