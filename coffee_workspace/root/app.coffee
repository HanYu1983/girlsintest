PageHome = 'home'
PageCelebrity = 'celebrity'
PageModels = 'models'
PageEvent = 'event'
PageStreetsnap = 'streetsnap'
PageStreetsnapList = 'streetsnapList'
PageNews = 'news'
CloseablePageList = [PageHome, PageCelebrity, PageModels, PageEvent ,PageStreetsnap ,PageStreetsnapList ,PageNews ]
		
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
			header: $ '#mc_header'
			menubar: $ '#mc_menubar'
			
		@coll_pages = {}
				
		#頁面的container	
		@mc_pageContainer = $ '#mc_pageContainer'
		
		self = this
		
		#頭部的header
		@header = new window.app.header.Controller new window.app.header.View $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', -> self.openPage PageHome
			
		#選單
		@menubar = new window.app.menubar.Controller new window.app.menubar.View $ '#mc_menubar'
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
		
		@openPage PageHome
	
	openPage: ( name, model ) ->
		@closeAllPage
		@bindEvent name, @openPageController name, model
	
	bindEvent: (name, controller) ->
	
	closePage: ( name ) ->
		@unbindEvent name, @closePageController name
	
	unbindEvent: (name, controller) ->
		return if controller is undefined
		
	#打開指定頁面	
	openPageController: ( name, model ) ->
		self = this
		elem = @coll_tmpls[ name ].tmpl model 
		elem.appendTo @mc_pageContainer
		
		isControllerExist = window.app[ name ] isnt undefined
		if isControllerExist
			controller = new window.app[ name ].Controller new window.app[ name ].View elem
			controller.open()
			@collect_page[ name ] = controller
		else
			console.log 'no controller ' + name
			
	#關掉指定頁面	
	closePageController: ( name ) ->
		if ( @collect_page[ name ] is undefined ) then return
		page = @collect_page[ name ]
		@mc_pageContainer.empty()
		@collect_page[ name ].close()
		delete @collect_page[ name ]
		page
	
	closeAllPage: ->
		@closePage page for page in CloseablePageList
		
		
new window.app.Main()
