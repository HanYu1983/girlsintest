PageHome = 'home'
PageCelebrity = 'celebrity'
PageModels = 'models'
PageEvent = 'event'
PageStreetsnap = 'streetsnap'
PageStreetsnapList = 'streetsnapList'
PageNews = 'news'
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
		
		@openPage PageStreetsnap
	
	# 打開一個頁面
	openPage: ( name, model ) ->
		@closeAllPage()
		@bindEvent name, @openPageController name, model
	
	# 每打開一個頁面會呼叫這，為各個頁面綁定事件處理
	bindEvent: (name, controller) ->
	
	
	# 關閉一個頁面
	closePage: ( name ) ->
		@unbindEvent name, @closePageController name
	
	# 每關閉一個頁面會呼叫這，將事件綁定解除。controller可能會是undefined, 就不必為它處理
	unbindEvent: (name, controller) ->
		return if controller is undefined
		
	#打開指定頁面	
	openPageController: ( name, model ) ->
		return if @mvcConfig[ name ] is undefined
		
		elem = @mvcConfig[ name ].tmpl.tmpl model 
		elem.appendTo @mc_pageContainer
		
		controller = new @mvcConfig[ name ].controller new @mvcConfig[ name ].view elem
		controller.open()
		@coll_pages[ name ] = controller
			
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
		
console.log app.mvcConfig

new window.app.Main app.mvcConfig 
