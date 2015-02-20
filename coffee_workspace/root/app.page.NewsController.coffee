class window.app.page.NewsController extends vic.mvc.Controller
	applyTemplate: ([ id ], callback)->
		callback
			title:'title'
			date:'date'
			sideList:[{path:''}, {path:''}]
			content:'content'
			from:'from'