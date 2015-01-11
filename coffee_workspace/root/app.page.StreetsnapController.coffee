class window.app.page.StreetsnapController extends vic.mvc.Controller	
	addListener: ->
		super()
	
	open: ->
		super()
		@queryData()
	
	close: ->
		super()
		
	
	queryData: ->
		query = app.tool.serverapi.query "http://localhost:8080/"
		
		fetchModelData = (callback) -> 
			query(app.tool.serverapi.QueryStreetModel, {})
				.done (data) ->
					callback null, data
					
				.fail (err) ->
					callback err
					
		fetchPhotoData = (modelData, callback) ->
			models = modelData.Info
			callback null, [] if models.length is 0
			async.map modelData.Info, 
				(model, callback) ->
					query(app.tool.serverapi.QueryPhotoWithStreetModel , { StreetModelKey: model.Key })
						.done (photoData) ->
							callback null, photoData.Info
				
						.fail (err) ->
							callback err
				,
				(err, results) ->
					callback err, [modelData, results]
					
		fetchEndProcess = (err, results) => 
			if err?
				@onQueryError err
			else
				@onDataFetched results[0], results[1]
		
		async.waterfall [fetchModelData, fetchPhotoData], fetchEndProcess
	
	onQueryError: (err) ->
		console.log err
				
	onDataFetched: (modelData, photoData) ->
		console.log modelData
		console.log photoData
		