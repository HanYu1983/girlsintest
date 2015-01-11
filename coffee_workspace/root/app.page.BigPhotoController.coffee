class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( [modelKey, belongKey], callback )->

		repairBase64 = (base64) ->
			base64.replace('\r', '').replace('\n', '')
			
		query = app.tool.serverapi.query "http://localhost:8080/"
		
		query(app.tool.serverapi.QueryPhotoWithStreetModel , { StreetModelKey: model.Key, Belong: belongKey })
			.done (photoData) ->
				if photoData.Info.length?
					callback 
						url: app.tool.getFullBase64str repairBase64( photoData.Info[0].Base64Str )
				else
					callback 
						url: ''
	
			.fail (err) ->
				callback err
	
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type