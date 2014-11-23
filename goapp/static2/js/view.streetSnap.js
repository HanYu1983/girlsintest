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
		var txt_modelInvite = elem.find( '#txt_modelInvite' );
		var mc_photoContainer = elem.find( '#mc_photoContainer' );
		var mc_photoContainer2 = elem.find( '#mc_photoContainer2' );
		var mc_photoContainer3 = elem.find( '#mc_photoContainer3' );
		return {
			get3dIframe:function(){
				return iframe_3dIframe;
			},
			pushOneModelToList:function(){
				var imgquery = $("<img class='mc_photoSmallSide' src='images/streetSnap/test1.jpg'/>" );
				mc_photoContainer.append( imgquery );
			},
			pushOnePictureToList:function( base64 ){
				if( mc_photoContainer2.children().length >= 3 )	return;
				var tostr = 'data:image/png;base64,' + base64;
				var imgquery = $("<img class='mc_photoSide' src='" + tostr + "'/>" );
				mc_photoContainer2.append( imgquery );
			},
			pushOnePictureToPhotoList:function( base64 ){
				var tostr = 'data:image/png;base64,' + base64;
				var imgquery = $("<img class='mc_photo' src='" + tostr + "'/>" );
				mc_photoContainer3.append( imgquery );
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
			setModelInvite:function( invite ){
				txt_modelInvite.html( invite );
			},
			setIframeData:function( modelkey ){
				iframe_3dIframe.attr( 'src', 'https://sketchfab.com/models/' + modelkey + '/embed' );
			}
		}
	}
	
	pkg.v_streetSnapContent = v_streetSnapContent
})();