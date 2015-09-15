/* jshint -W117, -W030 */
describe('Projects', function () {
    describe('state', function () {
        this.timeout(15000);
        var views = {
            detail: 'app/sections/projects/projects.detail.html',
            list: 'app/sections/projects/projects.list.html'
        };

        beforeEach(function () {
            module('app.projects', bard.fakeToastr);
            bard.inject(this, '$rootScope', '$state', '$templateCache');
            $templateCache.put(views.detail, '');
            $templateCache.put(views.list, '');
        });

        it('should map /detail route to intro View template', function () {
            expect($state.get('projects.detail').templateUrl).to.equal(views.detail);
        });

        it('should map state intro to url /projets ', function () {
            expect($state.href('projects.detail', {})).to.equal('/projects/');
        });

        it('should map /list route to intro View template', function () {
            expect($state.get('projects.list').templateUrl).to.equal(views.list);
        });

        it('should map state intro to url /projects/list ', function () {
            expect($state.href('projects.list', {})).to.equal('/projects/list');
        });
    });
});
