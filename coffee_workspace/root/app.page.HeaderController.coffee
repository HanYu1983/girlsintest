class window.app.page.HeaderController extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onHeaderBtnBackhomeClick', ->
			self.event.trigger 'onHeaderBtnBackhomeClick'