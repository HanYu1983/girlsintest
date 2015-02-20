window.vic = window.vic || {}
window.vic.mvc = window.vic.mvc || {}
class vic.mvc.Event
	constructor: ->
		@event = $ '<div></div>'
		
class vic.mvc.View extends vic.mvc.Event
	constructor: ( @_elem ) ->
		super()
	open: ->
		@_elem.fadeIn 400
	close: ->
		@_elem.fadeOut 400
	addListener: ->
	removeListener: ->
	
class vic.mvc.Controller extends vic.mvc.Event
	constructor: ( @_view ) ->
		super()
	open: ->
		@_view.open()
		@addListener()
	close: ->
		@removeListener()
		@_view.close()
	addListener: ->
		@_view.addListener()
	removeListener: ->
		@_view.removeListener()
	setView: ( @_view ) ->
		
	applyTemplate: ( param, callback ) ->
		callback param
		