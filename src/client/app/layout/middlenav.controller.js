(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('MiddleNav', MiddleNav);

    /* @ngInject */
    function MiddleNav($scope, $state, routerHelper) {
        var vm = this;
        var currentStateNav;

        vm.currentState = '';
        vm.isMouseEnterOnNext = false;
        vm.isMouseEnterOnPrevious = false;
        vm.routes = routerHelper.getStates();
        vm.isIntro = false;

        vm.previousState = {};
        vm.nextState = {};

        vm.gotoPrevious = gotoPrevious;
        vm.gotoNext = gotoNext;

        activate();

        ////////////////

        function activate() {
            getNavRoutes();

            $scope.$on('$stateChangeSuccess', function () {
                if ($state.current.settings) {
                    currentStateNav = $state.current.settings.nav;
                    vm.isIntro = $state.current.settings.intro;

                    returnCurrentState();
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

        function gotoPrevious() {
            $state.go(vm.previousState.state);
        }

        function gotoNext() {
            $state.go(vm.nextState.state);
        }

        function returnCurrentState() {
            var data = vm.navRoutes;
            vm.previousState.state = '';
            vm.nextState.state = '';
            vm.isMouseEnterOnNext = false;
            vm.isMouseEnterOnPrevious = false;

            for (var i = 0, len = data.length; i < len; i += 1) {

                if (data[i].settings.nav === (parseInt(currentStateNav) - 1)) {
                    vm.previousState.state = data[i].name;
                    vm.previousState.label = data[i].title;
                }

                if (data[i].settings.nav === (parseInt(currentStateNav) + 1)) {
                    vm.nextState.state = data[i].name;
                    vm.nextState.label = data[i].title;
                }
            }
        }
    }

})();
