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
	###
	news:
		tmpl: $ '#tmpl_news'
		view: window.app.page.NewsView
		controller: window.app.page.NewsController
	
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
		
	productList: 
		tmpl: $ '#tmpl_streetsnap_list'
		view: window.app.page.StreetsnapListView
		controller: window.app.page.StreetsnapListController
		
	product:
		tmpl: $ '#tmpl_streetsnap'
		view: window.app.page.StreetsnapView
		controller: window.app.page.StreetsnapController
		
	modelsList: 
		tmpl: $ '#tmpl_streetsnap_list'
		view: window.app.page.StreetsnapListView
		controller: window.app.page.StreetsnapListController
		
	bigPhoto:
		tmpl: $ '#tmpl_bigPhoto'
		view: window.app.page.BigPhotoView
		controller: window.app.page.BigPhotoController

window.app.config.BelongHead = -1
window.app.config.BelongStyle = -2
window.app.config.BelongSide = -3
window.app.config.BelongNormal = 0
window.app.config.packageConfigPath = "package/config.json"
