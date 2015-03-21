class window.app.page.HomeView extends window.vic.mvc.View
	constructor: ( elem ) ->
		super( elem )
		@mc_3dmask = elem.find '#mc_3dmask'
		
	fadeOutMask: (delay) ->
		fadeOut = ()=>
			@mc_3dmask.fadeOut 2000
		setTimeout fadeOut, delay

