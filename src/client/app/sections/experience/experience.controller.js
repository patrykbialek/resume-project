(function () {
    'use strict';

    angular
        .module('app.experience')
        .controller('Experience', Experience);

    /* @ngInject */
    function Experience($mdDialog, $scope, common, dataservice) {
        /* jshint validthis: true */
        var vm = this;
        var $timeout = common.$timeout;

        vm.experience = undefined;
        vm.experiences = [];
        vm.isBusy = true;
        vm.title = 'Professional Experience';

        vm.gotoExperience = gotoExperience;

        activate();

        ////////////////

        function activate() {
            getExperiences();
        }

        function close() {
            $mdDialog.cancel();
        }

        function getExperiences() {
            return dataservice.getExperiences()
                .then(function (data) {
                    vm.experiences = data;

                    // Give time to load custom theme
                    $timeout(function () {
                        vm.isBusy = false;
                    }, 300);
                });
        }

        function gotoExperience($event, item) {
            $mdDialog.show({
                clickOutsideToClose: true,
                //controller: 'ExperienceDetail',
                targetEvent: $event,
                locals: {
                    experience: item,
                    close: function() {$mdDialog.cancel();}
                },
                controller: angular.noop,
                controllerAs: 'detail',
                bindToController: true,
                templateUrl: 'app/sections/experience/experience.detail.html'
            });
        }
    }
})();
