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
			.otherwise({redirectTo: '/home'});
	}
}());