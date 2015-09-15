/* jshint -W117, -W030 */
describe('Intro', function () {
    this.timeout(15000);
    describe('state', function () {
        var views = {
            intro: 'app/intro/intro.html'
        };

        beforeEach(function () {
            module('app.intro', bard.fakeToastr);
            bard.inject(this, '$location', '$rootScope', '$state', '$templateCache');
            $templateCache.put(views.intro, '');
        });

        it('should map / route to intro View template', function () {
            expect($state.get('intro').templateUrl).to.equal(views.intro);
        });

        it('should map state intro to url / ', function () {
            expect($state.href('intro', {})).to.equal('#/');
        });

        it('of intro should work with $state.go', function () {
            $state.go('intro');
            $rootScope.$apply();
            expect($state.is('intro'));
        });
    });
});
