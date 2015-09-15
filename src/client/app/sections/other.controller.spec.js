/* jshint -W117, -W030 */
describe('Sections other', function () {
    this.timeout(15000);    
    var controller, scope;

    beforeEach(function () {
        bard.appModule('app.sections');
        bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getData').
            returns($q.when(mockData.getData()));

        scope = $rootScope.$new();
        controller = $controller('Other', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Other controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.have.length.above(0);
            });

            it('should have trainings defined', function () {
                expect(controller.trainings).to.be.not.undefined;
            });

            it('should have skills defined', function () {
                expect(controller.skills).to.have.length.above(0);
            });

            it('should have languages defined', function () {
                expect(controller.languages).to.be.not.undefined;
            });

            it('should have interests defined', function () {
                expect(controller.interests).to.have.length.above(0);
            });
        });
    });
});
