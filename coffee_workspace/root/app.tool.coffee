app.tool ?= {}
app.tool.getFullBase64str = ( base64str ) ->
	'data:image/png;base64,' + base64str
app.tool.getFullDay = ( unixtime ) ->
	date = new Date( unixtime * 1000 );
	date.getFullYear() + '/' + ( date.getMonth() + 1 ) + '/' + date.getHours()