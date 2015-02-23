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
		
		serverImagePath = (path) ->
			filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
			return filepath path
			
		fetchJSON = (configPath) ->
			query = app.tool.serverapi.query "http://#{window.location.host}"
			return query app.tool.serverapi.ServeFile, FilePath: configPath
		
		fetchPackageConfig = (configPath) ->
			return fetchJSON(configPath)
			
		fetchModelDetail = (config) ->
			path = "#{config.model}/#{key}/config.json"
			return fetchJSON path
			
		fetchModelList = (config) ->
			promise = $.Deferred()
			fetchJSON(config.model)
				.done (data) ->
					if data.Success
						promise.resolve (modelKey for modelKey in data.Info when modelKey isnt 'config.json')
					else
						promise.reject data.Info
				.fail (err) ->
					promise.reject err
			return promise
			
		fetchAllModelKeyAndModelDetail = (config) ->
			return $.when config, fetchModelDetail(config), fetchModelList(config)
		
		done = (config, detail, list) ->
			convertHeadDTO = (key) ->
				id: key
				url: serverImagePath "#{config.model}/#{key}/image_1.jpg"
			
			convertImageId2DTO = (ids) ->
				({id: key, url: url} for url in (serverImagePath "#{config.model}/#{key}/image_#{id}.jpg" for id in ids))
			
			dto = 
				historyList: _.map list, convertHeadDTO
				name: detail.Caption
				date: detail.Date
				styleUrl: serverImagePath "#{config.model}/#{key}/image_2.jpg"
				sideList: convertImageId2DTO [3..5]
				bottomList: convertImageId2DTO([6..detail.ImageCount]) if detail.ImageCount > 5
				modelDetail: detail.Description
				talk: detail.Talk
				protalk: detail.Comment
				modelKey: detail.ModelKey
				key: key
			callback dto
		
		configPath = "package/config.json"
		
		fetchPackageConfig( configPath )
			.pipe(fetchAllModelKeyAndModelDetail)
			.then done, (err) ->
				alert err