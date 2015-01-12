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
	
query = ( host ) -> ( cmd, data ) ->
	data.cmd = cmd
	promise = jQuery.Deferred()
	$.when($.ajax(host+"/"+apipath, {type:'post', data: data}))
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