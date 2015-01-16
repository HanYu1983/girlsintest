class window.app.page.StreetsnapListView extends vic.mvc.View
	constructor: ( elem ) ->
		super elem
		@input_search = elem.find '#input_search'
		@btn_search = elem.find '#btn_search'
		
	addListener: ->
		super()
		@btn_search.click =>
			search = @input_search.val()
			if search.length > 0 
				@event.trigger 'onBtnSearchClick', search:search
			
	removeListener: ->
		@btn_search.off 'click'