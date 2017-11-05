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
			.when('/clients', {
				templateUrl: 'pages/clients.html',
				controller: 'ClientsController',
				controllerAs: 'ClientsController',
			})
			.when('/client/new', {
				templateUrl: 'pages/client.html',
				controller: 'ClientController',
				controllerAs: 'ClientController',
			})
			.when('/client/:id', {
				templateUrl: 'pages/client.html',
				controller: 'ClientController',
				controllerAs: 'ClientController',
			})
			.when('/products', {
				templateUrl: 'pages/products.html',
				controller: 'ProductsController',
				controllerAs: 'ProductsController',
			})
			.when('/product/new', {
				templateUrl: 'pages/product.html',
				controller: 'ProductController',
				controllerAs: 'ProductController',
			})
			.when('/product/:id', {
				templateUrl: 'pages/product.html',
				controller: 'ProductController',
				controllerAs: 'ProductController',
			})
			.otherwise({redirectTo: '/home'});
	}
}());