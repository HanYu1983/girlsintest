class window.app.page.MenubarView extends window.vic.mvc.View
	addListener: ->
		onBtnMouseOut = ->
			btnSelf = $ this;
			btnOver = btnSelf.find '.navover'
			btnOver.animate width:'0px', 300;
			
		onBtnMouseOver = ->
			btnSelf = $ this;
			btnOver = btnSelf.find '.navover'
			btnOver.animate width:'120px', 300;
			
		self = this
		@_elem.delegate 'div', 'click', -> self.event.trigger 'onMenubarBtnClick', this.id
		@_elem.delegate 'div', 'mouseover', onBtnMouseOver
		@_elem.delegate 'div', 'mouseout', onBtnMouseOut
		
	removeListener: ->
		@_elem.undelegate 'div', 'click'
		@_elem.undelegate 'div', 'mouseover'
		@_elem.undelegate 'div', 'mouseout'