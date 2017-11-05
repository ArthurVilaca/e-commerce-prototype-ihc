(function() {
	'use strict';

	angular
		.module('app.routes')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$routeProvider', '$locationProvider'];

	function RoutesConfig($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/home', {
				templateUrl: 'pages/home.html',
				controller: 'HomeController',
				controllerAs: 'HomeController',
			})
			.when('/login', {
				templateUrl: 'pages/login.html',
				controller: 'LoginController',
				controllerAs: 'LoginController',
			})
			.when('/users', {
				templateUrl: 'pages/users.html',
				controller: 'UsersController',
				controllerAs: 'UsersController',
			})
			.otherwise({redirectTo: '/home'});
	}
}());