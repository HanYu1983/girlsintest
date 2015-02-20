class window.app.page.NewsController extends vic.mvc.Controller
	applyTemplate: ([ id ], callback)->
		@id = id ? 0
		callback
			title:'title'
			date:'date'
			sideList:[{path:''}, {path:''}]
			content:'content'
			from:'from'
			
	addListener: ->
		super()
		@_view.event.on 'onBtnPrevClick', ( evt ) => 
			@id--
			@event.trigger evt.type, id:@id
		@_view.event.on 'onBtnNextClick', ( evt ) => 
			@id++
			@event.trigger evt.type, id:@id
		
	removeListener: ->
		super()
		@_view.event.off 'onBtnPrevClick'
		@_view.event.off 'onBtnNextClick'