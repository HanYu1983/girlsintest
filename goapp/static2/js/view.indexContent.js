var app = app || {};
app.view = app.view || {};
(function(){
	var pkg = app.view
	function v_indexContent(elem){
		var btn_main = elem.find('#btn_main' );
		var iframeWindow = elem.find('#3diframe')[0];
		return {
			onBtnMainClick:function( fn ){
				btn_main.click( fn );
			},
			get3dIframe:function(){
				return iframeWindow;
			}
		}
	}
	pkg.v_indexContent = v_indexContent
})();

