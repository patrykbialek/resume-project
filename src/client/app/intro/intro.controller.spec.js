/* jshint -W117, -W030 */
describe('Intro', function () {
    var controller, scope;

    beforeEach(function () {
        bard.appModule('app.intro');
        bard.inject(this, '$controller', '$mdDialog', '$q', '$rootScope', 'dataservice', 'authService');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPublic').
            returns($q.when(mockData.getPublic()));
        sinon.spy(authService, 'logout');
        sinon.spy($mdDialog, 'show');

        scope = $rootScope.$new();
        controller = $controller('Intro', {
            $scope: scope
        });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe.skip('Intro controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have intro defined', function () {
                expect(controller.intro).to.have.length.above(0);
            });

            it('should have isBusy set to false', function () {
                expect(controller.isBusy).to.be.false;
            });

            it('should logout function been called once', function () {
                expect(authService.logout).to.have.been.calledOnce;
            });
        });

        describe('after ContactMe button pressed', function () {
            it('should have contact dialog open', function () {
                controller.gotoContactForm();

                expect($mdDialog.show).to.have.been.calledOnce;
            });
        });

        describe('after Enter button pressed', function () {
            it('should have enter dialog open', function () {
                controller.gotoEnterForm();

                expect($mdDialog.show).to.have.been.calledOnce;
            });
        });
    });
});
