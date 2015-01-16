class window.app.page.StreetsnapListController extends vic.mvc.Controller
	applyTemplate: ( params, callback ) ->
		
		fetchAllModelOnSuccess = new Rx.Subject	
		fetchPhotoOnSuccess = new Rx.Subject
		onError= new Rx.Subject
		
		query = app.tool.serverapi.query "http://#{window.location.host}"
		
		fetchAllModel = ()->
			query(app.tool.serverapi.QueryStreetModel , {})
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
						name: m.Name
						date: m.UnixDate
						imgStylePath:'images/streetSnap/test2.jpg'
						imgSideAPath:'images/streetSnap/test1.jpg'
						imgSideBPath:'images/streetSnap/test1.jpg'
						imgSideCPath:'images/streetSnap/test1.jpg'
			callback dto
			
			
		onError.subscribe (err) ->
			console.log err
		
		fetchAllModel()
		
		
		###
		callback
			streetsnapList:[
				{
					name:'vic'
					date:'12321'
					imgStylePath:'images/streetSnap/test2.jpg'
					imgSideAPath:'images/streetSnap/test1.jpg'
					imgSideBPath:'images/streetSnap/test1.jpg'
					imgSideCPath:'images/streetSnap/test1.jpg'
				}
				{
					name:'vic'
					date:'12321'
					imgStylePath:'images/streetSnap/test2.jpg'
					imgSideAPath:'images/streetSnap/test1.jpg'
					imgSideBPath:'images/streetSnap/test1.jpg'
					imgSideCPath:'images/streetSnap/test1.jpg'
				}
			]
		###
			
	addListener: ->
		super()
		@_view.event.on 'onBtnSearchClick', ( evt, params ) => @event.trigger evt.type, params
