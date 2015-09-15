(function () {
    'use strict';

    angular
        .module('app.sections')
        .controller('Faq', Faq);

    /* @ngInject */
    function Faq(common, dataservice) {
        /* jshint validthis: true */
        var vm = this;
        var $timeout = common.$timeout;

        vm.isBusy = true;
        vm.questions = [];
        vm.title = 'Frequently Asked Questions';

        activate();

        ////////////////

        function activate() {
            getQuestions();
        }

        function getQuestions() {
            return dataservice.getQuestions()
                .then(function (data) {
                    vm.questions = data;

                    // Give time to load custom theme
                    $timeout(function () {
                        vm.isBusy = false;
                    }, 300);
                });
        }
    }
})();
