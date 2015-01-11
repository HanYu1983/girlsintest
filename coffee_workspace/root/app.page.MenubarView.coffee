class window.app.page.MenubarView extends window.vic.mvc.View
	addListener: ->
		self = this
		@_elem.delegate 'div', 'click', ->
			self.event.trigger 'onMenubarBtnClick', this.id