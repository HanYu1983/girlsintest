class window.app.page.BigPhotoController extends vic.mvc.Controller
	
	addListener: ->
		super()
		@_view.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
		
	applyTemplate: ( tmpl, [id], callback)->
		console.log "XXXX"
		callback tmpl.tmpl url:id
		
	onBtnCloseClick: (evt) ->
		@event.trigger evt.type