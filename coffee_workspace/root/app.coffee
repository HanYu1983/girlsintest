PageHome = 'home'
PageCelebrity = 'celebrity'
PageModels = 'models'
PageEvent = 'event'
PageStreetsnap = 'streetsnap'
PageStreetsnapList = 'streetsnapList'
PageNews = 'news'
PageBigPhoto = 'bigPhoto'
CloseablePageList = [PageHome, PageCelebrity, PageModels, PageEvent ,PageStreetsnap ,PageStreetsnapList ,PageNews ]

class window.app.Main
	constructor: (@mvcConfig)->
		@coll_pages = {}
		#頁面的container	
		@mc_pageContainer = $ '#mc_pageContainer'
		@mc_popupContainer = $ '#mc_popupContainer'
		
		self = this
		
		#頭部的header
		@header = new window.app.page.HeaderController new window.app.page.HeaderView $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', -> self.openPage PageHome
			
		#選單
		@menubar = new window.app.page.MenubarController new window.app.page.MenubarView $ '#mc_menubar'
		@menubar.open()
		@menubar.event.on 'onMenubarBtnClick', ( e, id ) =>
			switch id
				when 'btn_nav_celebrity'
					@router.navigate 'celebrity', trigger:true
				when 'btn_nav_model'
					@router.navigate 'models', trigger:true
				when 'btn_nav_event'
					@router.navigate 'event', trigger:true
				when 'btn_nav_streetSnap'
					@router.navigate 'streetsnap', trigger:true
				when 'btn_nav_news'
					@router.navigate 'news', trigger:true
					
		Router = Backbone.Router.extend
			routes:
				'streetsnap':'streetsnap'
				'streetsnap/id=:id':'streetsnap'
				'models':'models'
				'models/id=:id':'models'
				'celebrity':'celebrity'
				'event':'event'
				'news':'news'
				'':'default'
			streetsnap: ( id )=>
				@openPage PageStreetsnap, [ id, 'streetsnap' ]
				
			models: ( id ) =>
				@openPage PageModels, [ id, 'models' ]	
				
			celebrity: =>
				
			event: =>
				
			news: =>
				
			default: =>
				@openPage PageHome
				
		@router = new Router()
		Backbone.history.start()
		
	openPopup: ( name, param ) ->
		@bindEvent name, @openPageController name, @mc_popupContainer, param
		
	closePopup: ( name ) ->
		@closePage name, @mc_popupContainer
	
	# 打開一個頁面
	openPage: ( name, param ) ->
		@closeAllPage @mc_pageContainer
		@bindEvent name, @openPageController name, @mc_pageContainer, param
	
	# 每打開一個頁面會呼叫這，為各個頁面綁定事件處理
	bindEvent: (name, controller) ->
		switch name
			when PageStreetsnap
				controller.event.on 'onImgHistoryClick', => @onImgHistoryClick arguments...
				controller.event.on 'onImgClick', => @onImgClick arguments...
			when PageBigPhoto
				controller.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
	
	# 關閉一個頁面
	closePage: ( name, container ) ->
		@unbindEvent name, @closePageController name, container
	
	# 每關閉一個頁面會呼叫這，將事件綁定解除。controller可能會是undefined, 就不必為它處理
	unbindEvent: (name, controller) ->
		return if controller is undefined
		switch name
			when PageStreetsnap
				controller.event.off 'onImgHistoryClick'
				
	#打開指定頁面	
	openPageController: ( name, container, param ) ->
		return if @mvcConfig[ name ] is undefined
		
		controller = new @mvcConfig[ name ].controller
		###
		controller.applyTemplate @mvcConfig[ name ].tmpl, param, (elem)=>
			elem.appendTo container
			controller.setView new @mvcConfig[ name ].view elem
			controller.open()
			@coll_pages[ name ] = controller
		###
		controller.applyTemplate param, ( dataDTO )=>
			elem = @mvcConfig[ name ].tmpl.tmpl dataDTO
			elem.__dataDTO__ = dataDTO
			elem.appendTo container
			controller.setView new @mvcConfig[ name ].view elem
			controller.open()
			@coll_pages[ name ] = controller
		controller
		
	#關掉指定頁面	
	closePageController: ( name, container ) ->
		if ( @coll_pages[ name ] is undefined ) then return
		page = @coll_pages[ name ]
		container.empty()
		@coll_pages[ name ].close()
		delete @coll_pages[ name ]
		page
	
	closeAllPage: ( container )->
		@closePage page, container for page in CloseablePageList
		
	
	#各頁面事件
	onImgHistoryClick: (evt, {id})->
		console.log "streetsnap_id=#{id}"
		@router.navigate "streetsnap/id=#{id}", trigger: true
		
	onImgClick: (evt, {id, key})->
		@openPopup PageBigPhoto, [key, id]
		
	onBtnCloseClick: ->
		@closePopup PageBigPhoto
	
new window.app.Main app.config.mvcConfig 
