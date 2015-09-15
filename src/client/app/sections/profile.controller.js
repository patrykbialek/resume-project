(function () {
    'use strict';

    angular
        .module('app.sections')
        .controller('Profile', Profile);

    /* @ngInject */
    function Profile(common, dataservice) {
        var vm = this;
        var $timeout = common.$timeout;

        vm.description = undefined;
        vm.isBusy = true;
        vm.title = 'Profile';

        ////////////////

        activate();

        function activate() {
            getProfile();
        }

        function getProfile() {
            return dataservice.getProfile()
                .then(function (data) {
                    vm.description = data.desc;

                    // Give time to load custom theme
                    $timeout(function () {
                        vm.isBusy = false;
                    }, 300);
                });
        }
    }
})();
