/* jshint -W117, -W030 */
describe('Experience route', function () {
    describe('state', function () {
        this.timeout(15000);    
        var views = {
            experience: 'app/sections/experience/experience.html'
        };

        beforeEach(function () {
            module('app.experience', bard.fakeToastr);
            bard.inject(this, '$rootScope', '$state', '$templateCache');
            $templateCache.put(views.experience, '');
        });

        it('should map /experience route to intro View template', function (done) {
            expect($state.get('experience').templateUrl).to.equal(views.experience);
            done();
        });
    });
});
