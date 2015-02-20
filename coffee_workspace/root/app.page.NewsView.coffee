class window.app.page.NewsView extends window.vic.mvc.View
	constructor: ( elem ) ->
		super( elem )
		@btn_prev = elem.find '#btn_prev'
		@btn_next = elem.find '#btn_next'
		
	addListener: ->
		@btn_prev.click => @event.trigger 'onBtnPrevClick'
		@btn_next.click => @event.trigger 'onBtnNextClick'
		
	removeListener: ->
		@btn_prev.off 'click'
		@btn_next.off 'click'