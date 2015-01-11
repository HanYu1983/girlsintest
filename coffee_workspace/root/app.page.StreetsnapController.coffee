class window.app.page.StreetsnapController extends vic.mvc.Controller	
	addListener: ->
		super()
		@_view.event.on 'onImgHistoryClick', => @onImgHistoryClick( arguments... )
	
	open: ->
		super()
		
	close: ->
		super()
		
	applyTemplate: (tmpl, callback)->
		
		isStylePhoto = (photo) ->
			photo.Belong is -3
			
		isSidePhoto = (photo) ->
			photo.Belong is -2
			
		isHeadPhoto = (photo) ->
			photo.Belong is -1
			
		isBottomPhoto = (photo) ->
			photo.Belong is 0
			
		repairBase64 = (base64) ->
			base64.replace('\r', '').replace('\n', '')
			
		formatPhoto = (photo) ->
			id: photo.Key
			url: app.tool.getFullBase64str repairBase64( photo.Base64Str )
			
		findFormatedPhoto = (photoData, filterFn) ->
			_.map( _.filter( photoData, filterFn), formatPhoto )
		
		formatModelData = ([modelData, photoData]) ->
			name: modelData.Caption
			date: modelData.DateUnix
			styleUrl: _.first( findFormatedPhoto photoData, isStylePhoto )?.url
			sideList: findFormatedPhoto photoData, isSidePhoto
			bottomList: findFormatedPhoto photoData, isBottomPhoto
			modelDetail: modelData.Description
			talk: modelData.Talk
			protalk: modelData.Comment
			key: modelData.ModelKey
		
		###
		@queryDefault()
			.done ([modelDataList, photoDataList])->
				model = _.first( _.map( _.zip( modelDataList, photoDataList ), formatModelData ))
				callback tmpl.tmpl model
				
			.fail (err)->
				console.log err
		###
		
		
		
		
		queryDefaultTask = (callback) =>
			@queryDefault()
				.done ([modelDataList, photoDataList])->
					model = _.first( _.map( _.zip( modelDataList, photoDataList ), formatModelData ))
					callback null, model
				
				.fail (err)->
					callback err
					
		queryHeadPhotoTask = (callback) =>
			@queryData(0, 6)
				.done ([modelDataList, photoDataList])->
					photos = _.map( photoDataList, (photoData)-> _.first( _.filter photoData, isHeadPhoto) )
					photos = _.map( photos, formatPhoto )
					callback null, photos
				.fail (err)->
					callback err
					
		queryEndProcess = (err, [mainModel, headModel]) ->
			mainModel.historyList = headModel
			callback tmpl.tmpl mainModel
		
		async.parallel [queryDefaultTask, queryHeadPhotoTask], queryEndProcess
		
		###
		#{"Key":5629499534213120,"Caption":"caption","Description":"description","Talk":"talk","Comment":"comment","ModelKey":"","Date":"2015-01-10T17:21:14.024316Z","DateUnix":1420910474,"Tag":"xxx","Available":true}
		
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
		###
		
		
		
	queryDefault: ->
		@queryData(0 ,1)
	
	
	queryData: (offset, limit)->
		query = app.tool.serverapi.query "http://localhost:8080/"
		
		fetchModelData = (callback) -> 
			query(app.tool.serverapi.QueryStreetModel, { Offset: offset, Limit: limit })
				.done (data) ->
					callback null, data.Info
					
				.fail (err) ->
					callback err
					
		fetchPhotoData = (modelDataList, callback) ->
			callback null, [] if modelDataList.length is 0
			async.map modelDataList, 
				(model, callback) ->
					query(app.tool.serverapi.QueryPhotoWithStreetModel , { StreetModelKey: model.Key })
						.done (photoData) ->
							callback null, photoData.Info
				
						.fail (err) ->
							callback err
				,
				(err, photoDataList) ->
					callback err, [modelDataList, photoDataList]
					
		promise = jQuery.Deferred()
		fetchEndProcess = (err, results) => 
			if err?
				promise.reject err
			else
				promise.resolve results 
		
		async.waterfall [fetchModelData, fetchPhotoData], fetchEndProcess
		promise
	
	onImgHistoryClick: (evt, data) ->
		console.log evt
		@event.trigger evt.type, data