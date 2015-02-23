class window.app.page.NewsController extends vic.mvc.Controller
	applyTemplate: ([ id ], callback)->
		
		that = this
		
		boundIndex = (id, count) ->
			id = (id ? count)
			if id < 1
				id = 1
			else if id > count
				id = count
			return id
			
		serverImagePath = (path) ->
			filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
			return filepath path

		fetchJSON = (configPath) ->
			query = app.tool.serverapi.query "http://#{window.location.host}"
			return query app.tool.serverapi.ServeFile, FilePath: configPath

		fetchPackageConfig = (configPath) ->
			return fetchJSON(configPath)
			
		fetchEventList = (config) ->
			promise = $.Deferred()
			fetchJSON(config.event)
				.done (data) ->
					if data.Success
						promise.resolve config, (key for key in data.Info when key isnt 'config.json')
					else
						promise.reject data.Info
				.fail (err) ->
					promise.reject err
			return promise
			
		fetchDetail = (config, list) ->
			count = list.length
			id = boundIndex id, count
			that.id = id
			that.count = count
			filepath = "#{config.event}/#{list[id-1]}/config.json"
			promise = $.Deferred()
			fetchJSON(filepath)
				.done (detail) ->
					promise.resolve(config, list, detail)
				.fail (err) ->
					promise.reject(err)
			return promise
			
		convertFormat = (config, list, detail) ->
			imageurls = ("#{config.event}/#{list[id-1]}/image_#{imageId}.png" for imageId in [1..detail.count])
			return {
				title: detail.title
				date: detail.date
				sideList: ({path: serverImagePath(imageurl)} for imageurl in imageurls)
				content: detail.content
				from: detail.from
			}
		done = (model) ->
			callback model
			
		configPath = "package/config.json"
		
		fetchPackageConfig( configPath )
			.pipe(fetchEventList)
			.pipe(fetchDetail)
			.pipe(convertFormat)
			.then done, (err) ->
				alert(err)
				
	addListener: ->
		super()
		@_view.event.on 'onBtnPrevClick', ( evt ) => 
			@id--
			if @id < 1
				@id = 1
			@event.trigger evt.type, id:@id
		@_view.event.on 'onBtnNextClick', ( evt ) => 
			@id++
			if @id > @count
				@id = @count
			@event.trigger evt.type, id:@id
		
	removeListener: ->
		super()
		@_view.event.off 'onBtnPrevClick'
		@_view.event.off 'onBtnNextClick'
