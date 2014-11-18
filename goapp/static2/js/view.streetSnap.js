var app = app || {};
app.view = app.view || {};

(function(){
	var pkg = app.view

	function v_streetSnapContent(elem){
		var iframe_3dIframe = elem.find( '#iframe_3dIframe' );
		
		return {
			get3dIframe:function(){
				return iframe_3dIframe;
			}
		}
	}
	
	pkg.v_streetSnapContent = v_streetSnapContent
})();