(function(){
	vic.facebook.init( '679171275511375', '', function(){
		console.log( 'facebook init complete');
	});
	
	var angularApp = angular.module('app', [])
	angularApp.config(['$routeProvider', function($routeProvider){
		$routeProvider.
            when('/street/search', {
                templateUrl: 'street-search.html'
            }).
			when('/street', {
				templateUrl: 'streetSnapContent.html',
			}).
			when('/street/id=:key', {
				templateUrl: 'streetSnapContent.html',
                controller: 'getParameters'
			}).
			when('/hot', {
				templateUrl: 'hotContent.html'
			}).
			when('/model', {
				templateUrl: 'modelContent.html'
			}).
			when('/index', {
				templateUrl: 'indexContent.html'
			}).
			otherwise({
				redirectTo: '/index'
			});
	}]);
	
	angularApp.controller('globalController', function($scope){
		var mc_loading = $('#mc_loading' );
		var bigPhotoObj = app.bigPhoto.controller( app.bigPhoto.view( $('#mc_bigPhotoRoot' )) );
		var streetSnapModel = app.streetSnap.model();
		var events = $( '<div></div>' );
		$scope.events = events;
		$scope.model = {
			streetSnap:streetSnapModel
		}
		$scope.openLoading = function(){
			mc_loading.fadeIn( 500 );
		}
		$scope.closeLoading = function(){
			mc_loading.fadeOut( 500 );
		}
		$scope.openBigPhoto = function( base64str ){
			bigPhotoObj.open( base64str );
		}
		$scope.closeBigPhoto = function(){
			bigPhotoObj.close();
		}
	});
    
	angularApp.controller('getParameters', function($scope, $routeParams){
		$scope.params = $routeParams
	});
	
	angularApp.directive('indexcontent', function(){
		return {
			restrict: 'E',
			templateUrl: 'indexContent.directive.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
				
				var view = app.indexContent.view(element)
				app.indexContent.controller(view)
				scope.events.trigger( 'jumpPageEvent', 'index' );
			}
		};
	});
	
	
	angularApp.directive('hotcontent', function(){
		return {
			restrict: 'E',
			templateUrl: 'hotContent.directive.html',
			replace: true,
			link : function(scope, element, attrs) {
				scope.events.trigger( 'jumpPageEvent', 'hot' );
			},
			controller: function($scope){
				$scope.title = '時尚變3d?…挺有趣的'
				$scope.description = '這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容這是內容'
				$scope.currentPage = 0
				
				function update(){
					$scope.title = $scope.currentPage + ':title'
					$scope.description = $scope.currentPage + ':description'
				}
				
				$scope.prevPage = function(){
					$scope.currentPage = $scope.currentPage - 1
					update()
				}
				$scope.nextPage = function(){
					$scope.currentPage = $scope.currentPage + 1
					update()
				}
			}
		};
	});
	
	angularApp.directive('streetsnap', function(){
		return {
			restrict: 'E',
			templateUrl: 'streetSnapContent.directive.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
				var view = app.streetSnap.view(element);
				var model = scope.model.streetSnap;
				app.streetSnap.controller(view, model, scope );
				scope.events.trigger( 'jumpPageEvent', 'street' );
			}
		};
	});

	angularApp.directive('streetsearch', function(){
		return {
			restrict: 'E',
			templateUrl: 'street-search.directive.html',
			replace: true,
			link : function(scope, element, attrs) {
				var model = scope.model.streetSnap;
				var view = app.streetSearch.view( element );
				var controller = app.streetSearch.controller( view, model );
				scope.events.trigger( 'jumpPageEvent', 'street' );
			},
			controller: function($scope){
				console.log('streetsearch controller')
			}
		};
	});
	
	angularApp.directive('modelcontent', function(){
		return {
			restrict: 'E',
			templateUrl: 'modelContent.directive.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
				
				scope.events.trigger( 'jumpPageEvent', 'model' );
			}
		};
	});
	
	angularApp.directive( 'headbar', function(){
		return{
			restrict: 'E',
			templateUrl:'headbar.directive.html',
			replace:true,
			link: function( scope, element, attrs ){
				var headerController = app.header.controller( app.header.view( element ), scope );
			}
		};
	});
	
	angularApp.directive( 'footbar', function(){
		return{
			restrict:'E',
			templateUrl:'footbar.directive.html',
			replace:true
		}
	});
	
	angularApp.directive('navbar', function(){
		return {
			restrict: 'E',
			templateUrl: 'navbar.directive.html',
			replace: true,
			link:function( scope, element, attrs ){
				var view = app.navbar.view( element );
				view.scope = scope;
				app.navbar.controller( view );
			}
		};
	});
	
	angularApp.directive( 'login', function(){
		return {
			restrict: 'E',
			templateUrl: 'login.directive.html',
			replace: true,
			link:function( scope, element, attrs ){
				console.log( 'login' );
			}
		}
	});
})();

(function(){
	var test = angular.module('test', []);
	test.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/test1/:id', {
				templateUrl: 'page.html',
				controller: 'PageController'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
	
	test.controller('PageController', function($scope, $routeParams){
		$scope.hello = 'hello gan' + $routeParams.id
		$scope.send = function(value){
			console.log('PageController:'+value)
		};
	});
	
	test.controller('PageSub1Controller', function($scope){
		$scope.currentTab = 1
		$scope.submit = function(){
			console.log(this)
			// parent scope
			$scope.send(this)
		};
		$scope.list = [0,1,2,3]
	});
	
	test.directive('hello', function() {
		return {
			restrict: 'E',
			template: '<span>Hi there {{title}} <div ng-transclude></div></span>',
			replace: true,
			transclude : true,
			link : function(scope, element, attrs) {
				scope.title = attrs.title
			}
		};
});
})();