(function() {
    'use strict';

    angular.module('app', [
        'app.routes',
        'app.home',
        'app.sideNav',
        'app.login',
        'app.users',
        'app.service',
        'app.ecommerce'
    ]);
    angular.module('app.routes', ['ngRoute', 'ngMaterial']);
    angular.module('app.home', []);
    angular.module('app.sideNav', []);
    angular.module('app.login', []);
    angular.module('app.users', []);
    angular.module('app.service', []);
    angular.module('app.ecommerce', []);

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

        $scope.toECommerce = function() {
            $location.path( "/ecommerce" );
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

    angular.module('app.ecommerce').controller('ECommerceController', function($scope, $rootScope, $mdDialog, $mdToast) {
        $scope.products = $rootScope.getData('products');
        
        $scope.addToCart = function(product) {
            product.id = undefined;
            $rootScope.saveData('cart', angular.copy(product));
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Item adicionado com sucesso!')
                    .hideDelay(3000)
            );
        };

        $scope.openCart = function(ev) {
            $mdDialog.show({
                controller: 'CartController',
                templateUrl: 'pages/ecommerce/cart.modal.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true
              })
                .then(function(answer) {
                    
                }, function() {
                });
        };

    });

    angular.module('app.ecommerce').controller('CartController', function($scope, $rootScope) {
        $scope.cart = $rootScope.getData('cart');

        $scope.totalCard = function() {
            var total = 0;
            for(var i in $scope.cart) {
                total += $scope.cart[i].price;
            }
            return $rootScope.formatNumber(total);
        };

        $scope.removeFromCart = function(id) {
            $rootScope.deleteData('cart', id);
            $scope.cart = $rootScope.getData('cart');
        };

    });

})();