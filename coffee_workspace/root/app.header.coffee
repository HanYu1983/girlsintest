window.app.header = {}
class window.app.header.View extends window.vic.mvc.View
	constructor: ( elem ) ->
		super( elem )
		@_btn_backhome = elem.find '#btn_backhome'
		
	addListener: ->
		self = this
		@_btn_backhome.click ->
			self.event.trigger 'onHeaderBtnBackhomeClick'

class window.app.header.Controller extends vic.mvc.Controller
	addListener: ->
		super()
		self = this
		@_view.event.on 'onHeaderBtnBackhomeClick', ->
			self.event.trigger 'onHeaderBtnBackhomeClick'