(function () {
    'use strict';

    angular
        .module('app.intro')
        .controller('Enter', Enter);

    /* @ngInject */
    function Enter($mdDialog, $state, authService, common, config) {
        /* jshint validthis: true */
        var vm = this;
        var auth = authService.getAuth();
        var startState = config.startState;
        var $timeout = common.$timeout;
        
        vm.cancel = cancel;
        vm.enter = enter;
        vm.errorMessage = undefined;
        vm.isBusy = false;
        vm.user = {};
        
        ////////////////
        
        function cancel() {
            $mdDialog.cancel();
        }
        
        function enter() {
            setBusyFlag(true);
            
            authService.login(vm.user)
                .then(function (response) {
                    cancel();
                    gotoStart();
                }).catch(function (error) {
                    showErrorMessage(error.code, error.message);
                    setBusyFlag(false);
                });
        }
        
        function gotoStart() {
            $state.go(startState);
        }
        
        function setBusyFlag(flag) {
            vm.isBusy = flag || false;
            
            return vm.isBusy;
        }
        
        function showErrorMessage(type, message) {
            var messages = {
                INVALID_PASSWORD: message || 'Password incorrect. I cannot let You in.',
                DEFAULT: 'Something\'s wrong here. Try again.'
            };
            
            vm.errorMessage = messages[type] || messages['DEFAULT'];
            
            $timeout(function () {
                vm.errorMessage = '';
            }, 5000);
            
            return vm.errorMessage;
        }
    }
})();
