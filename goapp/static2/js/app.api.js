var app = app || {};
app.api = app.api || {};

(function(){

	var pkg = app.api
	var apipath = 'goapp/Func'
	
	function apiWithHost( host ){
		
		function queryStreetModel(data){
			data.cmd = 'QueryStreetModel'
			var promise = jQuery.Deferred()
			$.when($.ajax(host+apipath, {type:'post', data: data}))
				.done( function(data){
					promise.resolve(data)
				})
				.fail( function(err){
					promise.reject(err)
				})
			return promise
		}
		
		//goapp/Func?cmd=UpdateStreetModel&Caption=ddd&ModelKey=sdfa&Description=xxx&Photo1=xxx&Photo2=cccc

		// { Caption:"caption", ModelKey: "modelKey", Description: "Description", Tag: "Tag" }
		function createStreetModel(data){
			data.cmd = 'UpdateStreetModel'
			var promise = jQuery.Deferred()
			$.when($.ajax(host+apipath, {type:'post', data: data}))
				.done( function(data){
					promise.resolve(data)
				})
				.fail( function(err){
					promise.reject(err)
				})
			return promise
		}
		
		return {
			queryStreetModel: queryStreetModel,
			createStreetModel: createStreetModel,
			updateStreetModel: createStreetModel
		}
	}
	
	pkg.apiWithHost = apiWithHost

})()