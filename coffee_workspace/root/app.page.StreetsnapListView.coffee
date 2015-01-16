class window.app.page.StreetsnapListView extends vic.mvc.View
	constructor: ( elem ) ->
		super elem
		@input_search = elem.find $ '#input_search'
		@btn_search = elem.find $ '#btn_search'
		console.log @btn_search
		console.log @input_search
	addListener: ->
		@btn_search.click =>
			searchvalue = @input_search.val()
			if searchvalue.length > 0 then @event.trigger 'onBtnSearchClick', search:searchvalue
			
	removeListener: ->
		@btn_search.off 'click'