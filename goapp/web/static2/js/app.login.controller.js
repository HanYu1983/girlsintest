/**
 * ...
 * @author vic
 */
var app = app || {};
app.login = app.login || {};
(function() {
	function controller( view ){
		var event = $('<div></div>' );
		return {
			getEvent:function(){
				return event;
			},
			open:function(){
				view.open();
				view.getEvent().on( 'onBtnFacebookLoginClick', function(){
					vic.facebook.login( function( res ){
						var accessToken = res.accessToken;
						var userId = res.userID;
						event.trigger( 'onLoginSuccessEvent' );
					});
				});
				view.getEvent().on( 'onBtnLoginBackClick', function(){
					event.trigger( 'onLoginSuccessEvent' );
				});
			},
			close:function(){
				view.getEvent().off( 'onBtnFacebookLoginClick' );
				view.getEvent().off( 'onBtnLoginBackClick' );
				view.close();
			}
		}
	}
	
	app.login.controller = controller;
})();