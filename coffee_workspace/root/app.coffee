PageHome = 'home'
PageCelebrity = 'celebrity'
PageModels = 'models'
PageModelsList = 'modelsList'
PageEvent = 'event'
PageStreetsnap = 'streetsnap'
PageStreetsnapList = 'streetsnapList'
PageProduct = 'product'
PageProductList = 'productList'
PageNews = 'news'
PageBigPhoto = 'bigPhoto'
CloseablePageList = [
	PageHome, 
	PageCelebrity, 
	PageModels, 
	PageModelsList, 
	PageEvent ,
	PageStreetsnap ,
	PageStreetsnapList ,
	PageProduct ,
	PageProductList ,
	PageNews ]

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
					@router.navigate 'modelsList', trigger:true
				when 'btn_nav_event'
					#@router.navigate 'event', trigger:true
					alert '敬請期待'
				when 'btn_nav_streetSnap'
					@router.navigate 'streetsnapList', trigger:true
				when 'btn_nav_product'
					@router.navigate 'productList', trigger:true
				when 'btn_nav_news'
					@router.navigate 'news', trigger:true
					
		Router = Backbone.Router.extend
			routes:
				'streetsnap':'streetsnap'
				'streetsnap/id=:id':'streetsnap'
				'streetsnapList':'streetsnapList'
				'streetsnapList/search=:search':'streetsnapList'
				'models':'models'
				'models/id=:id':'models'
				'modelsList':'modelsList'
				'modelsList/search=:search':'modelsList'
				'product':'product'
				'product/id=:id':'product'
				'productList':'productList'
				'productList/search=:search':'productList'
				'celebrity':'celebrity'
				'event':'event'
				'news':'news'
				'news/id=:id':'news'
				'':'default'
			streetsnap: ( id )=>
				@openPage PageStreetsnap, [ id, 'streetsnap' ]
				@header.showStreetsnap()
				
			streetsnapList: ( search )=>
				@openPage PageStreetsnapList, [ search, 'streetsnap' ]
				@header.showStreetsnap()
				
			models: ( id ) =>
				@openPage PageModels, [ id, 'models' ]	
				@header.showModels()
				
			modelsList: ( search ) =>
				@openPage PageModelsList, [ search, 'models']
				@header.showModels()
				
			product: ( id ) =>
				@openPage PageProduct, [ id, 'product' ]	
				@header.showModels()
				
			productList: ( search ) =>
				@openPage PageProductList, [ search, 'product']
				@header.showProduct()
				
			celebrity: =>
				@header.showCelebrity()
				
			event: =>
				@header.showEvent()
				
			news: ( id )=>
				@header.showNews()
				@openPage PageNews, [ id ]
				
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
				controller.event.on 'onBtnShareClick', => @onBtnShareClick arguments...
			when PageStreetsnapList
				controller.event.on 'onBtnSearchClick', => @onBtnSearchClick arguments...
				controller.event.on 'onBtnModelClick', => @onBtnModelClick arguments...
				controller.event.on 'onBtnReturnClick', => @onBtnReturnClick arguments...
			when PageModels
				controller.event.on 'onImgHistoryClick', => @onModelsImgHistoryClick arguments...
				controller.event.on 'onImgClick', => @onModelsImgClick arguments...
				controller.event.on 'onBtnMoreClick', => @onModelsBtnMoreClick arguments...
				controller.event.on 'onBtnShareClick', => @onBtnShareClick arguments...
			when PageModelsList
				controller.event.on 'onBtnSearchClick', => @onModelsBtnSearchClick arguments...
				controller.event.on 'onBtnModelClick', => @onModelsBtnModelClick arguments...
				controller.event.on 'onBtnReturnClick', => @onModelsBtnReturnClick arguments...
			when PageProduct
				controller.event.on 'onImgHistoryClick', => @onProductImgHistoryClick arguments...
				controller.event.on 'onImgClick', => @onProductImgClick arguments...
				controller.event.on 'onBtnMoreClick', => @onProductBtnMoreClick arguments...
				controller.event.on 'onBtnShareClick', => @onBtnShareClick arguments...
			when PageProductList
				controller.event.on 'onBtnSearchClick', => @onProductBtnSearchClick arguments...
				controller.event.on 'onBtnModelClick', => @onProductBtnModelClick arguments...
				controller.event.on 'onBtnReturnClick', => @onProductBtnReturnClick arguments...
			when PageBigPhoto
				controller.event.on 'onBtnCloseClick', => @onBtnCloseClick arguments...
			when PageNews
				controller.event.on 'onBtnPrevClick', => @onBtnPrevClick arguments...
				controller.event.on 'onBtnNextClick', => @onBtnNextClick arguments...
	
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
				controller.event.off 'onBtnShareClick'
			when PageStreetsnapList
				controller.event.off 'onBtnSearchClick'
				controller.event.off 'onBtnModelClick'
				controller.event.off 'onBtnReturnClick'
			when PageModels
				controller.event.off 'onModelsImgHistoryClick'
				controller.event.off 'onModelsImgClick'
				controller.event.off 'onModelsBtnMoreClick'
			when PageModelsList
				controller.event.off 'onModelsBtnSearchClick'
				controller.event.off 'onModelsBtnModelClick'
				controller.event.off 'onModelsBtnReturnClick'
			when PageBigPhoto
				controller.event.off 'onBtnCloseClick'
				
	#打開指定頁面	
	openPageController: ( name, container, param ) ->
		return if @mvcConfig[ name ] is undefined
		@openLoading();
		
		controller = new @mvcConfig[ name ].controller
		controller.applyTemplate param, ( dataDTO )=>
			elem = @mvcConfig[ name ].tmpl.tmpl dataDTO, this
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
		
	onBtnShareClick: ( evt, info ) ->
		vic.facebook.postMessageToMyboard
			name:""
			link:window.location.href
			picture:info.styleUrl
			caption:info.name
			description: info.modelDetail
			callback: ->
				alert "分享成功"
				
			error: (err) ->
				alert err
		
	onBtnCloseClick: ->
		@closePopup PageBigPhoto
		
	onBtnPrevClick: ( evt, params ) ->
		@router.navigate 'news/id=' + params.id, trigger: true
	
	onBtnNextClick: ( evt, params )->
		@router.navigate 'news/id=' + params.id, trigger: true
		
	onBtnSearchClick: ( evt, params ) ->
		@router.navigate 'streetsnapList/search=' + params.search, trigger: true
		
	onBtnModelClick: ( evt, params ) ->
		@router.navigate 'streetsnap/id=' + params.id, trigger: true
		
	onBtnReturnClick: ( evt, params ) ->
		@router.navigate 'streetsnapList', trigger:true
	 
	# ----- model page ----- #
	onModelsImgHistoryClick: ( evt, {id})->
		@router.navigate "models/id=#{id}", trigger: true
		
	onModelsImgClick: (evt, {id, key})->
		@openPopup PageBigPhoto, [key, id]
		
	onModelsBtnMoreClick: ( evt ) ->
		@router.navigate 'modelsList', trigger: true
		
	onModelsBtnSearchClick: ( evt, params ) ->
		@router.navigate 'modelsList/search=' + params.search, trigger: true
	
	onModelsBtnModelClick: ( evt, params ) ->
		@router.navigate 'models/id=' + params.id, trigger: true
		
	onModelsBtnReturnClick: ( evt, params ) ->
		@router.navigate 'modelsList', trigger: true
		
	# ----- product page ----- #
	onProductImgHistoryClick: ( evt, {id})->
		@router.navigate "product/id=#{id}", trigger: true
		
	onProductImgClick: (evt, {id, key})->
		@openPopup PageBigPhoto, [key, id]
		
	onProductBtnMoreClick: ( evt ) ->
		@router.navigate 'productList', trigger: true
		
	onProductBtnSearchClick: ( evt, params ) ->
		@router.navigate 'productList/search=' + params.search, trigger: true
	
	onProductBtnModelClick: ( evt, params ) ->
		@router.navigate 'product/id=' + params.id, trigger: true
		
	onProductBtnReturnClick: ( evt, params ) ->
		@router.navigate 'productList', trigger: true
		
	brandToColor: ( brand ) ->
		hasBrand = brand.length > 0
		return 'yellow' if hasBrand
		###
		switch brand
			when 'AAA'
				'yellow'
			when 'BBB'
				'red'
		###	
	checkHot: ( timestr ) ->
		timestr = timestr.split '/'
		nowUnixTime = app.tool.getUnixTime()
		unixTime = app.tool.getUnixTimeByYMD timestr[0], timestr[1], timestr[2]
		difftime = nowUnixTime - unixTime
		if difftime < 60 * 60 * 24 * 1
			'new'
		else
			'old'
			
	unixtimeToYMD: ( unixtime ) ->
		app.tool.getFullDay( unixtime )
		
new window.app.Main app.config.mvcConfig 
