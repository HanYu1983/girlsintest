var app = app || {};
app.streetSearch = app.streetSearch || {};

(function(){
	function controller(view, model){
		var pid = 0;
		
		view.getEvent().on( 'onModelBorderClick', function( e, modelKey ){
			window.location.href = '#/street/id=' + modelKey;
		});
		
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
						var mainPhoto;
						var subPhotos = [];
						_data.forEach( function( __data ){
							switch( app.config.typeMapping[ __data.Belong ] ){
								case app.config.MODEL_HEAD:
								case app.config.MODEL_NORMAL:
									break;
								case app.config.MODEL_STYLE:
									mainPhoto = __data.Base64Str;
									break;
								case app.config.MODEL_SIDE:
									subPhotos.push( __data.Base64Str );
									break;
							}
						});
						view.pushOneModelSubPhoto( key, subPhotos );
						view.pushOneModelMainPhoto( key, mainPhoto );
					}
				}( data.Key );
				view.pushOneModelDetail( data.Key, data.Caption, data.DateUnix );
				model.loadModelPhotoById( data.Key, fatchData )
			})
		}
		
		return {
		
		}
	}
	
	app.streetSearch.controller = controller;
})();