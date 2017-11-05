(function() {
    'use strict';

    angular.module('app').run(function($rootScope) {
        var users = [{
                id: 1,
                name: 'Arthur Fonseca',
                registration_code: '00000000000',
                birth: '1996-02-26',
                password: '123'
            },{
                id: 1,
                name: 'Arthur Vinicius',
                registration_code: '11111111111',
                birth: '1996-02-26',
                password: '123'
            },{
                id: 1,
                name: 'Braulley Junio',
                registration_code: '22222222222',
                birth: '1996-02-26',
                password: '123'
            },{
                id: 1,
                name: 'Denner Parreiras',
                registration_code: '33333333333',
                birth: '1996-02-26',
                password: '123'
        }];

        var service = {
            users: users
        }

        $rootScope.getData = function(data) {
            return service[data];
        };

    });

})();