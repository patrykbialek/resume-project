(function () {
    'use strict';

    angular
        .module('app.experience')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());    }

    function getStates() {
        return [
            {
                state: 'experience',
                config: {
                    controller: 'Experience',
                    controllerAs: 'experience',
                    templateUrl: 'app/sections/experience/experience.html',
                    title: 'Experience',
                    url: '/experience',
                    settings: {
                        nav: 2,
                        icon: 'work'
                    }
                }
            }
        ];
    }
})();
