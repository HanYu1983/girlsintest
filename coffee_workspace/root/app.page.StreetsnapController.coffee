class window.app.page.StreetsnapController extends vic.mvc.Controller	
	addListener: ->
		super()
	
	open: ->
		super()
		
	close: ->
		super()
		
	applyTemplate: (tmpl, callback)->
		@queryData()
		callback tmpl.tmpl
			name: 'vic'
			date: '2014-12-2'
			styleUrl:'images/streetSnap/test2.jpg'
			sideList:[ {id:'01', url:'images/streetSnap/test1.jpg'}, {id:'02', url:'images/streetSnap/test1.jpg' }]
			bottomList:[ {id:'01', url:'images/streetSnap/test1.jpg'}, {id:'02', url:'images/streetSnap/test1.jpg' }]
			modelDetail:'''名字　　　　　　　　　: Alice</br>喜歡的品牌　　　　　　: Burberry</br>
							喜歡的穿衣風格　　　　: American Style</br>
							喜歡的雜誌　　　　　　: Vogue, ELLE</br>
							最近喜歡看的電視節目　: 不是政論節目都好'''
			talk:'對於時尚,我覺得最重要的是穿出自己的風格, 而不是一昧跟隨著流行。但當然也需要觀察最近的趨勢.也許有朝一日也可以成為部落格'
			protalk:'於東區街頭看到這個小女孩, 桃紅T-Shirt加上深藍帽T的搭配，呈現出初秋可愛的氣息'	
		
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
				@onDataFetched results...
		
		async.waterfall [fetchModelData, fetchPhotoData], fetchEndProcess
	
	onQueryError: (err) ->
		console.log err
				
	onDataFetched: (modelData, photoData) ->
		console.log modelData
		console.log photoData
		