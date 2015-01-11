class window.app.page.BigPhotoView extends window.vic.mvc.View
	addListener: ->
		@_elem.click => 
			console.log 'onBtnCloseClick'
			@event.trigger 'onBtnCloseClick'