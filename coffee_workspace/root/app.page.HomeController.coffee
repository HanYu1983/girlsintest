class window.app.page.HomeController extends vic.mvc.Controller
	addListener: ->
		super()
		
	applyTemplate: (param, callback)->
		query = app.tool.serverapi.query "http://#{window.location.host}"
		query(app.tool.serverapi.QueryStreetModel, { Rand: 0 })
			.done (data) ->
				callback
					modelKey: data.Info.ModelKey
			.fail (err) ->
				alert err