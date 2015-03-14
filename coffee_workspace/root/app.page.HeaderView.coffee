class window.app.page.HeaderView extends window.vic.mvc.View
	constructor: ( elem ) ->
		super( elem )
		@_btn_backhome = elem.find '#btn_backhome'
		@img_homeLogo = elem.find '#img_homeLogo'
		@img_streetSnapLogo = elem.find '#img_streetSnapLogo'
		@img_streetNewsLogo = elem.find '#img_streetNewsLogo'
		@img_streetModelsLogo = elem.find '#img_streetModelsLogo'
		@img_streetEventLogo = elem.find '#img_streetEventLogo'
		@img_streetCelebrityLogo = elem.find '#img_streetCelebrityLogo'
		@img_streetProductLogo = elem.find '#img_streetProductLogo'
		
	addListener: ->
		@_btn_backhome.click => @event.trigger 'onHeaderBtnBackhomeClick'
		
	removerListener: ->
		@_btn_backhome.off 'click'
		
	###
	showHome: ->
		@img_streetSnapLogo.hide()
		@img_streetNewsLogo.hide()
		@img_streetModelsLogo.hide()
		@img_streetEventLogo.hide()
		@img_streetCelebrityLogo.hide()
		@img_homeLogo.fadeIn 400
		
	showStreetsnap: ->
		@img_streetSnapLogo.fadeIn 400
		@img_streetNewsLogo.hide()
		@img_streetModelsLogo.hide()
		@img_streetEventLogo.hide()
		@img_streetCelebrityLogo.hide()
		@img_homeLogo.hide()
		
	showNews: ->
		@img_streetSnapLogo.hide()
		@img_streetNewsLogo.fadeIn 400
		@img_streetModelsLogo.hide()
		@img_streetEventLogo.hide()
		@img_streetCelebrityLogo.hide()
		@img_homeLogo.hide()
		
	showModels: ->
		@img_streetSnapLogo.hide()
		@img_streetNewsLogo.hide()
		@img_streetModelsLogo.fadeIn 400
		@img_streetEventLogo.hide()
		@img_streetCelebrityLogo.hide()
		@img_homeLogo.hide()
		
	showEvent: ->
		@img_streetSnapLogo.hide()
		@img_streetNewsLogo.hide()
		@img_streetModelsLogo.hide()
		@img_streetEventLogo.fadeIn 400
		@img_streetCelebrityLogo.hide()
		@img_homeLogo.hide()
		
	showCelebrity: ->
		@img_streetSnapLogo.hide()
		@img_streetNewsLogo.hide()
		@img_streetModelsLogo.hide()
		@img_streetEventLogo.hide()
		@img_streetCelebrityLogo.fadeIn 400
		@img_homeLogo.hide()
	###
	
	showHome: ->
		@showLogo 'img_homeLogo'
		
	showStreetsnap: ->
		@showLogo 'img_streetSnapLogo'
		
	showNews: ->
		@showLogo 'img_streetNewsLogo'
		
	showModels: ->
		@showLogo 'img_streetModelsLogo'
		
	showEvent: ->
		@showLogo 'img_streetEventLogo'
		
	showCelebrity: ->
		@showLogo 'img_streetCelebrityLogo'
	
	showProduct: ->
		@showLogo 'img_streetProductLogo'
	
	showLogo: (name) ->
		logoNames = [
			'img_streetProductLogo', 
			'img_streetSnapLogo', 
			'img_streetNewsLogo', 
			'img_streetModelsLogo', 
			'img_streetEventLogo', 
			'img_streetCelebrityLogo', 
			'img_homeLogo']
			
		targetLogo = this[name]
		targetLogo.fadeIn 400
		otherLogo.hide() for otherLogo in _.map(logoNames, (name) => this[name]) when otherLogo isnt targetLogo
		

