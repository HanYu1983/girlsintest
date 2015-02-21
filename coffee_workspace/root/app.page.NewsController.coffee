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
			
		fetchEventConfig = (config) ->
			return fetchJSON(config.eventConfig+"/config.json")
			
		fetchDetail = (config) ->
			resourcePath = config.resource
			prefix = config.prefix
			count = config.count
			id = boundIndex id, count
			that.id = id
			that.count = count
			filepath = "#{resourcePath}/#{prefix}#{id}/config.json"
			promise = $.Deferred()
			fetchJSON(filepath)
				.done (detail) ->
					promise.resolve(config, detail)
				.fail (err) ->
					promise.reject(err)
			return promise
			
		convertFormat = (config, detail) ->
			resourcePath = config.resource
			prefix = config.prefix
			count = config.count
			folderpath = "#{resourcePath}/#{prefix}#{id}"
			imageurls = ("#{resourcePath}/#{prefix}#{id}/image_#{imageId}.png" for imageId in [1..detail.count])
			return {
				title: detail.title
				date: detail.date
				sideList: ({path: serverImagePath(imageurl)} for imageurl in imageurls)
				content: detail.content
				from: detail.from
			}
		done = (model) ->
			callback model
			
			
		host = window.location.host
		pathname = window.location.pathname.split('/').slice(1, window.location.pathname.split('/').length-1).join('/')
		configPath = "package/config.json"
		path = "http://#{host}/#{pathname}/#{configPath}"
		
		fetchPackageConfig( configPath )
			.pipe(fetchEventConfig)
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
