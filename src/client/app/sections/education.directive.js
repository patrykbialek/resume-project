(function () {
    'use strict';

    angular
        .module('app.sections')
        .directive('pbEducation', pbEducation);

    /* @ngInject */
    function pbEducation() {
        var directive = {
            bindToController: true,
            controller: EducationController,
            controllerAs: 'education',
            replace: true,
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/sections/education.html'
        };

        /* @ngInject */
        function EducationController(dataservice) {
            var vm = this;

            vm.isBusy = true;
            vm.schools = [];
            vm.title = 'Education';

            activate();

            ////////////////

            function activate() {
                getSchools();
            }

            function getSchools() {
                return dataservice.getEducation()
                    .then(function (data) {
                        vm.schools = data;
                        vm.isBusy = false;
                    });
            }
        }

        return directive;
    }
})();
