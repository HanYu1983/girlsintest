class window.app.page.BigPhotoView extends window.vic.mvc.View
	addListener: ->
		@_elem.click => 
			@event.trigger 'onBtnCloseClick'