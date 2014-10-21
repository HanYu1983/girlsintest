
(function(){

	var angularApp = angular.module('app', [])
	angularApp.config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/street', {
				templateUrl: 'street.html',
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);
	
	angularApp.directive('menu', function(){
		return {
			restrict: 'E',
			templateUrl: 'menu.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
			
			}
		};
	});
	
	angularApp.directive('streetsnap', function(){
		return {
			restrict: 'E',
			templateUrl: 'streetSnapContent.html',
			replace: true,
			transclude: true,
			link : function(scope, element, attrs) {
				var view = app.view.v_streetSnapContent(element)
				app.controller.c_streetSnapContent(view)
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