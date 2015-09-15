(function () {
    'use strict';

    angular
        .module('app.projects')
        .controller('ProjectDetail', ProjectDetail);

    /* @ngInject */
    function ProjectDetail($state, $stateParams, dataservice) {
        /* jshint validthis: true */
        var vm = this;

        vm.project = {};
        vm.title = undefined;

        vm.goBack = goBack;

        activate();

        ////////////////

        function activate() {
            getRequestedProject();
        }

        function getRequestedProject() {
            var item = $stateParams.name;

            if (item) {
                return dataservice.getProject(item)
                    .then(function (data) {
                        vm.title = data.name;
                        vm.project = data;
                    });
            }
        }

        function goBack() {
            $state.transitionTo('projects.list');
        }
    }
})();
