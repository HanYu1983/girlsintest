var app = app || {};
app.navbar = app.navbar || {};
(function(){
	function v_navbar( elem ){
		var btn_nav_celebrity = elem.find( '#btn_nav_celebrity' );
		var btn_nav_model = elem.find( '#btn_nav_model' );
		var btn_nav_event = elem.find( '#btn_nav_event' );
		var btn_nav_streetSnap = elem.find( '#btn_nav_streetSnap' );
		var btn_nav_news = elem.find( '#btn_nav_news' );
		return {
			getBtnCelebrity:function(){
				return btn_nav_celebrity;
			},
			getBtnModel:function(){
				return btn_nav_model;
			},
			getBtnEvent:function(){
				return btn_nav_event;
			},
			getBtnStreetSnap:function(){
				return btn_nav_streetSnap;
			},
			getBtnNews:function(){
				return btn_nav_news;
			}
		}
	}
	app.navbar.view = v_navbar;
})();