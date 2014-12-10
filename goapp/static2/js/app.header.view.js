var app = app || {};
app.header = app.header || {};
(function(){
	function view( elem ){
		var img_homeLogo = elem.find( '#img_homeLogo' );
		var img_streetSnapLogo = elem.find( '#img_streetSnapLogo' );
		return {
			showHome:function(){
				img_homeLogo.show();
				img_streetSnapLogo.hide();
			},
			showStreetSnap:function(){
				img_homeLogo.hide();
				img_streetSnapLogo.show();
			}
		}
	}
	
	app.header.view = view;
})();
