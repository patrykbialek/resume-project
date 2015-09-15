/* jshint -W117, -W030 */
describe('Experience', function () {
    this.timeout(15000);    
    var controller, scope;
    var views = {
        detail: 'app/sections/projects/projects.detail.html'
    };

    beforeEach(function () {
        bard.appModule('app.experience');
        bard.inject(this, '$controller', '$mdDialog', '$q', '$rootScope', '$state',
            '$templateCache', '$timeout', 'dataservice');
        $templateCache.put(views.detail, '');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getExperiences').
            returns($q.when(mockData.getExperiences));
        sinon.spy($mdDialog, 'show');

        scope = $rootScope.$new();
        controller = $controller('Experience', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Experience controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.be.not.empty;
            });

            it('should have experiences defined', function () {
                expect(controller.experiences).to.be.not.empty;
            });

            it('should isBusy flag set to false after 300ms', function () {
                $timeout.flush(300);
                expect(controller.isBusy).to.be.false;
                $timeout.verifyNoPendingTasks();
            });
        });

        describe('after gotoExperience button pressed', function () {
            it('should open experience detail', function () {
                controller.gotoExperience();
                $rootScope.$apply();

                expect($mdDialog.show).to.have.been.calledOnce;
            });
        });
    });
});
