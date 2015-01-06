window.vic = window.vic || {}
window.vic.tools = window.vic.tools || {}

class window.vic.tools.YearMonthDaySelect
	constructor: ( @slt_year, @slt_month, @slt_day, @data )->
		self = this
		@_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
		[0...@_month.length].map ( v ) -> self.slt_month.append ( '<option>' + ( v + 1 ) + '</option>' )
		[2014...1964].map ( v ) -> self.slt_year.append( '<option>' + v + '</option>' )
		self._setDay 1
	open: ->
		self = this
		@slt_month.change -> 
			m = this.value
			self._setDay m
	close: ->
		@slt_month.off 'change'
	_setDay: ( m ) ->
		@slt_day.empty()
		@slt_day.append ( '<option>' + ( v + 1 ) + '</option>' ) for v in [0...@_month[m - 1]]