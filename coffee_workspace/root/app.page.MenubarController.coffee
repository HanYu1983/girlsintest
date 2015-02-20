class window.app.page.MenubarController extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onMenubarBtnClick', ( e, id ) ->
			self.event.trigger 'onMenubarBtnClick', id
			
	removeListener: ->
		@_view.event.off 'onMenubarBtnClick'