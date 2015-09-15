/* jshint -W117, -W030 */
describe('Projects project.list', function () {
    this.timeout(15000);    
    var controller, scope;
    var views = {
        detail: 'app/sections/projects/projects.detail.html'
    };

    beforeEach(function () {
        bard.appModule('app.projects');
        bard.inject(this, '$controller', '$q', '$rootScope', '$state', '$templateCache', 'dataservice');
        $templateCache.put(views.detail, '');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getProjects').
            returns($q.when(mockData.getProjects));
        $state.go = sinon.spy();

        scope = $rootScope.$new();
        controller = $controller('ProjectList', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe.skip('ProjectList controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.have.length.above(0);
            });

            it('should have projects defined', function () {
                expect(controller.projects).to.be.not.undefined;
            });
        });

        describe('after record selection', function () {
            it('should go to project state with id equals 1', function () {
                controller.gotoProject({$id:1});
                $rootScope.$apply();

                expect($state.go).calledWith('projects.detail', { name: 1 });
            });
        });
    });
});
