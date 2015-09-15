(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('common', common);

    /* @ngInject */
    function common($q, $timeout) {

        var service = {
            $q: $q,
            $timeout: $timeout,
            setTheme: setTheme
        };

        return service;

        function setTheme(data) {
            //jscs:disable maximumLineLength
            var colors = ['Red', 'Green', 'Light-Blue', 'Purple', 'Orange', 'Brown', 'Grey', 'Blue-grey'];

            for (var i = 0, len = data.length; i < len; i += 1) {
                data[i].theme = colors[i];
            }

            return data;
        }
    }
})();
