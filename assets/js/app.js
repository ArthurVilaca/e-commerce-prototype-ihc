(function() {
    'use strict';

    angular.module('app', [
        'app.routes',
        'app.home',
        'app.sideNav'
    ]);
    angular.module('app.routes', ['ngRoute', 'ngMaterial']);
    angular.module('app.home', []);
    angular.module('app.sideNav', []);

    angular.module('app').controller('AppCtrl', function($scope, $location, $mdSidenav) {
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
    });

})();