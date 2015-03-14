class window.app.page.HeaderController extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onHeaderBtnBackhomeClick', ->
			self.event.trigger 'onHeaderBtnBackhomeClick'
		@_view.showHome()
			
	showHome: ->
		@_view.showHome()
		
	showStreetsnap: ->
		@_view.showStreetsnap()
		
	showNews: ->
		@_view.showNews()
		
	showModels: ->
		@_view.showModels()
		
	showEvent: ->
		@_view.showEvent()
		
	showCelebrity: ->
		@_view.showCelebrity()
		
	showProduct: ->
		@_view.showProduct()
	