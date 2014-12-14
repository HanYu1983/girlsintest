var app = app || {};
app.streetSnap = app.streetSnap || {};
/*
cacheDatas = {
	original:��Ӫ���x���,
	{model-key}:{
		��Ӫ�����s�W�@��belong����
		belong{
			{belong-key}:[
			
			],
			{belong-key}:[
			
			]
		}
	},
	{model-key}:{
		��Ӫ�����s�W�@��belong����
		belong{
			{belong-key}:[
			
			],
			{belong-key}:[
			
			]
		}
	}
}
*/
(function(){
	function model(){
		var query = app.api.partial( app.api.query, '../' );
		var cacheDatas = undefined;
		var event = $('<div></div>' );
		return {
			//Ū���Ҧ��үS
			loadAllModelData:function( callback ){
				if( cacheDatas != undefined && cacheDatas.original != undefined ){
					callback( cacheDatas.original );
					return;
				}
				event.trigger( 'onOpenLoadingEvent' );
				$.when( query( app.api.QueryStreetModel,{} ) ).done( function(data){ 	
					if( data.Success ){
						cacheDatas = {};
						data.Info.forEach( function( _data ){
							cacheDatas[ _data.Key ] = _data;
						});
						cacheDatas.original = data.Info;
						event.trigger( 'onCloseLoadingEvent' );
						callback( cacheDatas.original ); 
					}
				} ).fail( function(err){ console.log(err) } );
			},
			//Ū���үS���Ҧ��Ӥ�
			loadModelPhotoById:function( key, callback ){
				if( cacheDatas[key] != undefined && cacheDatas[key].Photos != undefined ){
					callback( cacheDatas[key].Photos );
					return;
				}
				event.trigger( 'onOpenLoadingEvent' );
				$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key} ) )
						.done( function(data){ 
							cacheDatas[key].Photos = data.Info;
							callback( data.Info ); 
							event.trigger( 'onCloseLoadingEvent' );
						} )
						.fail( function(err){ console.log(err) } );
			},
			//Ū�����w���ݪ��Ӥ�
			loadModelMainPhoto:function( key, belong, callback ){
				if( cacheDatas[key] != undefined && 
					cacheDatas[key].belong != undefined && 
					cacheDatas[key].belong[belong] != undefined ){
					callback( cacheDatas[key].belong[belong] );
					return;
				} 
				event.trigger( 'onOpenLoadingEvent' );
				$.when( query( app.api.QueryPhotoWithStreetModel, {StreetModelKey:key, Belong:belong } ) )
						.done( function(data){ 
							if( cacheDatas[key].belong == undefined )	cacheDatas[key].belong = {};
							cacheDatas[key].belong[belong] = data.Info;
							callback( data.Info ); 
							event.trigger( 'onCloseLoadingEvent' );
						} )
						.fail( function(err){ console.log(err) } );
			},
			getModelDataByKey:function( key ){
				return cacheDatas[key];
			},
			getEvent:function(){
				return event;
			}
		}
	}
	
	app.streetSnap.model = model;
})();