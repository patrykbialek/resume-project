(function () {
    'use strict';

    angular
        .module('app.sections')
        .controller('Other', Other);

    /* @ngInject */
    function Other(common, dataservice) {
        var vm = this;
        var $timeout = common.$timeout;

        vm.isBusy = true;
        vm.title = 'Other';

        vm.trainings = [];
        vm.skills = {};
        vm.languages = [];
        vm.interests = {};

        activate();

        ////////////////

        function activate() {
            getData();
        }

        function getData() {
            return dataservice.getData()
                .then(function (data) {
                    vm.trainings = data.trainings;
                    vm.skills = data.skills;
                    vm.languages = data.languages;
                    vm.interests = data.interests;

                    // Give time to load custom theme
                    $timeout(function () {
                        vm.isBusy = false;
                    }, 300);
                });
        }
    }
})();
