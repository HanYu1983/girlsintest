class window.app.page.StreetsnapListController extends vic.mvc.Controller
	applyTemplate: ( [searchKey, modelType], callback ) ->
		
		configKey = 
			if modelType is 'models'
				'model'
			else if modelType is 'streetsnap'
				'street'
			else
				'product'
				
		filterTag = (tag) -> ([model, detail]) ->
			pattern = ///.?#{tag}.?///
			return detail.Tag.match pattern
		
		done = (config, models) ->	
			if searchKey?
				models = _.filter models, filterTag(searchKey)
			
			models = _.sortBy models, ([model, detail]) -> new Date(detail.Date).getTime()
			models.reverse()
			
			convertDTO = ([model, detail]) ->
				id: model
				name: detail.Caption
				date: detail.Date
				brand: detail.Brand
				imgStylePath: app.fn.serverImagePath "#{config[configKey]}/#{model}/image_2.jpg"
				imgSideAPath: app.fn.serverImagePath100 "#{config[configKey]}/#{model}/image_3.jpg"
				imgSideBPath: app.fn.serverImagePath100 "#{config[configKey]}/#{model}/image_4.jpg"
				imgSideCPath: app.fn.serverImagePath100 "#{config[configKey]}/#{model}/image_5.jpg"
			dto =
				searchWord:searchKey ? ""
				streetsnapList: _.map models, convertDTO
			callback dto
			
		configPath = "package/config.json"
		
		app.cache ?= {}
		getAllModel = app.fn.memorizeGetAllModel( app.cache )
		
		getAllModel( configPath ) (configKey)
			.done done
			.fail (err) ->
				alert err
			
	addListener: ->
		super()
		@_view.event.on 'onBtnSearchClick', ( evt, params ) => @event.trigger evt.type, params
		@_view.event.on 'onBtnModelClick', ( evt, params ) => @event.trigger evt.type, params
		@_view.event.on 'onBtnReturnClick', ( evt, params ) => @event.trigger evt.type, params
		
	removeListener: ->
		super()
		@_view.event.off 'onBtnSearchClick'
		@_view.event.off 'onBtnModelClick'
		@_view.event.off 'onBtnReturnClick'