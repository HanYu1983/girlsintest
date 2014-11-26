var app = app || {};
app.streetSnap = app.streetSnap || {};

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
		var mc_upArrow = elem.find( '#mc_upArrow' );
		var mc_downArrow = elem.find( '#mc_downArrow' );
		var event = $('<div></div>' );
		return {
			get3dIframe:function(){
				return iframe_3dIframe;
			},
			showArrow:function( show ){
				if( show ){
					mc_upArrow.show();
					mc_downArrow.show();
				}else{
					mc_upArrow.hide();
					mc_downArrow.hide();
				}
			},
			//新增照片到模特大頭貼區
			pushOneModelToList:function( index, base64 ){
				var tostr = 'data:image/png;base64,' + base64;
				var imgquery = $("<img class='mc_photoSmallSide' id='mc_modelphoto_" + index + "' src='" + tostr + "'/>" );
				imgquery.click( function(){
					event.trigger( 'onPhotoSmallSideClick', this.id.substr( 'mc_modelphoto_'.length, this.id.length ));
				});
				mc_photoContainer.append( imgquery );
			},
			//新增照片到特寫區
			pushOnePictureToList:function( key, base64 ){
				if( mc_photoContainer2.children().length >= 3 )	return;
				var tostr = 'data:image/png;base64,' + base64;
				var imgquery = $("<img class='mc_photoSide' id='mc_photo_" + key + "' src='" + tostr + "'/>" );
				imgquery.click( function(){
					event.trigger( 'onPhotoSmallClick', this.id.substr( 'mc_photo_'.length, this.id.length ));
				});
				mc_photoContainer2.append( imgquery );
			},
			//新增照片到個人照片區
			pushOnePictureToPhotoList:function( key, base64 ){
				var tostr = 'data:image/png;base64,' + base64;
				var imgquery = $("<img class='mc_photo' id='mc_photo_" + key + "' src='" + tostr + "'/>" );
				imgquery.click( function(){
					event.trigger( 'onPhotoSmallClick', this.id.substr( 'mc_photo_'.length, this.id.length ));
				});
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
			setIframeData:function( modelkey, autostart ){
				iframe_3dIframe.attr( 'src', 'http://sketchfab.com/embed/' + modelkey + '?preload=1&autospin=0.3&ui_controls=0&ui_infos=0&nocamera=1&autostart=' + autostart + '&transparent=0&controls=0&watermark=0&desc_button=0&stop_button=0' );
			},
			clearData:function(){
				mc_photoContainer2.empty();
				mc_photoContainer3.empty();
			},
			getEvent:function(){
				return event;
			}	
		}
	}
	
	app.streetSnap.view = v_streetSnapContent;
})();