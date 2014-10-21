var app = app || {};
app.view = app.view || {};

(function(){
	var pkg = app.view

	function v_streetSnapContent(elem){
		var iframe_modelA = elem.find('#iframe_modelA' );
		var iframe_modelB = elem.find('#iframe_modelB' );
		var iframe_modelC = elem.find('#iframe_modelC' );
		var mc_coverA = elem.find('#mc_coverA' );
		var mc_coverB = elem.find('#mc_coverB' );
		var mc_coverC = elem.find('#mc_coverC' );
		var mc_forOver = elem.find('#mc_forOver' );
		var mc_loading = elem.find('#mc_fakeloading' );
		return {
			getIframeASource:function( src ){
				return iframe_modelA;
			},
			getIframeBSource:function( src ){
				return iframe_modelB;
			},
			getIframeCSource:function( src ){
				return iframe_modelC;
			},
			getCoverA:function(){
				return mc_coverA;
			},
			getCoverB:function(){
				return mc_coverB;
			},
			getCoverC:function(){
				return mc_coverC;
			},
			getForOver:function(){
				return mc_forOver;
			},
			getLoading:function(){
				return mc_loading;
			}
		}
	}
	
	pkg.v_streetSnapContent = v_streetSnapContent
})()