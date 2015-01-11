window.app.menubar ?= {}
class window.app.menubar.View extends window.vic.mvc.View
	addListener: ->
		self = this
		@_elem.delegate 'div', 'click', ->
			self.event.trigger 'onMenubarBtnClick', this.id