window.app.config ?= {}
window.app.config.mvcConfig = 
	###	
	celebrity: 
		tmpl: $ '#tmpl_celebrity'
		view: window.app.pageCelebrity.View
		controller: window.app.celebrity.Controller
	event: 
		tmpl: $ '#tmpl_event'
		view: window.app.event.View
		controller: window.app.event.Controller
		
	news:
		tmpl: $ '#tmpl_news'
		view: window.app.news.View
		controller: window.app.news.Controller
	###
	
	home:
		tmpl: $ '#tmpl_home'
		view: window.app.page.HomeView
		controller: window.app.page.HomeController
	
	streetsnap:
		tmpl: $ '#tmpl_streetsnap'
		view: window.app.page.StreetsnapView
		controller: window.app.page.StreetsnapController
		
	streetsnapList: 
		tmpl: $ '#tmpl_streetsnap_list'
		view: window.app.page.StreetsnapListView
		controller: window.app.page.StreetsnapListController
		
	models:
		tmpl: $ '#tmpl_streetsnap'
		view: window.app.page.StreetsnapView
		controller: window.app.page.StreetsnapController
		
	bigPhoto:
		tmpl: $ '#tmpl_bigPhoto'
		view: window.app.page.BigPhotoView
		controller: window.app.page.BigPhotoController

window.app.config.BelongHead = -1
window.app.config.BelongStyle = -2
window.app.config.BelongSide = -3
window.app.config.BelongNormal = 0