class window.app.page.StreetsnapView extends vic.mvc.View	
	constructor: ( elem ) ->
		super elem
		
		
	###
		@txt_name = elem.find '#txt_name'
		@txt_date = elem.find '#txt_date'
		@txt_proContent = elem.find '#txt_proContent'
		@iframe_3dIframe = elem.find '#iframe_3dIframe'
		@img_stylePicture = elem.find '#img_stylePicture'
		@mc_sideContainer = elem.find '#mc_sideContainer'
		@mc_bottomContainer = elem.find '#mc_bottomContainer'
		@mc_sideContainer.empty()
		@mc_bottomContainer.empty()
		
		@setName 'vic'
		@setDate 'ddffffff'
		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
		@addSidePicture 'aaxx', 'images/streetSnap/test1.jpg'
		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
		@addBottomPicture 'aaxx', 'images/streetSnap/test1.jpg'
		
	setName: ( name ) ->
		@txt_name.html name
	
	setDate: ( date ) ->
		@txt_date.html date
		
	setStylePicture: ( pid, base64 ) ->
		@img_stylePicture.attr 'src', app.tool.getFullBase64str base64
	
	addSidePicture: ( pid, base64 ) ->
		img = "<img id='" + pid + "' class='relative f_left' src='" + app.tool.getFullBase64str base64 + "'/>"
		@mc_sideContainer.append img
		
	addBottomPicture: ( pid, base64 ) ->
		img = "<img id='" + pid + "' class='relative f_left' src='" + app.tool.getFullBase64str base64 + "'/>"
		@mc_bottomContainer.append img
		
	###	