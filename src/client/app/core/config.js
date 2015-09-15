(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }
    /* jshint -W101 */
    var config = {
        appErrorPrefix: '[RP Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Patryk Białek Resume', //appTitle: 'Resume Project',
        imageBasePath: '/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg',
        updated: '14/09/2015',
        contactUrl: 'https://formspree.io/patryk.b@me.com',
        userName: 'resume-project@patrykbe.pl',
        dbUrl: 'https://resume-project.firebaseio.com', // password: resume
        startState: 'profile',
        //jscs:disable maximumLineLength
        themeColors: ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green',
            'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey']
    };

    core.value('config', config);

    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider', '$mdThemingProvider',
        'diagnostics', 'exceptionHandlerProvider', 'routerHelperProvider'];

    /* @ngInject */
    function configure($compileProvider, $logProvider, $mdThemingProvider,
                       diagnostics, exceptionHandlerProvider, routerHelperProvider) {

        diagnostics.enable = false;

        $compileProvider.debugInfoEnabled(false);

        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        configureStateHelper();
        configureTheming();

        ////////////////

        function configureStateHelper() {
            var resolveAlways = {
                /* @ngInject */
                ready: function (dataservice) {
                    return dataservice.ready();
                }
            };

            routerHelperProvider.configure({
                docTitle: 'Resume Project ',
                //resolveAlways: resolveAlways
            });
        }

        function configureTheming() {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue', {
                    'default': '800',
                    'hue-1': '50',
                    'hue-2': '500',
                    'hue-3': '800'
                })
                .accentPalette('orange', {
                    'default': '900',
                    'hue-1': '800'
                })
                .warnPalette('red', {
                    'default': '900',
                    'hue-1': '800'
                });

            $mdThemingProvider.alwaysWatchTheme(true);

            var colors = config.themeColors;

            colors.map(setTheme);

            function setTheme(color) {
                $mdThemingProvider.theme(color)
                    .primaryPalette(color, {
                        'default': '800'
                    });
            }
        }
    }
})();
