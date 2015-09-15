(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Main', Main);

    /* @ngInject */
    function Main($mdBottomSheet, $mdSidenav, $scope, $state, authService, common, dataservice, routerHelper) {
        var vm = this;
        var auth = authService.getAuth();
        var $timeout = common.$timeout;

        vm.goToState = goToState;
        vm.isAuth = false;
        vm.isBusy = true;
        vm.isCurrent = isCurrent;
        vm.logout = logout;
        vm.openMenu = openMenu;
        vm.resumeLink = '/';
        vm.showBottomSheet = showBottomSheet;
        vm.toggleSidenav = toggleSidenav;
        vm.routes = routerHelper.getStates();

        activate();

        ////////////////

        function openMenu($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        }

        function activate() {
            getNavRoutes();
            hideSplash();
            checkAuth();

            // $scope.$on('$stateChangeSuccess', function () {
            //     if ($state.current.settings) {
            //         vm.isIntro = $state.current.settings.intro;
            //     }
            // });
        }

        function checkAuth() {
            auth.$onAuth(function (authData) {
                if (authData) {
                    vm.isAuth = true;

                    getResumeLink();
                }
            });
        }

        function getNavRoutes() {
            vm.navRoutes = vm.routes.filter(function (r) {
                return r.settings && r.settings.nav;
            }).sort(function (r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        function getResumeLink() {
            return dataservice.getData()
                .then(function (data) {
                    vm.resumeLink = data.resume;

                    return vm.resumeLink;
                });
        }

        function goToState(state) {
            $state.go(state);
        }

        function hideSplash() {
            vm.isBusy = false;
        }

        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return '';
            }
            var menuName = route.title;

            if ($state.current.title) {
                return $state.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
            }
        }

        function logout() {
            authService.logout();
        }

        function showBottomSheet() {
            $mdBottomSheet.show({
                templateUrl: 'app/layout/footer.html',
                controller: 'Footer'
            });
        }

        function toggleSidenav() {
            $mdSidenav('left').toggle();
        }
    }
})();
