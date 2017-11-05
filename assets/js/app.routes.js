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
			.when('/user/new', {
				templateUrl: 'pages/user.html',
				controller: 'UserController',
				controllerAs: 'UserController',
			})
			.when('/user/:id', {
				templateUrl: 'pages/user.html',
				controller: 'UserController',
				controllerAs: 'UserController',
			})
			.when('/ecommerce', {
				templateUrl: 'pages/ecommerce/ecommerce.html',
				controller: 'ECommerceController',
				controllerAs: 'ECommerceController',
			})
			.otherwise({redirectTo: '/home'});
	}
}());