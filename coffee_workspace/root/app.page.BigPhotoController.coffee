class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( [modelKey, belongKey], callback)->
		console.log "XXXX id #{id}"
		
	
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type