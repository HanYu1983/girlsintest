var app = app || {};
app.streetSearch = app.streetSearch || {};

(function(){
	function view( elem ){
		var mc_modelTemplate = elem.find('#mc_modelTemplate' );
		var mc_modelContainer = elem.find( '#mc_modelContainer' );
		var ary_modelView = {};
		var event = $('<div></div>' );
		return {
			pushOneModel:function( data ){
				var newTemplate = mc_modelTemplate.clone();
				newTemplate.css( 'display', '' );
				newTemplate.attr( 'id', 'mc_modelBorder_' + data.Key );
				newTemplate.click( function(){
					var modelKey = this.id.substr( 'mc_modelBorder_'.length, this.id.length );
					event.trigger( 'onModelBorderClick', modelKey );
				});
				ary_modelView[data.Key] = newTemplate;
				mc_modelContainer.append( newTemplate );
			},
			pushOneModelMainPhoto:function( key, base64str ){
				var tostr = app.config.getFullBase64str( base64str );
				ary_modelView[key].find( '.mc_modelMainPhoto img' ).attr( 'src', tostr );
			},
			pushOneModelSubPhoto:function( key, ary_sub ){
				for( var i = 0; i < ary_sub.length; ++i ){
					var img = ary_modelView[key].find( '.mc_modelSubPhoto' + (i + 1) ).find('img');
					var base64str = app.config.getFullBase64str( ary_sub[i] );
					img.attr( 'src', base64str );
				}
			},
			pushOneModelDetail:function( key, name, unixtime ){
				var date = new Date( unixtime * 1000 );
				ary_modelView[key].find( '#txt_name' ).html( name );
				ary_modelView[key].find( '#txt_date' ).html( date.getFullYear() + '/' + date.getMonth() + '/' + date.getHours() );
			},
			getEvent:function(){
				return event;
			}
		}
	}
	
	app.streetSearch.view = view;
})();