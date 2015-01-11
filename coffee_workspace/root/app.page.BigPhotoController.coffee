class window.app.page.BigPhotoController extends vic.mvc.Controller
	applyTemplate: ( tmpl, param, callback)->
		callback tmpl.tmpl url:param[0]