/* jshint -W117, -W030 */
describe('Intro enter', function () {
    this.timeout(15000);
    var controller, isBusy, message, startState;

    beforeEach(function () {
        bard.appModule('app.intro');
        bard.inject(this, '$controller', '$mdDialog', '$q', '$rootScope', '$state',
            'authService', 'config', 'emailService');
    });

    beforeEach(function () {
        sinon.spy($mdDialog, 'cancel');
        $state.go = sinon.spy();

        controller = $controller('Enter');

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Enter controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });
        
        describe('after Cancel button is pressed', function () {
            it('should close Enter dialog', function () {
                controller.cancel();

                expect($mdDialog.cancel).to.have.been.once;
            });
        });

        describe('after Enter button is pressed', function () {
            describe('with valid password', function () {
                beforeEach(function () {
                    enterFakeValid(true);
                    controller.enter();

                    $rootScope.$apply();

                    startState = config.startState;
                    isBusy = controller.isBusy;
                });

                it('should isBusy flag set to true', function () {
                    expect(isBusy).to.be.true;
                });

                it('should call login method', function () {
                    expect(authService.login).to.be.calledOnce;
                });

                it('should close Contact dialog', function () {
                    expect($mdDialog.cancel).to.have.been.called;
                });

                it('should go to start state', function () {
                    expect($state.go).calledWith(startState);
                });
            });

            describe('with invalid password', function () {
                beforeEach(function () {
                    enterFakeInvalid();
                    controller.enter();

                    $rootScope.$apply();

                    isBusy = controller.isBusy;
                    message = controller.errorMessage;
                });

                it('should isBusy flag set to false', function () {
                    expect(isBusy).to.be.false;
                });

                it('should message be displayed', function () {
                    expect(message).to.not.equal(undefined);
                });
            });
        });
    });

    function enterFakeInvalid() {
        sinon.stub(authService, 'login').returns($q.reject({
            code: 'INVALID_PASSWORD'
        }));
    }

    function enterFakeValid() {
        sinon.stub(authService, 'login').returns($q.when({
            response: true
        }));
    }
});
