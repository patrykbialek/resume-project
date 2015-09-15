/* jshint -W117, -W030 */
describe('Sections route', function () {
    describe('state', function () {
        this.timeout(15000);    
        var views = {
            faq: 'app/sections/faq.html',
            other: 'app/sections/other.html',
            profile: 'app/sections/profile.html'
        };

        beforeEach(function () {
            module('app.sections', bard.fakeToastr);
            bard.inject(this, '$location', '$rootScope', '$state', '$templateCache');
            $templateCache.put(views.faq, '');
            $templateCache.put(views.other, '');
            $templateCache.put(views.profile, '');
        });

        it('should map /faq route to intro View template', function () {
            expect($state.get('faq').templateUrl).to.equal(views.faq);
        });

        it('should map state intro to url /faq ', function () {
            expect($state.href('faq', {})).to.equal('/faq');
        });

        it('should map /other route to intro View template', function () {
            expect($state.get('other').templateUrl).to.equal(views.other);
        });

        it('should map state intro to url /other ', function () {
            expect($state.href('other', {})).to.equal('/other');
        });

        it('should map /profile route to intro View template', function () {
            expect($state.get('profile').templateUrl).to.equal(views.profile);
        });

        it('should map state intro to url /profile ', function () {
            expect($state.href('profile', {})).to.equal('/profile');
        });
    });
});
