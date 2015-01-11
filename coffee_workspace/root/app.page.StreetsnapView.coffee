class window.app.page.StreetsnapView extends vic.mvc.View	
	constructor: ( elem ) ->
		super elem
		@dataDTO = elem.__dataDTO__
		@mc_sideContainer = elem.find '#mc_sideContainer'
		@mc_bottomContainer = elem.find '#mc_bottomContainer'
		@mc_historyContainer = elem.find '#mc_historyContainer'
		@img_stylePicture = elem.find '#img_stylePicture'
		@btn_more = elem.find '#btn_more'
		
		console.log elem
		console.log @dataDTO
		
	addListener: ->
		self = this
		@mc_sideContainer.delegate 'img', 'click', -> 
			console.log 'onImgClick', 
				id:this.id 
				key:self.dataDTO.key
			self.event.trigger 'onImgClick', 
				id:this.id
				key:self.dataDTO.key
		@mc_bottomContainer.delegate 'img', 'click', -> 
			console.log 'onImgClick', 
				id:this.id 
				key:self.dataDTO.key
			self.event.trigger 'onImgClick', 
				id:this.id
				key:self.dataDTO.key
		@mc_historyContainer.delegate 'img', 'click', -> 
			console.log 'onImgHistoryClick', 
				id:this.id 
				key:self.dataDTO.key
			self.event.trigger 'onImgHistoryClick', 
				id:this.id
				key:self.dataDTO.key
		@img_stylePicture.click -> 
			console.log 'onImgClick', 
				id:this.id 
				key:self.dataDTO.key
			self.event.trigger 'onImgClick', 
				id:this.id
				key:self.dataDTO.key
		@btn_more.click -> 
			console.log 'onBtnMoreClick'
			self.event.trigger 'onBtnMoreClick'
		
	removeListener: ->
		@mc_sideContainer.undelegate 'img', 'click'
		@mc_bottomContainer.undelegate 'img', 'click'
		@mc_historyContainer.undelegate 'img', 'click'
		@img_stylePicture.off 'click'
		@btn_more.off 'click'