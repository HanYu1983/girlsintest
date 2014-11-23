var app = app || {};
app.view = app.view || {};

(function(){
	var pkg = app.view

	function v_streetSnapContent(elem){
		var iframe_3dIframe = elem.find( '#iframe_3dIframe' );
		var txt_title = elem.find( '#txt_title' );
		var txt_date = elem.find( '#txt_date' );
		var txt_proContent = elem.find( '#txt_proContent' );
		var txt_modelDetail = elem.find( '#txt_modelDetail' );
		var mc_photoContainer = elem.find( '#mc_photoContainer' );
		return {
			get3dIframe:function(){
				return iframe_3dIframe;
			},
			pushOneModelToList:function(){
				var imgquery = $("<img class='mc_photoSmallSide' src='images/streetSnap/test1.jpg'/>" );
				mc_photoContainer.append( imgquery );
			},
			setTitle:function( title ){
				txt_title.html( title );
			},
			setDate:function( date ){
				txt_date.html( date );
			},
			setJudge:function( judge ){
				txt_proContent.html( judge );
			},
			setModelDetail:function( detail ){
				txt_modelDetail.html( detail );
			},
			setIframeData:function( modelkey ){
				iframe_3dIframe.attr( 'src', 'https://sketchfab.com/models/' + modelkey + '/embed' );
			}
		}
	}
	
	pkg.v_streetSnapContent = v_streetSnapContent
})();