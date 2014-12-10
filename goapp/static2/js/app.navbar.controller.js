var app = app || {};
app.navbar = app.navbar || {};
(function(){
	function c_navbar( view ){
		var ary_btns = [
			view.getBtnCelebrity(),
			view.getBtnModel(),
			view.getBtnEvent(),
			view.getBtnStreetSnap(),
			view.getBtnNews()
		];
		
		var events = view.scope.events;
		events.on( 'jumpPageEvent', function( event, pageName ){
			_.map( ary_btns, function( btn ){ offQueryListener( btn ); });
			
			switch( pageName ){
				case 'index':
					btnNormalStatu( ary_btns[0] );
					btnNormalStatu( ary_btns[1] );
					btnNormalStatu( ary_btns[2] );
					btnNormalStatu( ary_btns[3] );
					btnNormalStatu( ary_btns[4] );
					break;
				case 'news':
					btnNormalStatu( ary_btns[0] );
					btnNormalStatu( ary_btns[1] );
					btnNormalStatu( ary_btns[2] );
					btnNormalStatu( ary_btns[3] );
					btnOverStatu( ary_btns[4] );
					break;
				case 'events':
					btnNormalStatu( ary_btns[0] );
					btnNormalStatu( ary_btns[1] );
					btnOverStatu( ary_btns[2] );
					btnNormalStatu( ary_btns[3] );
					btnNormalStatu( ary_btns[4] );
					break;
				case 'street':
					btnNormalStatu( ary_btns[0] );
					btnNormalStatu( ary_btns[1] );
					btnNormalStatu( ary_btns[2] );
					btnOverStatu( ary_btns[3] );
					btnNormalStatu( ary_btns[4] );
					break;
				case 'model':
					btnNormalStatu( ary_btns[0] );
					btnOverStatu( ary_btns[1] );
					btnNormalStatu( ary_btns[2] );
					btnNormalStatu( ary_btns[3] );
					btnNormalStatu( ary_btns[4] );
					break;
				case 'hot':
					btnOverStatu( ary_btns[0] );
					btnNormalStatu( ary_btns[1] );
					btnNormalStatu( ary_btns[2] );
					btnNormalStatu( ary_btns[3] );
					btnNormalStatu( ary_btns[4] );
			}
		});
		
		function btnNormalStatu( query ){
			query.find( '.navbarBtnOver' ).animate( {width:'0px'}, 300 );
			query.mouseover( onBtnMouseOver );
			query.mouseout( onBtnMouseOut );
			query.click( onBtnMouseClick );
			query.css( 'cursor', 'pointer' );
		}
		
		function btnOverStatu( query ){
			query.find( '.navbarBtnOver' ).css( 'width', '120px' );
			offQueryListener( query );
		}
		
		function offQueryListener( query ){
			query.off( 'mouseover' );
			query.off( 'mouseout' );
			query.off( 'click' );
			query.css( 'cursor', 'auto' );
		}
		
		function onBtnMouseOver(){
			var btnSelf = $( this );
			var btnOver = btnSelf.find( '.navbarBtnOver' );
			btnOver.animate( {width:'120px'}, 300 );
		}
		
		function onBtnMouseOut(){
			var btnSelf = $( this );
			var btnOver = btnSelf.find( '.navbarBtnOver' );
			btnOver.animate( {width:'0px'}, 300 );
		}
		
		function onBtnMouseClick(){
			var btnSelf = $( this );
			switch( btnSelf.attr( 'id' ) ){
				case ary_btns[0].attr( 'id' ):
					window.location.href = '#/hot';
					break;
				case ary_btns[1].attr( 'id' ):
					window.location.href = '#/model';
					break;
				case ary_btns[2].attr( 'id' ):
					window.location.href = '#/event';
					break;
				case ary_btns[3].attr( 'id' ):
					window.location.href = '#/street';
					break;
				case ary_btns[4].attr( 'id' ):
					window.location.href = '#/news';
					break;
			}
		}
	}
	app.navbar.controller = c_navbar;
})();