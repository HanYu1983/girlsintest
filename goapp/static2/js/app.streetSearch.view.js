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
				console.log( key );
				var image = $( '<img/>' );
				var tostr = 'data:image/png;base64,' + base64str;
				image.attr( 'src', tostr );
				ary_modelView[key].find( '.mc_modelMainPhoto' ).append( image );
			},
			pushOneModelSubPhoto:function(){
			
			}
		}
	}
	
	app.streetSearch.view = view;
})();