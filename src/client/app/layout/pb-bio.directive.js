(function () {
    'use strict';

    angular
        .module('app.layout')
        .directive('pbBio', pbBio);

    /* @ngInject */
    function pbBio() {
        var directive = {
            bindToController: true,
            controller: BioController,
            controllerAs: 'bio',
            replace: true,
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/layout/pb-bio.html'
        };

        /* @ngInject */
        function BioController(authService, config, dataservice) {
            var vm = this;
            var auth = authService.getAuth();

            vm.bio = [];
            vm.title = 'Bio';

            activate();

            function activate() {
                auth.$onAuth(function (authData) {
                    if (authData) {
                        getBio();
                    }
                });
            }

            function getBio() {
                return dataservice.getBio()
                    .then(function (data) {
                        vm.bio = data;
                    });
            }
        }

        return directive;
    }
})();
