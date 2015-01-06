class window.app.Main
	constructor: ->
		@coll_tmpls = 
			home: $ '#tmpl_home'
			celebrity: $ '#tmpl_celebrity'
			models: $ '#tmpl_models'
			event: $ '#tmpl_event'
			streetsnap: $ '#tmpl_streetsnap'
			news: $ '#tmpl_news'
				
		@mc_pageContainer = $ '#mc_pageContainer'
		
		self = this
		
		@header = new window.app.header.Controller new window.app.header.View $ '#mc_header'
		@header.open()
		@header.event.on 'onHeaderBtnBackhomeClick', -> self.openHome()
			
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
	
	openHome: ->
		@openTargetPage 'home'
		
	openCelebrity: ->
		@openTargetPage 'celebrity'
	
	openModels: ->
		@openTargetPage 'models'
		
	openEvent: ->
		@openTargetPage 'event'
		
	openStreetsnap: ->
		@openTargetPage 'streetsnap'
		
	openNews: ->
		@openTargetPage 'news'	
		
	openTargetPage: ( name, data ) ->
		tmpl = @coll_tmpls[ name ].tmpl data
		@mc_pageContainer.empty()
		@mc_pageContainer.append tmpl
		
	closeTargetPage: ( name ) ->
		

new window.app.Main()