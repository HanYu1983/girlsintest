var app = app || {};
app.streetSearch = app.streetSearch || {};

(function(){
	function view( elem ){
		var mc_modelTemplate = elem.find('#mc_modelTemplate' );
		var mc_modelContainer = elem.find( '#mc_modelContainer' );
		var ary_modelView = {};
		return {
			pushOneModel:function( data ){
				var newTemplate = mc_modelTemplate.clone();
				newTemplate.css( 'display', '' );
				ary_modelView[data.Key] = newTemplate;
				mc_modelContainer.append( newTemplate );
			},
			pushOneModelMainPhoto:function( key, base64str ){
				var tostr = 'data:image/png;base64,' + base64str;
				ary_modelView[key].find( '.mc_modelMainPhoto img' ).attr( 'src', tostr );
			},
			pushOneModelSubPhoto:function( key, ary_sub ){
				for( var i = 0; i < ary_sub.length; ++i ){
					var img = ary_modelView[key].find( '.mc_modelSubPhoto' + (i + 1) ).find('img');
					var base64str = 'data:image/png;base64,' + ary_sub[i];
					img.attr( 'src', base64str );
				}
			}
		}
	}
	
	app.streetSearch.view = view;
})();