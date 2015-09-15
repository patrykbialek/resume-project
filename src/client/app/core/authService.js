(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('authService', authService);

    /* @authService */
    function authService(common, config, $firebaseAuth) {
        /* jshint -W117, -W030 */
        var ref = new Firebase(config.dbUrl);
        var $q = common.$q;

        var service = {
            getRef: getRef,
            getAuth: getAuth,
            login: login,
            logout: logout
        };

        return service;

        ////////////////

        function getRef() {
            return ref;
        }

        function getAuth() {
            return $firebaseAuth(ref);
        }

        function login(user) {
            var deferred = $q.defer();
            var auth = getAuth();

            auth.$authWithPassword({
                email: config.userName,
                password: user.password
            }).then(function (authData) {
                deferred.resolve(authData);
            }).catch(function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function logout() {
            ref.unauth();
        }
    }
})();
