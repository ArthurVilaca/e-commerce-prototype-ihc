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
                id: 2,
                name: 'Arthur Vinicius',
                registration_code: '11111111111',
                birth: '1996-02-26',
                password: '123'
            },{
                id: 3,
                name: 'Braulley Junio',
                registration_code: '22222222222',
                birth: '1996-02-26',
                password: '123'
            },{
                id: 4,
                name: 'Denner Parreiras',
                registration_code: '33333333333',
                birth: '1996-02-26',
                password: '123'
        }];

        var service = {
            users: users
        }

        $rootScope.getData = function(data, id) {
            if(!id) {
                return service[data];
            }

            for(var i in service[data]) {
                if(service[data][i].id == id) {
                    return service[data][i];
                }
            }
        };

        $rootScope.deleteData = function(data, id) {
            if(!id) {
                return;
            }
            for(var i in service[data]) {
                if(service[data][i].id == id) {
                    return service[data].splice(i, 1);
                }
            }
        };

        $rootScope.saveData = function(data, object) {
            if(!object.id) {
                object.id = service[data].length + 1;
                return service[data].push(object);
            }
            
            for(var i in service[data]) {
                if(service[data][i].id == object.id) {
                    service[data][i] = object;
                    return;
                }
            }
        }

        $rootScope.formatNumber = function(number, decimalsLength, decimalSeparator, thousandSeparator) {
            var n = number,
                decimalsLength = isNaN(decimalsLength = Math.abs(decimalsLength)) ? 2 : decimalsLength,
                decimalSeparator = decimalSeparator == undefined ? "," : decimalSeparator,
                thousandSeparator = thousandSeparator == undefined ? "." : thousandSeparator,
                sign = n < 0 ? "-" : "",
                i = parseInt(n = Math.abs(+n || 0).toFixed(decimalsLength)) + "",
                j = (j = i.length) > 3 ? j % 3 : 0;

            return sign +
                (j ? i.substr(0, j) + thousandSeparator : "") +
                i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousandSeparator) +
                (decimalsLength ? decimalSeparator + Math.abs(n - i).toFixed(decimalsLength).slice(2) : "");
        };

        $rootScope.formatServerDate = function(date, format) {
            if (!(date == undefined)) {
                if (format=='dd/mm/yyyy') {
                    return $rootScope.pad(date.getDate()) + "/" + $rootScope.pad((date.getMonth()+1)) + "/" + date.getFullYear();
                }
                return date.getFullYear() + "-" + $rootScope.pad((date.getMonth()+1)) + "-" + $rootScope.pad(date.getDate());
            }
        };

        $rootScope.pad = function(n, width, z) {
            if (width == undefined) {
                width = 2;
            }
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        };

    });

})();