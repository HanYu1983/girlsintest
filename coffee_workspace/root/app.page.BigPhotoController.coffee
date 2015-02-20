class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( [modelKey, belongKey], callback )->

		repairBase64 = (base64) ->
			base64.replace('\r', '').replace('\n', '')
			
		query = app.tool.serverapi.query "http://#{window.location.host}"
		
		query(app.tool.serverapi.QueryPhotoWithStreetModel , { StreetModelKey: modelKey, Belong: belongKey })
			.done (photoData) ->
				if photoData.Info.length > 0
					callback 
						url: app.tool.getFullBase64str repairBase64( photoData.Info[0].Base64Str )
				else
					alert 'data error, no picture'
					callback 
						url: ''
	
			.fail (err) ->
				callback err
	
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type