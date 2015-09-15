(function () {
    'use strict';

    angular
        .module('app.intro')
        .controller('Contact', Contact);

    /* @ngInject */
    function Contact($mdDialog, common, emailService) {
        /* jshint validthis: true */
        var vm = this;
        var $timeout = common.$timeout;

        vm.cancel = cancel;
        vm.contactMe = contactMe;
        vm.errorMessage = undefined;
        vm.isBusy = false;
        vm.message = {};

        ////////////////

        function cancel() {
            $mdDialog.cancel();
        }

        function contactMe() {
            setBusyFlag(true);

            var isEmailValid = validateEmail(vm.message.email);

            if (isEmailValid) {
                emailService.send(vm.message)
                    .then(function (response) {
                        cancel();
                        showSuccessMessage();
                    })
                    .catch(function (error) {
                        showErrorMessage('ERROR', error.error);
                        setBusyFlag(false);
                    });
            } else {
                showErrorMessage('EMAIL');
                setBusyFlag(false);
            }
        }

        function showErrorMessage(type, error) {
            var messages = {
                EMAIL: 'Your email looks strange, isn\'t it?',
                ERROR: error + '. Try again.',
                DEFAULT: 'An error occured. Try again.'
            };

            vm.errorMessage = messages[type] || messages['DEFAULT'];

            $timeout(function () {
                vm.errorMessage = '';
            }, 5000);

            return vm.errorMessage;
        }

        function showSuccessMessage(ev) {
            var message = {
                content: 'You sent the message. I will contact with You soon.',
                ok: 'Roger That'
            };

            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#successMessage')))
                    .clickOutsideToClose(true)
                    .title('Success')
                    .content(message.content)
                    .ariaLabel('Confirm message')
                    .ok(message.ok)
                    .targetEvent(ev)
                );
        }

        function setBusyFlag(flag) {
            vm.isBusy = flag || false;

            return vm.isBusy;
        }

        function validateEmail(val) {
            if (!val) {
                return false;
            }
            var re = /\S+@\S+\.\S+/;
            return re.test(val);
        }
    }
})();
