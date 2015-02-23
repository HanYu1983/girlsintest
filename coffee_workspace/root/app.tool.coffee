app.tool ?= {}
app.tool.getFullBase64str = ( base64str ) ->
	'data:image/png;base64,' + base64str
app.tool.getFullDay = ( unixtime ) ->
	date = new Date( unixtime * 1000 );
	date.getFullYear() + '/' + ( date.getMonth() + 1 ) + '/' + date.getDate()
app.tool.getUnixTimeByYMD = ( year, month, day ) ->
	datum = new Date( Date.UTC year, month-1, day, 0, 0, 0 )
	datum.getTime() / 1000
app.tool.getUnixTime = () ->
	Math.round((new Date()).getTime() / 1000)