(function() {
    'use strict';

    angular.module('app', [
        'app.routes',
        'app.home',
        'app.sideNav',
        'app.login',
        'app.users',
        'app.service'
    ]);
    angular.module('app.routes', ['ngRoute', 'ngMaterial']);
    angular.module('app.home', []);
    angular.module('app.sideNav', []);
    angular.module('app.login', []);
    angular.module('app.users', []);
    angular.module('app.service', []);

    angular.module('app').controller('AppCtrl', function($scope, $location, $mdSidenav) {
        $scope.isSpecificPage = function() {
            return $location.path() == '/login'
        };

        $scope.openSideNav = function() {
            $mdSidenav('left').toggle();
        };
    });

    angular.module('app.home').controller('HomeController', function($scope) { });

    angular.module('app.sideNav').controller('SideNavCtrl', function($scope, $location, $mdSidenav) {
        $scope.toHome = function() {
            $location.path( "/home" );
            $mdSidenav('left').close();
        };

        $scope.toUsers = function() {
            $location.path( "/users" );
            $mdSidenav('left').close();
        };

        $scope.toLogin = function() {
            $location.path( "/login" );
            $mdSidenav('left').close();
        };
    });

    angular.module('app.login').controller('LoginController', function($scope, $location) {
        $scope.doLogin = function() {
            $location.path( "/home" );
        };
    });

    angular.module('app.users').controller('UsersController', function($scope, $rootScope, $location) {
        $scope.toHome = function() {
            $location.path( "/home" );
        };

        $scope.users = $rootScope.getData('users');
    });

})();