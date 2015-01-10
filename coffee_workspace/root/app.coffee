class window.app.Main
	constructor: ->
		#所有的頁面template
		@coll_tmpls = 
			home: $ '#tmpl_home'
			celebrity: $ '#tmpl_celebrity'
			models: $ '#tmpl_models'
			event: $ '#tmpl_event'
			streetsnap: $ '#tmpl_streetsnap'
			streetsnapList: $ '#tmpl_streetsnap_list'
			news: $ '#tmpl_news'
			
		@coll_pages = {}
				
		#頁面的container	
		@mc_pageContainer = $ '#mc_pageContainer'
		
		self = this
		
		#頭部的header
		@header = new window.app.header.Controller new window.app.header.View $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', -> self.openHome()
			
		#選單
		@menubar = new window.app.menubar.Controller new window.app.menubar.View $ '#mc_menubar'
		@menubar.open()
		@menubar.event.on 'onMenubarBtnClick', ( e, id ) ->
			switch id
				when 'btn_nav_celebrity'
					self.openCelebrity()
				when 'btn_nav_model'
					self.openModels()
				when 'btn_nav_event'
					self.openEvent()
				when 'btn_nav_streetSnap'
					self.openStreetsnap()
				when 'btn_nav_news'
					self.openNews()
		
		@openHome()
	
	#打開首頁	
	openHome: ->
		@openTargetPage 'home'
	
	#打開名人頁
	openCelebrity: ->
		@openTargetPage 'celebrity'
	
	#打開模特頁
	openModels: ->
		@openTargetPage 'models'

	#打開活動頁
	openEvent: ->
		@openTargetPage 'event'
		
	#打開街拍頁	
	openStreetsnap: ->
		@openTargetPage 'streetsnap'
	
	#打開街拍搜尋頁	
	openStreetsnapList: ->
		@openTargetPage 'streetsnapList'
	
	#打開新聞頁	
	openNews: ->
		@openTargetPage 'news'	
	
	#打開指定頁面	
	openTargetPage: ( name, model ) ->
		self = this
		elem = @coll_tmpls[ name ].tmpl model 
		elem.appendTo @mc_pageContainer
		controller = new window.app[ name ].Controller new window.app[ name ].View elem
		controller.open()
		@collect_page[ name ] = controller
	
	#關掉指定頁面	
	closeTargetPage: ( name ) ->
		if ( @collect_page[ name ] is undefined ) then return
		page = @collect_page[ name ]
		@mc_pageContainer.empty()
		@collect_page[ name ].close()
		delete @collect_page[ name ]
		page
	
	closeAllPageAndThen: ( func ) ->
		func()
	
		
		

new window.app.Main()