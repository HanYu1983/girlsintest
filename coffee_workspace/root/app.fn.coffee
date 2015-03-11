app.fn ?= {}
pkg = app.fn

serverImagePath = (path) ->
	filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
	return filepath path
			
serverImagePath100 = (path) ->
	filepath = app.tool.serverapi.filepathWithSize "http://#{window.location.host}", 100, 100
	return filepath path

fetchFile = (path) ->
	query = app.tool.serverapi.query "http://#{window.location.host}"
	return query app.tool.serverapi.ServeFile, FilePath: path

fetchModelKeyList = (path) ->
	promise = $.Deferred()
	fetchFile path
		.done (data) ->
			if data.Success
				promise.resolve (modelKey for modelKey in data.Info when modelKey isnt 'config.json')
			else
				promise.reject data.Info
		.fail (err) ->
				promise.reject err
	return promise
	
fetchAllModel = (path) -> (keys) ->
	promise = $.Deferred()
	$.when.apply($, (fetchFile("#{path}/#{key}/config.json") for key in keys))
		.done () ->
			details = arguments
			promise.resolve _.zip keys, details
		.fail (err) ->
			promise.reject err
	return promise
	
getAllModelBy = (configPath) -> (type) ->
	promise = $.Deferred()
	fetchFile configPath
		.done (config) ->
			pkgPath = config[type]
			fetchModelKeyList pkgPath
				.pipe fetchAllModel pkgPath
				.done (ret) -> 
					promise.resolve config, ret
				.fail (err) -> 
					promise.reject err
					
		.fail (err) ->
			promise.reject err
	return promise
	
memorizeGetAllModel = (cache) -> (configPath) -> (type) ->
	cacheKey = "#{configPath}/#{type}"
	promise = $.Deferred()
	if cache[cacheKey]?
		setTimeout ()->
			promise.resolve cache[cacheKey]
		,0
	else
		getAllModelBy( configPath ) ( type )
			.done (ret) ->
				promise.resolve ret
			.fail (err) ->
				promise.reject err
	return promise
	
pkg.getAllModelBy = getAllModelBy
pkg.serverImagePath = serverImagePath
pkg.serverImagePath100 = serverImagePath100