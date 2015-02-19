var app = app || {};
app.indexContent = app.indexContent || {};
(function(){
	function v_indexContent(elem){
		var iframe_3dIframe = elem.find( '#iframe_3dIframe' );
		return {
			get3dIframe:function( src ){
				return iframe_3dIframe;
			},
			setIframeData:function( modelkey, autostart ){
				iframe_3dIframe.attr( 'src', 'http://sketchfab.com/embed/' + modelkey + '?preload=1&autospin=0.3&ui_controls=0&ui_infos=0&nocamera=1&autostart=' + autostart + '&transparent=0&controls=0&watermark=0&desc_button=0&stop_button=0' );
			},
		}
	}
	app.indexContent.view = v_indexContent;
})();

