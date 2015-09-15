(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('emailService', emailService);

    /* @authService */
    function emailService($http, common, config) {
        /* jshint -W117, -W030 */
        var $q = common.$q;
        var service = {
            send: send
        };
        
        return service;
        
        ////////////////
        
        function send(message) {
            var deferred = $q.defer();
            
            $http({
                url: config.contactUrl,
                data: $.param({
                    email: message.email,
                    subject: message.subject,
                    message: message.message
                }),
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).success(function (response) {
                deferred.resolve(response);
            }).error(function (err, status) {
                deferred.reject(err);
            });
            
            return deferred.promise;
        }
    }
})();
