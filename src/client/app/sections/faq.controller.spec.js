/* jshint -W117, -W030 */
describe('Sections faq', function () {
    this.timeout(15000);    
    var controller, scope;

    beforeEach(function () {
        bard.appModule('app.sections');
        bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getQuestions').
            returns($q.when(mockData.getQuestions()));

        scope = $rootScope.$new();
        controller = $controller('Faq', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Faq controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.have.length.above(0);
            });

            it('should have questions defined', function () {
                expect(controller.questions).to.have.length.above(0);
            });
        });
    });
});
