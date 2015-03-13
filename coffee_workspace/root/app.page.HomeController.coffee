class window.app.page.HomeController extends vic.mvc.Controller
	addListener: ->
		super()
		
	applyTemplate: (param, callback)->
		
		done = (config, models) ->	
			models = _.sortBy models, ([model, detail]) -> new Date(detail.Date).getTime()
			models.reverse()
			
			callback
				modelKey: models[0][1].ModelKey
			
		configPath = "config.json"
		
		app.cache ?= {}
		getAllModel = app.fn.memorizeGetAllModel( app.cache )
		
		getAllModel( configPath ) ('model')
			.done done
			.fail (err) ->
				alert err