var app = app || {};
app.controller = app.controller || {};

(function(){
	function c_navbar( view ){
		var ary_btns = [
			view.getBtnCelebrity(),
			view.getBtnModel(),
			view.getBtnEvent(),
			view.getBtnStreetSnap(),
			view.getBtnNews()
		];
		
		_.map( ary_btns, function( btn ){
			btn.mouseover( function(){
				var btnSelf = $( this );
				var btnOver = btnSelf.find( '.navbarBtnOver' );
				btnOver.animate( {width:'120px'}, 300 );
			});
			btn.mouseout( function(){
				var btnSelf = $( this );
				var btnOver = btnSelf.find( '.navbarBtnOver' );
				btnOver.animate( {width:'0px'}, 300 );
			});
			
			btn.click( function(){
				var btnSelf = $( this );
				switch( btnSelf.attr( 'id' ) ){
					case ary_btns[0].attr( 'id' ):
						window.location.href = '#hot';
						break;
					case ary_btns[1].attr( 'id' ):
						window.location.href = '#model';
						break;
					case ary_btns[2].attr( 'id' ):
						window.location.href = '#event';
						break;
					case ary_btns[3].attr( 'id' ):
						window.location.href = '#street';
						break;
					case ary_btns[4].attr( 'id' ):
						window.location.href = '#news';
						break;
				}
			});
		});
	}
	app.controller.c_navbar = c_navbar;
})();