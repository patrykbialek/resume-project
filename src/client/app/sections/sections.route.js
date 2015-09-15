(function() {
    'use strict';

    angular
        .module('app.sections')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());    }

    function getStates() {
        return [
            {
                state: 'faq',
                config: {
                    controller: 'Faq',
                    controllerAs: 'faq',
                    templateUrl: 'app/sections/faq.html',
                    title: 'FAQ',
                    url: '/faq',
                    settings: {
                        nav: 5,
                        icon: 'question_answer'
                    }
                }
            },
            {
                state: 'profile',
                config: {
                    controller: 'Profile',
                    controllerAs: 'profile',
                    templateUrl: 'app/sections/profile.html',
                    title: 'Profile',
                    url: '/profile',
                    settings: {
                        nav: 1,
                        icon: 'person'
                    }
                }
            },
            {
                state: 'other',
                config: {
                    controller: 'Other',
                    controllerAs: 'other',
                    templateUrl: 'app/sections/other.html',
                    title: 'Other',
                    url: '/other',
                    settings: {
                        nav: 4,
                        icon: 'school'
                    }
                }
            }
        ];
    }
})();
