class window.app.page.StreetsnapView extends vic.mvc.View	
	constructor: ( elem ) ->
		super elem
		@mc_sideContainer = elem.find '#mc_sideContainer'
		@mc_bottomContainer = elem.find '#mc_bottomContainer'
		@mc_historyContainer = elem.find '#mc_historyContainer'
		@img_stylePicture = elem.find '#img_stylePicture'
		@btn_more = elem.find '#btn_more'
		
	addListener: ->
		self = this
		@mc_sideContainer.delegate 'img', 'click', -> 
			console.log 'onImgClick', id:this.id 
			self.event.trigger 'onImgClick', id:this.id
		@mc_bottomContainer.delegate 'img', 'click', -> 
			console.log 'onImgClick', id:this.id 
			self.event.trigger 'onImgClick', id:this.id
		@mc_historyContainer.delegate 'img', 'click', -> 
			console.log 'onImgHistoryClick', id:this.id 
			self.event.trigger 'onImgHistoryClick', id:this.id
		@img_stylePicture.click -> 
			console.log 'onImgClick', id:this.id 
			self.event.trigger 'onImgClick', id:this.id
		@btn_more.click -> 
			console.log 'onBtnMoreClick'
			self.event.trigger 'onBtnMoreClick'
		
	removeListener: ->
		@mc_sideContainer.undelegate 'img', 'click'
		@mc_bottomContainer.undelegate 'img', 'click'
		@mc_historyContainer.undelegate 'img', 'click'
		@img_stylePicture.off 'click'
		@btn_more.off 'click'
		
		
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