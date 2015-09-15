/* Help configure the state-base ui.router */
(function() {
    'use strict';

    angular
        .module('blocks.router')
        .provider('routerHelper', routerHelperProvider);

    //routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
    /* @ngInject */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        /* jshint validthis:true */
        var config = {
            docTitle: undefined,
            resolveAlways: {}
        };

        //It is off since github pages do not support is
        $locationProvider.html5Mode(true);

        this.configure = function(cfg) {
            angular.extend(config, cfg);
        };

        this.$get = RouterHelper;
        //RouterHelper.$inject = ['$rootScope', '$state', 'authService', 'logger'];
        /* @ngInject */
        function RouterHelper($rootScope, $state, authService, logger) {
            var handlingStateChangeError = false;
            var hasOtherwise = false;
            var stateCounts = {
                errors: 0,
                changes: 0
            };

            var service = {
                configureStates: configureStates,
                getStates: getStates,
                stateCounts: stateCounts
            };

            init();

            return service;

            ///////////////

            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    state.config.resolve =
                        angular.extend(state.config.resolve || {}, config.resolveAlways);
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            function handleRoutingErrors() {
                // Route cancellation:
                // On routing error, go to the dashboard.
                // Provide an exit clause if it tries to do it twice.
                $rootScope.$on('$stateChangeError',
                    function(event, toState, toParams, fromState, fromParams, error) {
                        if (handlingStateChangeError) {

                            return;
                        }
                        stateCounts.errors++;
                        handlingStateChangeError = true;
                        var destination = (toState &&
                            (toState.title || toState.name || toState.loadedTemplateUrl)) ||
                            'unknown target';
                        var msg = 'Error routing to ' + destination + '. ' +
                            (error.data || '') + '. <br/>' + (error.statusText || '') +
                            ': ' + (error.status || '');
                        logger.warning(msg, [toState]);
                        $state.go('profile');
                    }
                );
            }

            function getStates() { return $state.get(); }

            function updateDocTitle() {
                $rootScope.$on('$stateChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams) {
                        var auth = authService.getAuth();

                        stateCounts.changes++;
                        handlingStateChangeError = false;
                        var title = config.docTitle + ' ' + (toState.title || '');
                        $rootScope.title = title; // data bind to <title>
                        $rootScope.isIntro = $state.current.intro;
                        $rootScope.currentState = $state.current.title;

                        auth.$onAuth(function(authData) {
                            if (authData) {
                                $rootScope.isAuth = true;
                            }
                        });
                    }
                );
            }

            function checkAuthorisation() {
                $rootScope.$on('$stateChangeStart',
                    function(event, toState, toParams, fromState, fromParams) {
                        var auth = authService.getAuth();
                        //$rootScope.isIntro = $state.current.intro;

                        auth.$onAuth(function(authData) {
                            if (authData === null) {
                                $state.go('intro');
                            }
                        });
                    }
                );
            }

            function init() {
                handleRoutingErrors();
                updateDocTitle();
                checkAuthorisation();
            }
        }
    }
})();
