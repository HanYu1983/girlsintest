class window.app.page.StreetsnapController extends vic.mvc.Controller	
	addListener: ->
		super()
		@_view.event.on 'onImgHistoryClick', => @onImgHistoryClick arguments... 
		@_view.event.on 'onImgClick', => @onImgClick arguments...
		@_view.event.on 'onBtnMoreClick', => @onBtnMoreClick arguments...
		@_view.event.on 'onBtnShareClick', => @onBtnShareClick arguments...
		
	removeListener: ->
		super()
		@_view.event.off 'onImgHistoryClick'
		@_view.event.off 'onImgClick'
		@_view.event.off 'onBtnMoreClick'
		@_view.event.off 'onBtnShareClick'
		
	open: ->
		super()
		
	close: ->
		super()
		
	applyTemplate: ([key, modelType], callback)->
		
		isStylePhoto = (photo) ->
			photo.Belong is -2
			
		isSidePhoto = (photo) ->
			photo.Belong is -3
			
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
			date: app.tool.getFullDay modelData.DateUnix
			styleUrl: _.first( findFormatedPhoto photoData, isStylePhoto )?.url
			sideList: findFormatedPhoto photoData, isSidePhoto
			bottomList: findFormatedPhoto photoData, isBottomPhoto
			modelDetail: modelData.Description
			talk: modelData.Talk
			protalk: modelData.Comment
			modelKey: modelData.ModelKey
			key: modelData.Key
			
		EmptyModel = 
			name: ''
			date: ''
			styleUrl: ''
			sideList: ''
			bottomList: ''
			modelDetail: ''
			talk: ''
			protalk: ''
			modelKey: ''
			key: ''
		
		queryDefaultTask = (callback) =>
			queryFn =
				if key?
					()=>@queryKey key
				else
					()=>@queryDefault( modelType )
			
			queryFn()
				.done ([modelDataList, photoDataList])->
					model = _.first( _.map( _.zip( modelDataList, photoDataList ), formatModelData ))
					callback null, model ? EmptyModel
						
				
				.fail (err)->
					callback err
					
		queryHeadPhotoTask = (callback) =>
			@queryDataList( modelType, 0, 6)
				.done ([modelDataList, photoDataList])->
					photos = _.map( photoDataList, (photoData)-> _.first( _.filter photoData, isHeadPhoto) )
					photos = _.map _.zip( photos, modelDataList ), 
						( [photo, model] )-> 
							id: model.Key 
							url: app.tool.getFullBase64str repairBase64( photo.Base64Str )
					callback null, photos
				.fail (err)->
					callback err
					
		queryEndProcess = (err, [mainModel, headModel]) ->
			if err?
				console.log err
			else
				mainModel.historyList = headModel
				callback mainModel
		
		async.parallel [queryDefaultTask, queryHeadPhotoTask], queryEndProcess
		
		###
		#{"Key":5629499534213120,"Caption":"caption","Description":"description","Talk":"talk","Comment":"comment","ModelKey":"","Date":"2015-01-10T17:21:14.024316Z","DateUnix":1420910474,"Tag":"xxx","Available":true}
		
		callback
			name: 'vic'
			date: '2014-12-2'
			modelKey:'dddd'
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
		
		
	queryDataList: ( modelType, offset, limit)->
		@queryData { Offset: offset, Limit: limit }
		
		if modelType is "models"
			@queryData { ModelType: "m", Offset: offset, Limit: limit }
		else
			@queryData { ModelType: "s", Offset: offset, Limit: limit }
		
	queryDefault: ( modelType ) ->
		@queryDataList( modelType, 0 ,1)
		
	queryKey: (key)->
		@queryData { Key: key }
	
	queryData: (option)->
		
		query = app.tool.serverapi.query "http://#{window.location.host}"
		
		fetchModelData = (callback) -> 
			query(app.tool.serverapi.QueryStreetModel, option)
				.done (data) ->
					list = 
						if Array.isArray data.Info
							data.Info
						else
							[data.Info]
							
					callback null, list
					
				.fail (err) ->
					callback err
					
		fetchPhotoData = (modelDataList, callback) ->
			if modelDataList.length is 0
				callback null, [[], []]
			else
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
		@event.trigger evt.type, data
		
	onImgClick: (evt, data) ->
		@event.trigger evt.type, data
	
	onBtnMoreClick: ( evt ) ->
		@event.trigger evt.type
		
	onBtnShareClick: ( evt, data ) ->
		@event.trigger evt.type, data