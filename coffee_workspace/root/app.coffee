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
		
		self = this
		
		#頭部的header
		@header = new window.app.page.HeaderController new window.app.page.HeaderView $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', -> self.openPage PageHome
			
		#選單
		@menubar = new window.app.page.MenubarController new window.app.page.MenubarView $ '#mc_menubar'
		@menubar.open()
		@menubar.event.on 'onMenubarBtnClick', ( e, id ) ->
			switch id
				when 'btn_nav_celebrity'
					self.openPage PageCelebrity 
				when 'btn_nav_model'
					self.openPage PageModels 
				when 'btn_nav_event'
					self.openPage PageEvent 
				when 'btn_nav_streetSnap'
					self.openPage PageStreetsnap 
				when 'btn_nav_news'
					self.openPage PageNews 
					
		Router = Backbone.Router.extend
			routes:
				'streetsnap_id=:id':'streetsnap'
				'':'default'
			streetsnap: ( id )=>
				#console.log id
				@openPage PageStreetsnap, arguments
			default: ->
				console.log 'default'
				
		@router = new Router()
		Backbone.history.start()
		
		@openPage PageBigPhoto, null
	
	# 打開一個頁面
	openPage: ( name, param ) ->
		@closeAllPage()
		@bindEvent name, @openPageController name, param
	
	# 每打開一個頁面會呼叫這，為各個頁面綁定事件處理
	bindEvent: (name, controller) ->
		switch name
			when PageStreetsnap
				console.log('bind!!')
				controller.event.on 'onImgHistoryClick', => @onImgHistoryClick arguments...
	
	# 關閉一個頁面
	closePage: ( name ) ->
		@unbindEvent name, @closePageController name
	
	# 每關閉一個頁面會呼叫這，將事件綁定解除。controller可能會是undefined, 就不必為它處理
	unbindEvent: (name, controller) ->
		return if controller is undefined
		switch name
			when PageStreetsnap
				controller.event.off 'onImgHistoryClick'
				
	#打開指定頁面	
	openPageController: ( name, param ) ->
		return if @mvcConfig[ name ] is undefined
		
		controller = new @mvcConfig[ name ].controller
		controller.applyTemplate @mvcConfig[ name ].tmpl, param, (elem)=>
			elem.appendTo @mc_pageContainer
			controller.setView new @mvcConfig[ name ].view elem
			controller.open()
			@coll_pages[ name ] = controller
		controller
		
	#關掉指定頁面	
	closePageController: ( name ) ->
		if ( @coll_pages[ name ] is undefined ) then return
		page = @coll_pages[ name ]
		@mc_pageContainer.empty()
		@coll_pages[ name ].close()
		delete @coll_pages[ name ]
		page
	
	closeAllPage: ->
		@closePage page for page in CloseablePageList
		
	
	#各頁面事件
	onImgHistoryClick: (evt, {id})->
		console.log "streetsnap_id=#{id}"
		@router.navigate "streetsnap_id=#{id}", trigger: true
new window.app.Main app.config.mvcConfig 
