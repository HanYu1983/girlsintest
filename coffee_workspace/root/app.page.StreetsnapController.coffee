class window.app.page.StreetsnapController extends vic.mvc.Controller	
	addListener: ->
		super()
		@_view.event.on 'onImgHistoryClick', => @onImgHistoryClick arguments... 
		@_view.event.on 'onImgClick', => @onImgClick arguments...
		@_view.event.on 'onBtnMoreClick', => @onBtnMoreClick arguments...
		@_view.event.on 'onBtnShareClick', => @onBtnShareClick arguments...
		
	removeListener: ->
		super()
		@_view.event.off 'onImgHistoryClick'
		@_view.event.off 'onImgClick'
		@_view.event.off 'onBtnMoreClick'
		@_view.event.off 'onBtnShareClick'
		
	onImgHistoryClick: (evt, data) ->
		@event.trigger evt.type, data
		
	onImgClick: (evt, data) ->
		@event.trigger evt.type, data
	
	onBtnMoreClick: ( evt ) ->
		@event.trigger evt.type
		
	onBtnShareClick: ( evt, data ) ->
		@event.trigger evt.type, data
		
	applyTemplate: ([key, modelType], callback)->
		callback
			name: 'name'
			date: 'date'
			styleUrl: ''
			sideList: ''
			bottomList: ''
			modelDetail: ''
			talk: 'asdafd'
			protalk: 'dad'
			modelKey: ''
			key: ''