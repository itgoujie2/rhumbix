angular.module('acunews', ['mainModule', 'ngRoute', 'ngAnimate', 'treasure-overlay-spinner', 'ngSanitize'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				templateUrl: '/views/main.html', 
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})

		$locationProvider.html5Mode(true);
	})