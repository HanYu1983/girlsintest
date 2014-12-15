/**
 * ...
 * @author vic
 */
var app = app || {};
app.login = app.login || {};
(function() {
	function view( elem ){
		var mc_loginBackground = elem.find( '#mc_loginBackground' );
		var btn_facebookLogin = elem.find( '#btn_facebookLogin' );
		var btn_register = elem.find( '#btn_register' );
		var btn_login = elem.find( '#btn_login' );
		var event = $('<div></div>' );
		
		return {
			getEvent:function(){
				return event;
			},
			open:function(){
				elem.fadeIn( 400 );
				btn_facebookLogin.click( function(){
					event.trigger( 'onBtnFacebookLoginClick' );
				});
				btn_register.click( function(){
					event.trigger( 'onBtnRegisterClick' );
				});
				btn_login.click( function(){
					event.trigger( 'onBtnLoginClick' );
				});
				mc_loginBackground.click( function(){
					event.trigger( 'onBtnLoginBackClick' );
				});
			},
			close:function(){
				btn_facebookLogin.off( 'click' );
				btn_register.off( 'click' );
				btn_login.off( 'click' );
				mc_loginBackground.off( 'click' );
				elem.fadeOut( 400 );
			}
		}
	}

	app.login.view = view;
})();