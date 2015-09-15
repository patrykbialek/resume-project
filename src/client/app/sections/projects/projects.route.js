(function () {
    'use strict';

    angular
        .module('app.projects')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());    }

    function getStates() {
        return [
            {
                state: 'projects',
                abstract: true,
                config: {
                    templateUrl: 'app/sections/projects/projects.html',
                    url: '/projects'
                }
            },
            {
                state: 'projects.list',
                config: {
                    controller: 'ProjectList',
                    controllerAs: 'list',
                    settings: {
                        nav: 3,
                        icon: 'assignment_turned_in'
                    },
                    templateUrl: 'app/sections/projects/projects.list.html',
                    title: 'Projects',
                    url: '/list'
                }
            },
            {
                state: 'projects.detail',
                config: {
                    controller: 'ProjectDetail',
                    controllerAs: 'detail',
                    templateUrl: 'app/sections/projects/projects.detail.html',
                    title: 'Projects',
                    url: '/:name'
                }
            },
        ];
    }
})();
