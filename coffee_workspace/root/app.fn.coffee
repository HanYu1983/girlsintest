app.fn ?= {}
pkg = app.fn

###
serverImagePath = (path) ->
	filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
	return filepath path
			
serverImagePath100 = (path) ->
	filepath = app.tool.serverapi.filepathWithSize "http://#{window.location.host}", 100, 100
	return filepath path
###
serverImagePath = (path) ->
	host = "http://#{window.location.host}"
	"#{host}/#{path}"
			
serverImagePath100 = (path) ->
	host = "http://#{window.location.host}"
	"#{host}/#{path}?Width=100&Height=100"

fetchFile = (path) ->
	host = "http://#{window.location.host}"
	console.log("#{host}/#{path}")
	$.getJSON("#{host}/#{path}")

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
			fetchModelKeyList2 pkgPath
				.pipe fetchAllModel2 pkgPath
				.done (ret) -> 
					promise.resolve config, ret
				.fail (err) -> 
					promise.reject err
					
		.fail (err) ->
			promise.reject err
	return promise
	
memorizeGetAllModel = (cache, fn) -> (configPath) -> (type) ->
	cacheKey = "#{configPath}/#{type}"
	promise = $.Deferred()
	if cache[cacheKey]?
		setTimeout ()->
			promise.resolve.apply promise, cache[cacheKey]
		,0
	else
		getAllModelBy( configPath ) ( type )
			.done () ->
				cache[cacheKey] = arguments
				promise.resolve.apply promise, arguments
			.fail (err) ->
				promise.reject err
	return promise
	
pkg.getAllModelBy = getAllModelBy
pkg.serverImagePath = serverImagePath
pkg.serverImagePath100 = serverImagePath100
pkg.memorizeGetAllModel = memorizeGetAllModel


fetchModelKeyList2 = (path) ->
	promise = $.Deferred()
	fetchFile path
		.done (data) ->
			promise.resolve (modelKey for modelKey in data when modelKey isnt 'config.json')
		.fail (err) ->
			promise.reject err
	promise
	
fetchAllModel2 = (path) -> (keys) ->
	promise = $.Deferred()
	$.when.apply($, fetchFile("#{path}/#{key}/config.json") for key in keys )
		.done () ->
			if keys.length == 1
				# 如果輸入的ajax只有一個，則不會回傳array
				# 每一個ajax不知為何會回傳3個物件(result, "success", response)
				detail = arguments[0]
				promise.resolve [[keys[0], detail]]
			
			else
				# 每一個ajax不知為何會回傳3個物件(result, "success", response)
				details = _.map( arguments, ([detail, success, response]) -> detail )
				promise.resolve _.zip keys, details
				
		.fail (err) ->
			promise.reject err
	promise