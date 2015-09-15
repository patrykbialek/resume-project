/* jshint -W117, -W030 */
describe('Layout main', function () {
    this.timeout(15000);    
    var controller, scope;

    beforeEach(function () {
        module('app.layout', bard.fakeToastr);
        bard.inject(this, '$controller', '$q', '$location', '$mdBottomSheet',
            '$rootScope', '$state', '$timeout', 'authService', 'dataservice', 'routerHelper');
    });

    beforeEach(function () {
        routerHelper.configureStates(mockData.getMockStates(), '/experience');

        sinon.stub(dataservice, 'getData').
            returns($q.when(mockData.getData()));

        sinon.spy($mdBottomSheet, 'show');
        sinon.spy(authService, 'logout');

        scope = $rootScope.$new();
        controller = $controller('Main', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Main controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        it('should have isCurrent() for /experience to return `current`', function () {
            $state.go('experience');
            expect(controller.isCurrent($state.current)).to.equal('current');
        });

        it('should have isCurrent() for /faq to return `current`', function () {
            $state.go('faq');
            expect(controller.isCurrent($state.current)).to.equal('current');
        });

        it('should have isCurrent() for non route not return `current`', function () {
            $location.path('/invalid');
            expect(controller.isCurrent({ title: 'invalid' })).not.to.equal('current');
        });

        describe('after activate', function () {
            it.skip('should have resumeLink defined', function () {
                expect(controller.resumeLink).to.be.not.equal('/');
            });

            it('should isBusy flag set to false', function () {
                expect(controller.isBusy).to.be.false;
            });
        });

        describe('after showBottom is pressed', function () {
            it('should have bottom sheet open', function () {
                controller.showBottomSheet();

                expect($mdBottomSheet.show).to.have.been.called;
            });
        });

        describe('after logout is pressed', function () {
            it('should call logout method', function () {
                controller.logout();

                expect(authService.logout).to.have.been.called;
            });
        });
    });
});
