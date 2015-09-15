/* jshint -W117, -W030 */
describe('Layout footer', function () {
    this.timeout(15000);
    var controller, scope;

    beforeEach(function () {
        bard.appModule('app.layout');
        bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getPublic').
            returns($q.when(mockData.getPublic()));

        scope = $rootScope.$new();
        controller = $controller('Footer', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Footer controller', function () {
        it('should be created successfully', function (done) {
            expect(controller).to.be.defined;
            done();
        });

        describe('after activate', function () {
            it('should have public defined', function () {
                expect(controller.agreements).to.be.not.undefined;
            });

            it('should have updated defined', function () {
                expect(controller.updated).to.have.length.above(0);
            });

            it('should have author defined', function () {
                expect(controller.author).to.have.length.above(0);
            });
        });
    });
});
