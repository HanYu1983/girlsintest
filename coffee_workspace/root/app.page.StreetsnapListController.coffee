class window.app.page.StreetsnapListController extends vic.mvc.Controller
	applyTemplate: ( [searchKey, modelType], callback ) ->
		
		serverImagePath = (path) ->
			filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
			return filepath path
			
		fetchJSON = (configPath) ->
			query = app.tool.serverapi.query "http://#{window.location.host}"
			return query app.tool.serverapi.ServeFile, FilePath: configPath

		fetchPackageConfig = (configPath) ->
			return fetchJSON(configPath)
			
		fetchModelConfig = (config) ->
			return fetchJSON(config.model+"/config.json")
		
		fetchModelList = (config) ->
			promise = $.Deferred()
			fetchJSON(config.model)
				.done (data) ->
					if data.Success
						promise.resolve config, (modelKey for modelKey in data.Info when modelKey isnt 'config.json')
					else
						promise.reject data.Info
				.fail (err) ->
					promise.reject err
			return promise
			
		fetchModelDetail = (modelPath, modelKey) ->
			path = "#{modelPath}/#{modelKey}/config.json"
			return fetchJSON path
			
		fetchDetail = (config, modelList) ->
			promise = $.Deferred()
			ajaxs = (fetchModelDetail(config.model, modelKey) for modelKey in modelList)
			$.when.apply($, ajaxs)
				.done ()->
					promise.resolve config, modelList, arguments
				.fail (err)->
					promise.reject err
			return promise
		
		done = (config, modelList, modelDetails) ->
			models = _.zip( modelList, modelDetails )
			convertDTO = ([model, detail]) ->
				id: model
				name: detail.Caption
				date: detail.Date
				brand: detail.Brand
				imgStylePath: serverImagePath "#{config.model}/#{model}/image_1.jpg"
				imgSideAPath: serverImagePath "#{config.model}/#{model}/image_2.jpg"
				imgSideBPath: serverImagePath "#{config.model}/#{model}/image_3.jpg"
				imgSideCPath: serverImagePath "#{config.model}/#{model}/image_4.jpg"
			dto =
				searchWord:searchKey ? ""
				streetsnapList: _.map models, convertDTO
			callback dto
				
		
		configPath = "package/config.json"
		
		fetchPackageConfig( configPath )
			.pipe(fetchModelList)
			.pipe(fetchDetail)
			.then done, (err) ->
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