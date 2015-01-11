window.app.header ?= {}
class window.app.header.Controller extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onHeaderBtnBackhomeClick', ->
			self.event.trigger 'onHeaderBtnBackhomeClick'