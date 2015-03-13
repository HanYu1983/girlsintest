class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( [modelKey, photoPath], callback )->
		callback
			url: app.fn.serverImagePath photoPath
	
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type