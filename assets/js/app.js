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

        $scope.new = function() {
            $location.path( "/user/new" );
        };

        $scope.edit = function(id) {
            $location.path( "/user/" + id );
        };

        $scope.delete = function(id) {
            $scope.user = $rootScope.deleteData('users', id);
            $scope.users = $rootScope.getData('users');
        };

        $scope.users = $rootScope.getData('users');
    });

    angular.module('app.users').controller('UserController', function($scope, $rootScope, $location, $routeParams) {
        
        if($routeParams.id) {
            $scope.user = $rootScope.getData('users', $routeParams.id);
            $scope.user._birth = new Date($scope.user.birth);
        }
        
        $scope.save = function() {
            $scope.user.birth = $rootScope.formatServerDate($scope.user._birth);
            $rootScope.saveData('users', $scope.user);
            $location.path( "/users" );
        };

    });

})();