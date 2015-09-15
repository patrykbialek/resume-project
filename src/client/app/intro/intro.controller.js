(function () {
    'use strict';

    angular
        .module('app.intro')
        .controller('Intro', Intro);

    /* @ngInject */
    function Intro($mdDialog, $scope, authService, dataservice) {
        var vm = this;

        vm.gotoContactForm = gotoContactForm;
        vm.gotoEnterForm = gotoEnterForm;
        vm.intro = {};
        vm.isBusy = true;

        ////////////////

        activate();

        function activate() {
            getPublic();
            logout();
        }

        function getPublic() {
            return dataservice.getPublic()
                .then(function (data) {
                    vm.intro = data.intro;
                    vm.isBusy = false;
                });
        }

        function gotoContactForm() {
            $mdDialog.show({
                clickOutsideToClose: false,
                scope: $scope,        // use parent scope in template
                preserveScope: true,  // do not forget this if use parent scope
                templateUrl: 'app/intro/contact-form.html',
                controller: 'Contact'
            });
        }

        function gotoEnterForm() {
            $mdDialog.show({
                clickOutsideToClose: false,
                scope: $scope,        // use parent scope in template
                preserveScope: true,  // do not forget this if use parent scope
                templateUrl: 'app/intro/enter-form.html',
                controller: 'Enter'
            });
        }

        function logout() {
            authService.logout();
        }
    }
})();
