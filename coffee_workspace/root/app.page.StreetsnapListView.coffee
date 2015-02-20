class window.app.page.StreetsnapListView extends vic.mvc.View
	constructor: ( elem ) ->
		super elem
		@input_search = elem.find '#input_search'
		@btn_search = elem.find '#btn_search'
		@btn_return = elem.find '#btn_return'
		@mc_modelContainer = elem.find '#mc_modelContainer'
		
	addListener: ->
		super()
		
		self = this
		@btn_search.click =>
			search = @input_search.val()
			if search.length > 0 
				@event.trigger 'onBtnSearchClick', search:search
				
		@btn_return.click =>
			@event.trigger 'onBtnReturnClick'
				
		@mc_modelContainer.delegate 'div', 'click', ->
			return if this.id == '' or this.id == 'mc_modelTitle'
			self.event.trigger 'onBtnModelClick', id:this.id
			
	removeListener: ->
		@btn_search.off 'click'
		@btn_return.off 'click'
		@mc_modelContainer.undelegate 'div', 'click'