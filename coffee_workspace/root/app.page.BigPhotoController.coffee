class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( [modelKey, photoPath], callback )->
		
		serverImagePath = (path) ->
			filepath = app.tool.serverapi.filepath "http://#{window.location.host}"
			return filepath path
				
		callback
			url: serverImagePath photoPath
	
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type