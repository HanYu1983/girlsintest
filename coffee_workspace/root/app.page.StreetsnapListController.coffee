class window.app.page.StreetsnapListController extends vic.mvc.Controller
	applyTemplate: ( params, callback )->
		callback
			streetsnapList:[
				{
					name:'vic'
					date:'12321'
					imgStylePath:'images/streetSnap/test2.jpg'
					imgSideAPath:'images/streetSnap/test1.jpg'
					imgSideBPath:'images/streetSnap/test1.jpg'
					imgSideCPath:'images/streetSnap/test1.jpg'
				}
				{
					name:'vic'
					date:'12321'
					imgStylePath:'images/streetSnap/test2.jpg'
					imgSideAPath:'images/streetSnap/test1.jpg'
					imgSideBPath:'images/streetSnap/test1.jpg'
					imgSideCPath:'images/streetSnap/test1.jpg'
				}
			]