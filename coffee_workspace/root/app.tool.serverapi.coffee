app.tool ?= {}
app.tool.serverapi ?= {}

pkg = app.tool.serverapi
apipath = 'goapp/Func'
	
pkg.QueryStreetModel = 'QueryStreetModel'
pkg.CreateStreetModel = 'UpdateStreetModel'
pkg.UpdateStreetModel = 'UpdateStreetModel'
pkg.AddPhotoToStreetModel = 'AddPhotoToStreetModel'
pkg.QueryPhotoWithStreetModel = 'QueryPhotoWithStreetModel'
pkg.DeletePhotoWithStreetModel = 'DeletePhotoWithStreetModel'
pkg.ServeFile = 'ServeFile'

filepath = ( host ) -> (path) ->
	return host+"/"+apipath+"?cmd=ServeFile&FilePath="+path
	
query = ( host ) -> ( cmd, data ) ->
	data.cmd = cmd
	promise = jQuery.Deferred()
	option = 
		if cmd is pkg.ServeFile
			data: data,
			type: 'get'
		else
			data: data,
			type: 'post'
			
	$.when($.ajax(host+"/"+apipath, option))
		.done( (data) ->
			promise.resolve(data)
		)
		.fail( (err) ->
			promise.reject(err)
		)
	promise
	
querySignal = ( host ) -> (cmd, data) ->
	Bacon.fromPromise query( host, cmd, data )
	
pkg.query = query
pkg.querySignal = querySignal
pkg.filepath = filepath