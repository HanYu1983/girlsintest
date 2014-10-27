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
			btn.mouseover( onBtnMouseOver );
			btn.mouseout( onBtnMouseOut );
			btn.click( onBtnMouseClick );
		});
		console.log( 'addEventListener' );
		var events = view.scope.events;
		events.addEventListener( 'jumpPageEvent', function( event ){
			console.log( 'jumpPageEvent' );
			/*
			switch( event.getData() ){
				case 'street':
					btnNormalStatu( view.getBtnCelebrity() );
					btnOverStatu( view.getBtnStreetSnap() );
					break;
				case 'model':
					btnOverStatu( view.getBtnModel() );
					btnNormalStatu( view.getBtnCelebrity() );
					break;
				case 'hot':
					btnOverStatu( view.getBtnCelebrity() );
					btnNormalStatu( view.getBtnModel() );
			}*/
		});
		
		function btnNormalStatu( query ){
			console.log( 'normal' );
			query.find( '.navbarBtnOver' ).animate( {width:'0px'}, 300 );
			query.mouseover( onBtnMouseOver );
			query.mouseout( onBtnMouseOut );
			query.click( onBtnMouseClick );
			query.css( 'cursor', 'pointer' );
		}
		
		function btnOverStatu( query ){
			query.find( '.navbarBtnOver' ).css( 'width', '120px' );
			query.off( 'mouseover' );
			query.off( 'mouseout' );
			query.off( 'click' );
			query.css( 'cursor', '' );
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
			console.log( 'onBtnMouseClick' );
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
	app.controller.c_navbar = c_navbar;
})();