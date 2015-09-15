(function () {
    'use strict';

    angular
        .module('app.intro')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'intro',
                config: {
                    controller: 'Intro',
                    controllerAs: 'intro',
                    intro: true,
                    templateUrl: 'app/intro/intro.html',
                    title: 'Intro',
                    url: '/'
                }
            }
        ];
    }
})();
