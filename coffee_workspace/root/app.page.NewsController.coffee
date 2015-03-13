class window.app.page.NewsController extends vic.mvc.Controller
	applyTemplate: ([ id ], callback)->
		
		that = this
		
		boundIndex = (id, count) ->
			id = (id ? count)
			if id < 1
				id = 1
			else if id > count
				id = count
			return id
			
		fetchEventList = (config) ->
			promise = $.Deferred()
			app.fn.fetchFile config.event
				.done (keys) ->
					promise.resolve config, (key for key in keys when key isnt 'config.json')
					
				.fail (err) ->
					promise.reject err
			return promise
			
		fetchDetail = (config, list) ->
			count = list.length
			id = boundIndex id, count
			that.id = id
			that.count = count
			filepath = "#{config.event}/#{list[id-1]}/config.json"
			promise = $.Deferred()
			app.fn.fetchFile filepath
				.done (detail) ->
					promise.resolve(config, list, detail)
				.fail (err) ->
					promise.reject(err)
			return promise
			
		convertFormat = (config, list, detail) ->
			imageurls = ("#{config.event}/#{list[id-1]}/image_#{imageId}.jpg" for imageId in [1..detail.count])
			return {
				title: detail.title
				date: detail.date
				sideList: ({path: app.fn.serverImagePath(imageurl)} for imageurl in imageurls)
				content: detail.content
				from: detail.from
			}
		done = (model) ->
			callback model
			
		configPath = "config.json"
		
		app.fn.fetchFile configPath
			.pipe(fetchEventList)
			.pipe(fetchDetail)
			.pipe(convertFormat)
			.then done, (err) ->
				alert(err)
				
	addListener: ->
		super()
		@_view.event.on 'onBtnPrevClick', ( evt ) => 
			@id--
			if @id < 1
				@id = 1
			@event.trigger evt.type, id:@id
		@_view.event.on 'onBtnNextClick', ( evt ) => 
			@id++
			if @id > @count
				@id = @count
			@event.trigger evt.type, id:@id
		
	removeListener: ->
		super()
		@_view.event.off 'onBtnPrevClick'
		@_view.event.off 'onBtnNextClick'
