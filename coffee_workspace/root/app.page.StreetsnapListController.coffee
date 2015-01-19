class window.app.page.StreetsnapListController extends vic.mvc.Controller
	applyTemplate: ( [searchKey], callback ) ->
		
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
			app.tool.getFullBase64str repairBase64 photo.Base64Str
			
		findFormatedPhoto = (photoData, filterFn) ->
			_.map( _.filter( photoData, filterFn), formatPhoto )
			
			
		
		fetchAllModelOnSuccess = new Rx.Subject	
		fetchPhotoOnSuccess = new Rx.Subject
		onError= new Rx.Subject
		
		query = app.tool.serverapi.query "http://#{window.location.host}"
		
		fetchAllModel = ( searchKey )->
			option = 
				if searchKey?
					Regexp: searchKey
				else
					{}
			query(app.tool.serverapi.QueryStreetModel , option)
				.done (data) ->
					fetchAllModelOnSuccess.onNext data.Info
					
				.fail (err) ->
					onError.onNext err
		
		fetchPhoto = (modelList) ->
			async.map modelList,
				(model, sink) ->
					 query(app.tool.serverapi.QueryPhotoWithStreetModel , { StreetModelKey: model.Key })
						.done (data) ->
							sink null, data.Info
							
						.fail (err) ->
							sink err
				,
				(err, results) ->
					if err?
						onError.onNext err
					else
						fetchPhotoOnSuccess.onNext results
					
		fetchAllModelOnSuccess.subscribe fetchPhoto
		
		fetched = fetchAllModelOnSuccess.zip fetchPhotoOnSuccess, (model, photo) -> [model, photo]

		fetched.subscribe ([model, photo]) ->
			dto = streetsnapList: 
					_.map _.zip(model, photo), ([m, p]) ->
						id: m.ModelKey
						name: m.Caption
						date: app.tool.getFullDay m.DateUnix
						imgStylePath: findFormatedPhoto( p, isStylePhoto )[0]
						imgSideAPath: findFormatedPhoto( p, isSidePhoto )[0]
						imgSideBPath: findFormatedPhoto( p, isSidePhoto )[1]
						imgSideCPath: findFormatedPhoto( p, isSidePhoto )[2]
			callback dto
			
			
		onError.subscribe (err) ->
			console.log err
		
		if searchKey?
			fetchAllModel( searchKey )
		else
			fetchAllModel()
			
	addListener: ->
		super()
		@_view.event.on 'onBtnSearchClick', ( evt, params ) => @event.trigger evt.type, params
