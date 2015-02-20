class window.app.page.NewsController extends vic.mvc.Controller
	applyTemplate: ([ id ], callback)->
		
		id = 0
		
		fetchPackageConfig = (configPath) ->
			return $.ajax(path)
			
		fetchEventConfig = (config) ->
			return $.ajax(config.eventConfig+"/config.json")
			
		fetchDetail = (config) ->
			resourcePath = config.resource
			prefix = config.prefix
			count = config.count
			filepath = "#{resourcePath}/#{prefix}#{id}/config.json"
			promise = $.Deferred()
			$.ajax(filepath)
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
			imageurls = ("#{resourcePath}/#{prefix}#{id}/image_#{imageId-1}.png" for imageId in [1..detail.count])
			
			return {
				title: detail.title
				date: detail.date
				sideList: ({path: imageurl} for imageurl in imageurls)
				content: detail.content
				from: detail.from
			}
		done = (model) ->
			callback model
			
			
		host = window.location.host
		pathname = window.location.pathname.split('/').slice(1, window.location.pathname.split('/').length-1).join('/')
		configPath = "package/config.json"
		path = "http://#{host}/#{pathname}/#{configPath}"
		
		fetchPackageConfig()
			.pipe(fetchEventConfig)
			.pipe(fetchDetail)
			.pipe(convertFormat)
			.then done, (err) ->
				alert(err)