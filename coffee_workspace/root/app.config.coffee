window.app.config ?= {}
window.app.config.mvcConfig = 
	
	home:
		tmpl: $ '#tmpl_home'
		view: window.app.page.HomeView
		controller: window.app.page.HomeController
	###	
	celebrity: 
		tmpl: $ '#tmpl_celebrity'
		view: window.app.pageCelebrity.View
		controller: window.app.celebrity.Controller
	models:
		tmpl: $ '#tmpl_models'
		view: window.app.models.View
		controller: window.app.models.Controller
	event: 
		tmpl: $ '#tmpl_event'
		view: window.app.event.View
		controller: window.app.event.Controller
	streetsnapList: 
		tmpl: $ '#tmpl_streetsnapList'
		view: window.app.streetsnapList.View
		controller: window.app.streetsnapList.Controller
	news:
		tmpl: $ '#tmpl_news'
		view: window.app.news.View
		controller: window.app.news.Controller
	###
	streetsnap:
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