window.app.menubar ?= {}
class window.app.menubar.Controller extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onMenubarBtnClick', ( e, id ) ->
			self.event.trigger 'onMenubarBtnClick', id