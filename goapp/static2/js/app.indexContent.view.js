var app = app || {};
app.indexContent = app.indexContent || {};
(function(){
	function v_indexContent(elem){
		var iframe_3dIframe = elem.find( '#iframe_3dIframe' );
		return {
			get3dIframe:function( src ){
				return iframe_3dIframe;
			}
		}
	}
	app.indexContent.view = v_indexContent;
})();

