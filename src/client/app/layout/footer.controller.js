(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Footer', Footer);

    /* @ngInject */
    function Footer(dataservice) {
        /* jshint validthis: true */
        var vm = this;

        vm.activate = activate;
        vm.agreements = undefined;
        vm.author = undefined;
        vm.updated = undefined;

        activate();

        ////////////////

        function activate() {
            getPublic();
        }

        function getPublic() {
            return dataservice.getPublic()
                .then(function (pub) {
                    if (pub) {
                        vm.agreements = pub.agreements;
                        vm.updated = pub.updated;
                        vm.author = pub.author;
                    }
                });
        }
    }
})();
