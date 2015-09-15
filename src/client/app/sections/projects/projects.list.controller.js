(function () {
    'use strict';

    angular
        .module('app.projects')
        .controller('ProjectList', ProjectList);

    /* @ngInject */
    function ProjectList($state, common, dataservice) {
        /* jshint validthis: true */
        var vm = this;
        var $timeout = common.$timeout;

        vm.isBusy = true;
        vm.projects = [];
        vm.title = 'Projects';

        vm.gotoProject = gotoProject;

        activate();

        ////////////////

        function activate() {
            getProjects();
        }

        function getProjects() {
            return dataservice.getProjects()
                .then(function (data) {
                    vm.projects = data;

                    // Give time to load custom theme
                    $timeout(function () {
                        vm.isBusy = false;
                    }, 300);

                    return vm.projects;
                });
        }

        function gotoProject(item) {
            $state.go('projects.detail', {
                name: item.$id
            });
        }
    }
})();
