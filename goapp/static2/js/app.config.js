var app = app || {};
app.config = app.config || {};
app.config.MODEL_HEAD = 'MODEL_HEAD';
app.config.MODEL_STYLE = 'MODEL_STYLE';
app.config.MODEL_SIDE = 'MODEL_SIDE';
app.config.MODEL_NORMAL = 'MODEL_NORMAL';
app.config.typeMapping = {
	'-1':app.config.MODEL_HEAD,
	'-2':app.config.MODEL_STYLE,
	'-3':app.config.MODEL_SIDE,
	'0':app.config.MODEL_NORMAL
};

app.config.getTypeCode = function( type ){
	for( var k in app.config.typeMapping ){
		if( app.config.typeMapping[k] == type )	return k;
	}
	throw ( 'invalid type: ' + type );
}