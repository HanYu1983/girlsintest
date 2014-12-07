var app = app || {};
app.api = app.api || {};

(function(){

	var pkg = app.api
	var apipath = 'goapp/Func'
	
	pkg.QueryStreetModel = 'QueryStreetModel'
	pkg.CreateStreetModel = 'UpdateStreetModel'
	pkg.UpdateStreetModel = 'UpdateStreetModel'
	pkg.AddPhotoToStreetModel = 'AddPhotoToStreetModel'
	pkg.QueryPhotoWithStreetModel = 'QueryPhotoWithStreetModel'
	pkg.DeletePhotoWithStreetModel = 'DeletePhotoWithStreetModel'
	
	function partial( fn ){
		var closure = Array.prototype.slice.call( arguments, 1 )
		return function(){
			var args = closure.concat( Array.prototype.slice.call( arguments, 0 ) )
			return fn.apply( null, args )
		}
	}

	function query( host, cmd, data ){
		data.cmd = cmd
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
	
	pkg.partial = partial
	pkg.query = query
/*	
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
*/
})()