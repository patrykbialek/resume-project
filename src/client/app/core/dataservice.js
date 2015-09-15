(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    /* @ngInject */
    function dataservice($firebaseArray, $firebaseObject, $q, common, config, exception, logger) {
        /* jshint validthis:true */
        var readyPromise;
        /* jshint -W117, -W030 */
        var ref = new Firebase(config.dbUrl);

        var service = {
            getBio: getBio,
            getData: getData,
            getExperiences: getExperiences,
            getPublic: getPublic,
            getProject: getProject,
            getProjects: getProjects,
            getProfile: getProfile,
            getQuestions: getQuestions,
            getEducation: getEducation,
            ready: ready
        };

        return service;

        function getBio() {
            var bio = ref.child('data/bio');

            return $firebaseArray(bio.orderByChild('order'))
                .$loaded()
                .then(function (bio) {
                    return $q.when(bio);
                });
        }

        function getData() {
            var data = ref.child('data');

            return $firebaseObject(data.orderByChild('order'))
                .$loaded()
                .then(function (data) {
                    return $q.when(data);
                });
        }

        function getProfile() {
            var profile = ref.child('data/profile');

            return $firebaseObject(profile.orderByChild('desc'))
                .$loaded()
                .then(function (profile) {
                    return $q.when(profile);
                });
        }

        function getPublic() {
            var pub = ref.child('public');

            return $firebaseObject(pub)
                .$loaded()
                .then(function (pub) {
                    return $q.when(pub);
                });
        }

        function getExperiences() {
            var experiences = ref.child('data/experience');

            return $firebaseArray(experiences.orderByChild('order'))
                .$loaded()
                .then(function (experiences) {
                    return $q.when(experiences);
                });
        }

        function getProject(item) {
            return getProjects()
                .then(function (data) {
                    var project = data.filter(function (p) {
                        return p.$id === item;
                    });

                    return project[0];
                });
        }

        function getProjects() {
            var projects = ref.child('data/projects');

            return $firebaseArray(projects.orderByChild('order'))
                .$loaded()
                .then(function (projects) {
                    var extendedProjects = common.setTheme(projects);

                    return $q.when(extendedProjects);
                });
        }

        function getQuestions() {
            var faq = ref.child('data/faq');

            return $firebaseArray(faq.orderByChild('order'))
                .$loaded()
                .then(function (faq) {
                    return $q.when(faq);
                });
        }

        function getEducation() {
            var education = ref.child('data/education');

            return $firebaseArray(education.orderByChild('order'))
                .$loaded()
                .then(function (education) {
                    return $q.when(education);
                });
        }

        function getReady() {
            if (!readyPromise) {
                // Apps often pre-fetch session data ('prime the app')
                // before showing the first view.
                // This app doesn't need priming but we add a
                // no-op implementation to show how it would work.
                logger.info('Primed the app data');
                readyPromise = $q.when(service);
            }

            return readyPromise;
        }

        function ready(promisesArray) {
            return getReady()
                .then(function () {
                    return promisesArray ? $q.all(promisesArray) : readyPromise;
                })
                .catch(exception.catcher('ready function failed'));
        }
    }
})();
