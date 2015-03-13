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
		
		configKey = 
			if modelType is 'models'
				'model'
			else if modelType is 'streetsnap'
				'street'
			else
				'product'
		
		done = (config, models) ->
			
			[key, detail] = _.filter( models, ([modelKey, detail]) -> modelKey is key )[0]
			
			models = _.sortBy models, ([model, detail]) -> new Date(detail.Date).getTime()
			models.reverse()
			
			convertHeadDTO = ([key, detail]) ->
				id: key
				url: app.fn.serverImagePath "#{config[configKey]}/#{key}/image_1.jpg"
			
			convertImageId2DTO = (ids) ->
				({id: basic, url: app.fn.serverImagePath basic} for basic in ("#{config[configKey]}/#{key}/image_#{id}.jpg" for id in ids))
			
			convertImageId2DTOForSize = (ids) ->
				({id: basic, url: app.fn.serverImagePath100 basic} for basic in ("#{config[configKey]}/#{key}/image_#{id}.jpg" for id in ids))
			
			dto = 
				historyList: _.map models, convertHeadDTO
				name: detail.Caption
				date: detail.Date
				styleUrl: app.fn.serverImagePath "#{config[configKey]}/#{key}/image_2.jpg"
				sideList: convertImageId2DTOForSize [3..5]
				bottomList: convertImageId2DTO([6..detail.ImageCount]) if detail.ImageCount > 5
				modelDetail: detail.Description
				talk: detail.Talk
				protalk: detail.Comment
				modelKey: detail.ModelKey
				key: key
			callback dto
			
		configPath = "config.json"
		
		app.cache ?= {}
		getAllModel = app.fn.memorizeGetAllModel( app.cache )
		
		getAllModel( configPath ) configKey
			.done done
			.fail (err) ->
				alert err