/* jshint -W117, -W030 */
describe('Projects project.detail', function () {
    this.timeout(15000);    
    var controller, stateParams;
    var views = {
        detail: 'app/sections/projects/projects.detail.html'
    };

    beforeEach(function () {
        bard.appModule('app.projects');
        bard.inject(this, '$controller', '$q', '$rootScope', '$state', '$templateCache', 'dataservice');
        $templateCache.put(views.detail, '');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getProject').
             returns($q.when(mockData.getProject));
        $state.transitionTo = sinon.spy();
        stateParams = {name: 'project1'};
        controller = $controller('ProjectDetail', { $stateParams: stateParams });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('ProjectDetail controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.be.not.empty;
            });

            it('should have project defined', function () {
                expect(controller.project).to.be.not.empty;
            });
        });

        describe('after goBack button pressed', function () {
            it('should go to project list state', function () {
                controller.goBack();
                $rootScope.$apply();

                expect($state.transitionTo).calledWith('projects.list');
            });
        });
    });
});
