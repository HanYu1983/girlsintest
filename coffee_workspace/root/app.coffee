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
		@mc_loading = $ '#mc_loading'
		
		self = this
		
		#頭部的header
		@header = new window.app.page.HeaderController new window.app.page.HeaderView $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', => @router.navigate '', trigger:true
			
		#選單
		@menubar = new window.app.page.MenubarController new window.app.page.MenubarView $ '#mc_menubar'
		@menubar.open()
		@menubar.event.on 'onMenubarBtnClick', ( e, id ) =>
			switch id
				when 'btn_nav_celebrity'
					#@router.navigate 'celebrity', trigger:true
					alert '敬請期待'
				when 'btn_nav_model'
					@router.navigate 'models', trigger:true
				when 'btn_nav_event'
					#@router.navigate 'event', trigger:true
					alert '敬請期待'
				when 'btn_nav_streetSnap'
					@router.navigate 'streetsnap', trigger:true
				when 'btn_nav_news'
					#@router.navigate 'news', trigger:true
					alert '敬請期待'
					
		Router = Backbone.Router.extend
			routes:
				'streetsnap':'streetsnap'
				'streetsnap/id=:id':'streetsnap'
				'streetsnapList':'streetsnapList'
				'streetsnapList/search=:search':'streetsnapList'
				'models':'models'
				'models/id=:id':'models'
				'celebrity':'celebrity'
				'event':'event'
				'news':'news'
				'':'default'
			streetsnap: ( id )=>
				@openPage PageStreetsnap, [ id, 'streetsnap' ]
				@header.showStreetsnap()
				
			streetsnapList: ( search )=>
				@openPage PageStreetsnapList, [ search ]
				@header.showStreetsnap()
				
			models: ( id ) =>
				@openPage PageModels, [ id, 'models' ]	
				@header.showModels
				
			celebrity: =>
				@header.showCelebrity()
				
			event: =>
				@header.showEvent()
				
			news: =>
				@header.showNews()
				
			default: =>
				@openPage PageHome
				@header.showHome()
				
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
				controller.event.on 'onBtnMoreClick', => @onBtnMoreClick arguments...
			when PageStreetsnapList
				controller.event.on 'onBtnSearchClick', => @onBtnSearchClick arguments...
			when PageModels
				controller.event.on 'onImgHistoryClick', => @onModelsImgHistoryClick arguments...
				controller.event.on 'onImgClick', => @onModelsImgClick arguments...
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
				controller.event.off 'onImgClick'
				controller.event.off 'onBtnMoreClick'
			when PageStreetsnapList
				controller.event.off 'onBtnSearchClick'
			when PageModels
				controller.event.off 'onImgHistoryClick'
				controller.event.off 'onImgClick'
			when PageBigPhoto
				controller.event.off 'onBtnCloseClick'
				
	#打開指定頁面	
	openPageController: ( name, container, param ) ->
		return if @mvcConfig[ name ] is undefined
		@openLoading();
		
		controller = new @mvcConfig[ name ].controller
		###
		controller.applyTemplate @mvcConfig[ name ].tmpl, param, (elem)=>
			elem.appendTo container
			controller.setView new @mvcConfig[ name ].view elem
			controller.open()
			@coll_pages[ name ] = controller
		###
		controller.applyTemplate param, ( dataDTO )=>
			console.log dataDTO
			elem = @mvcConfig[ name ].tmpl.tmpl dataDTO
			elem.__dataDTO__ = dataDTO
			elem.appendTo container
			controller.setView new @mvcConfig[ name ].view elem
			controller.open()
			@coll_pages[ name ] = controller
			@closeLoading()
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
		
		
	openLoading: ->
		@mc_loading.fadeIn 400
		
	closeLoading: ->
		@mc_loading.fadeOut 400
	
	#各頁面事件
	onImgHistoryClick: (evt, {id})->
		@router.navigate "streetsnap/id=#{id}", trigger: true
		
	onImgClick: (evt, {id, key})->
		@openPopup PageBigPhoto, [key, id]
		
	onBtnMoreClick: ( evt ) ->
		@router.navigate 'streetsnapList', trigger: true
		
	onModelsImgHistoryClick: ( evt, {id})->
		@router.navigate "models/id=#{id}", trigger: true
		
	onModelsImgClick: (evt, {id, key})->
		@openPopup PageBigPhoto, [key, id]
		
	onBtnCloseClick: ->
		@closePopup PageBigPhoto
		
	onBtnSearchClick: ( evt, params ) ->
		@router.navigate 'streetsnapList/search=' + params.search, trigger: true
		
new window.app.Main app.config.mvcConfig 
