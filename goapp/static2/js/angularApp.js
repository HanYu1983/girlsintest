(function(){
	var angularApp = angular.module('app', [])
	angularApp.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/street', {
				templateUrl: 'streetSnapContent.html'
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
		var events = new vic.events.EventDispatcher();
		$scope.events = events;
		$scope.openLoading = function(){
			mc_loading.fadeIn( 500 );
		}
		$scope.closeLoading = function(){
			mc_loading.fadeOut( 500 );
		}
	});
	
	angularApp.directive('indexcontent', function(){
		return {
			restrict: 'E',
			templateUrl: 'indexContent.directive.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
				var view = app.indexContent.view(element)
				view.scope = scope;
				app.indexContent.controller(view)
				scope.events.dispatchEvent( new vic.events.Event( 'jumpPageEvent', 'index' ));
			}
		};
	});
	
	
	angularApp.directive('hotcontent', function(){
		return {
			restrict: 'E',
			templateUrl: 'hotContent.directive.html',
			replace: true,
			link : function(scope, element, attrs) {
				scope.events.dispatchEvent( new vic.events.Event( 'jumpPageEvent', 'hot' ));
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
				view.scope = scope;
				app.streetSnap.controller(view);
				scope.events.dispatchEvent( new vic.events.Event( 'jumpPageEvent', 'street' ));
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
				
				scope.events.dispatchEvent( new vic.events.Event( 'jumpPageEvent', 'model' ));
			}
		};
	});
	
	angularApp.directive( 'headbar', function(){
		return{
			restrict: 'E',
			templateUrl:'headbar.directive.html',
			replace:true
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