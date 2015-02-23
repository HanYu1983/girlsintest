class window.app.page.StreetsnapView extends vic.mvc.View	
	constructor: ( elem ) ->
		super elem
		@dataDTO = elem.__dataDTO__
		@mc_sideContainer = elem.find '#mc_sideContainer'
		@mc_bottomContainer = elem.find '#mc_bottomContainer'
		@mc_historyContainer = elem.find '#mc_historyContainer'
		@img_stylePicture = elem.find '#img_stylePicture'
		@btn_more = elem.find '#btn_more'
		@btn_share = elem.find '#btn_share'
		
		###
		fbcon = elem.find '#fbcommentContainer'
		fbcomment = ( $ '#fbcomment' ).clone true
		fbcomment.attr 'data-href', window.location.href
		fbcon.append fbcomment
		###
		
	addListener: ->
		self = this
		@mc_sideContainer.delegate 'img', 'click', -> 
			self.event.trigger 'onImgClick', 
				id:this.id
				key:self.dataDTO.key
		@mc_bottomContainer.delegate 'img', 'click', -> 
			self.event.trigger 'onImgClick', 
				id:this.id
				key:self.dataDTO.key
		@mc_historyContainer.delegate 'img', 'click', -> 
			self.event.trigger 'onImgHistoryClick', 
				id:this.id
				key:self.dataDTO.key
		@btn_more.click -> 
			self.event.trigger 'onBtnMoreClick'
			
		@btn_share.click ->
			self.event.trigger 'onBtnShareClick', 
				key:self.dataDTO.key
		
	removeListener: ->
		@mc_sideContainer.undelegate 'img', 'click'
		@mc_bottomContainer.undelegate 'img', 'click'
		@mc_historyContainer.undelegate 'img', 'click'
		@btn_more.off 'click'
		@btn_share.off 'click'