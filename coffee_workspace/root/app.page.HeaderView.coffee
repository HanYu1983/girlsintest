class window.app.page.HeaderView extends window.vic.mvc.View
	constructor: ( elem ) ->
		super( elem )
		@_btn_backhome = elem.find '#btn_backhome'
		@img_homeLogo = elem.find '#img_homeLogo'
		@img_streetSnapLogo = elem.find '#img_streetSnapLogo'
		@showHome()
		
	addListener: ->
		@_btn_backhome.click => @event.trigger 'onHeaderBtnBackhomeClick'
		
	removerListener: ->
		@_btn_backhome.off 'click'
		
	showHome: ->
		@img_streetSnapLogo.hide()
		@img_homeLogo.show()
		
	showStreetsnap: ->
		@img_streetSnapLogo.show()
		@img_homeLogo.hide()

