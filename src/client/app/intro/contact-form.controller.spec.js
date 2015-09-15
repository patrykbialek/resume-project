/* jshint -W117, -W030 */
describe('Intro contact', function () {
    this.timeout(15000);
    var controller, isBusy, message;

    beforeEach(function () {
        bard.appModule('app.intro');
        bard.inject(this, '$controller', '$mdDialog', '$q', '$rootScope', 'authService', 'emailService');
    });

    beforeEach(function () {
        sinon.spy($mdDialog, 'cancel');
        sinon.spy($mdDialog, 'show');
        contactFake(true);

        controller = $controller('Contact');

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Contact controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after Cancel button is pressed', function () {
            it('should close Enter dialog', function () {
                controller.cancel();

                expect($mdDialog.cancel).to.have.been.calledOnce;
            });
        });

        describe('after Contact button is pressed', function () {
            describe('with valid email address', function () {
                beforeEach(function () {
                    controller.message.email = 'john@doe.com';
                    controller.contactMe();

                    $rootScope.$apply();

                    isBusy = controller.isBusy;
                });

                it('should isBusy flag set to true', function () {
                    expect(isBusy).to.be.true;
                });

                it('should send email', function () {
                    expect(emailService.send).to.be.calledOnce;
                });

                it('should close Contact dialog', function () {
                    expect($mdDialog.cancel).to.have.been.called;
                });

                it('should show Confirm dialog', function () {
                    expect($mdDialog.show).to.have.been.called;
                });
            });

            describe('with invalid email address', function () {
                beforeEach(function () {
                    controller.message.email = 'john@doe';
                    controller.contactMe();

                    $rootScope.$apply();

                    isBusy = controller.isBusy;
                    message = controller.errorMessage;
                });

                it('should isBusy flag set to true', function () {
                    expect(isBusy).to.be.false;
                });

                it('should message be displayed', function () {
                    expect(message).to.not.equal(undefined);
                });
            });
        });
    });

    function contactFake(flag) {
        sinon.stub(emailService, 'send').returns($q.when({
            success: flag
        }));
    }
});
