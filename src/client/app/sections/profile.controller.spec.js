/* jshint -W117, -W030 */
describe('Sections profile', function () {
    this.timeout(15000);    
    var controller, scope;

    beforeEach(function () {
        bard.appModule('app.sections');
        bard.inject(this, '$controller', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getProfile').
            returns($q.when(mockData.getProfile));

        scope = $rootScope.$new();
        controller = $controller('Profile', { $scope: scope });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Profile controller', function () {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function () {
            it('should have title defined', function () {
                expect(controller.title).to.have.length.above(0);
            });

            it('should have description defined', function () {
                expect(controller.description).to.be.not.undefined;
            });
        });
    });
});
