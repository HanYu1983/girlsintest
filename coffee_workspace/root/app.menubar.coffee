window.app.menubar = {}
class window.app.menubar.View extends window.vic.mvc.View
	addListener: ->
		self = this
		@_elem.delegate 'div', 'click', ->
			self.event.trigger 'onMenubarBtnClick', this.id

class window.app.menubar.Controller extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onMenubarBtnClick', ( e, id ) ->
			self.event.trigger 'onMenubarBtnClick', id