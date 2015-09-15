/* jshint -W079 */
var mockData = (function () {
    return {
        getData: getData,
        getExperiences: getData().experience,
        getMockStates: getMockStates,
        getProfile: getData().profile,
        getProject: getData().projects['project1'],
        getProjects: getData().projects,
        getPublic: getPublic,
        getQuestions: getQuestions
    };

    function getData() {
        return {
            'bio': {
                'born': {
                    'icon': 'room',
                    'label': 'Born',
                    'name': 'July 1976',
                    'order': 2
                },
                'email': {
                    'email': true,
                    'icon': 'email',
                    'label': 'Email',
                    'name': 'patryk.b@me.com',
                    'order': 5
                },
                'family': {
                    'icon': 'people',
                    'label': 'Family',
                    'name': 'wife, two kids',
                    'order': 3
                },
                'name': {
                    'icon': 'person',
                    'label': 'Name',
                    'name': 'Patryk Białek',
                    'order': 1
                },
                'phone': {
                    'icon': 'call',
                    'label': 'Phone',
                    'name': '+48 510217852',
                    'order': 4
                }
            },
            'education': {
                'pr': {
                    'field': 'economy, speciality banking — MA',
                    'name': 'Politechnika Radomska',
                    'order': 1,
                    'when': '2001 - 2002'
                },
                'wsfib': {
                    'field': 'finance/banking, speciality banking — LIC',
                    'name': 'WSFiB w Radomiu',
                    'order': 2,
                    'when': '1999 - 2001'
                }
            },
            'experience': {
                'dps': {
                    'company': 'DPS Nad Potokiem, Radom',
                    'order': 4,
                    'position': 'IT Specialist',
                    'responsibilities': {
                        'res1': 'providing the soft and hardware support to internal users  ',
                        'res2': 'implementation of Płatnik solution '
                    },
                    'when': 'Oct 1998 - Jan 1999 (4 mths)'
                },
                'ing': {
                    'company': 'ING Nationale-Nederlanden, Warsaw',
                    'intro': '',
                    'order': 2,
                    'position': 'Business Analyst',
                    'responsibilities': {
                        'res1': 'coordinating the test processes',
                        'res2': 'testing provided system solutions ',
                        'res3': 'coordinating the projects tasks',
                        'res4': 'preparing project documentations',
                        'res5': 'reporting current progress of each project task ',
                        'res6': 'preparing the requirements analysis documents'
                    },
                    'when': 'Mar 2000 - Nov 2004 (4 yrs 9 mths)'
                },
                'komtech': {
                    'company': 'Komtech, Radom',
                    'order': 3,
                    'position': 'Service Desk Specialist',
                    'responsibilities': {
                        'res1': 'providing the support to external customers concerning hardware and software problems ',
                        'res2': 'solving current problems reported by customers'
                    },
                    'when': 'Feb 1999 - Feb 2000 (11 mths)'
                },
                'medicover': {
                    'company': 'Medicover, Warsaw',
                    'intro': 'My main task is taking care of main corporate systems.',
                    'order': 1,
                    'position': 'Application Support Team Lead',
                    'responsibilities': {
                        'res1': 'providing the support to internal clients from Poland, Romania and Hungary',
                        'res2': 'coordinating the project tasks/activities',
                        'res3': 'preparing the business requirements analysis documents',
                        'res4': 'coordinating the deployment process of corporate systems and other applications',
                        'res5': 'analysing and solving current production problems ',
                        'res6': 'manipulating database data (SQL)  ',
                        'res7': 'cooperating with foreign provider concerning solving the problems found on production environment ',
                        'res8': 'preparing some web-based solutions for internal clients which improve their work and make my team more effective',
                        'res9': 'preparing clickable prototypes of new modules or small applications (html, css, js)'
                    },
                    'when': 'Dec 2004 - present (10 yrs 10 mths)'
                }
            },
            'faq': {
                'faq01': {
                    'answer': 'If you have 10.000 PLN (gross) in your budget, I think we can talk.',
                    'label': 'Salary',
                    'order': 3,
                    'question': 'What salary are you interested in?'
                },
                'faq02': {
                    'answer': 'I need more challanges related solving problems through web developments. Now I can count on 80/20 - 80% of support and 20% of development. I want to reverse it into 20/80.',
                    'label': 'New job',
                    'order': 1,
                    'question': 'Why do you want to leave current position at Medicover?'
                },
                'faq03': {
                    'answer': 'I hope I will still have opportunity to deliver web content.',
                    'label': 'Plans',
                    'order': 2,
                    'question': 'Where do you see yourself in next 3 years?'
                },
                'faq04': {
                    'answer': 'JavaScript language provides the result quick. You can write something working using even notepad editor.',
                    'label': 'JavaScript',
                    'order': 7,
                    'question': 'Why JavaScript?'
                },
                'faq05': {
                    'answer': 'I am a person who hates waste the time. Web development with AngularJS makes life easier. You can provide the solution faster with less code lines written.',
                    'label': 'AngularJS',
                    'order': 8,
                    'question': 'For what do you like AngularJS?'
                },
                'faq06': {
                    'answer': 'In IT field I am present over 15 years now. I don\'t have any master of IT univeristy but I love that area.',
                    'label': 'IT area',
                    'order': 5,
                    'question': 'What about your IT knowledge?'
                },
                'faq07': {
                    'answer': 'I am a visual learner. I have some experience with coding on \'the dark side\' - backend (with Delphi and C#) and I realized that\'s not for me. I like create some code and see the result not only while debug or test process. Coding on the frontend gives a lot of fun not for me.',
                    'label': 'Frontend',
                    'order': 6,
                    'question': 'Why frontend?'
                },
                'faq08': {
                    'answer': 'Period of notice in my case is now 3 months. But I think this period can be shortened to 1 month.',
                    'label': 'Job transfer',
                    'order': 4,
                    'question': 'How fast you can leave your current employer?'
                },
                'faq09': {
                    'answer': 'So, I don\'t like it very much, but I know it\'s helpful or even necessary. Even I prepare tests for functionalities where the possibility of change in the future is less than 10%, I think it\'s good to do it. For sure it will help refactor the code, and make some improvements.',
                    'label': 'Tests',
                    'order': 10,
                    'question': 'What about tests of your code?'
                },
                'faq10': {
                    'answer': 'I don\'t know how the world could live without CSS. For me it\'s brilliant feature in entire web development cycle. I am not an expert but I know how to cook it and serve. And of course, if I don\'t know how to do something... open web browser and ask the world.',
                    'label': 'CSS',
                    'order': 9,
                    'question': 'What for you is the CSS?'
                }
            },
            'interests': 'computer technology; electronic gadget news; winter sports; bikes; motor sport (wec, dtm, f1)',
            'languages': {
                'de': 'german (FC, but not used for several years)',
                'en': 'english (communicative level)'
            },
            'profile': {
                'desc': 'I am interested in work in the Information Systems area. My current work field is the Front-end. I am focused now at solutions built with JavaScript (especially AngularJS), HTML5, CSS3. <br/><br/> My current professional experience and self-development requirements have prompted me to submit my offer to you - the application for <b>Front End Engineer</b>. <br/>Should you allow me to present myself for interview, I believe that my experience will not disappoint you.'
            },
            'projects': {
                'project1': {
                    'client': 'Medicover - IT dept.',
                    'desc': 'Tool supporting test process. Allows user to create tasks list per system version, application or business unit.',
                    'image': '',
                    'name': 'Apollo',
                    'order': 1,
                    'other': 'internal application',
                    'period': '2010/2011',
                    'status': 'finished',
                    'subname': 'test task manager',
                    'tasks': 'analysis, layout, frontend code, tests',
                    'team': 'two people',
                    'technology': '.Net, MS SQL, HTML, CSS, JavaScript',
                    'type': 'application'
                },
                'atena': {
                    'client': 'Medicover - Customer Service dept.',
                    'desc': 'SPA application supporting Customer Service Dept. Allows user to generate several reports in one place/window.',
                    'image': '',
                    'name': 'Atena',
                    'order': 5,
                    'other': 'internal application',
                    'period': '2014',
                    'status': 'finished',
                    'subname': 'reporting tool',
                    'tasks': 'analysis, layout, frontend code, backend code, tests, deployment, support',
                    'team': 'one person',
                    'technology': '.Net, MS SQL, BreezeJS, JavaScript(AngularJS), HTML5, CSS3, Boostrap3',
                    'type': 'application'
                },
                'emr': {
                    'client': 'Medicover - Medical dept.',
                    'desc': 'Prototype of application. Allows user to record medical data while consultations.',
                    'image': '',
                    'name': 'EMR',
                    'order': 3,
                    'other': 'internal application',
                    'period': '2013',
                    'status': 'finished',
                    'subname': 'electronic medical records',
                    'tasks': 'analysis, layout, frontend code, tests, deployment',
                    'team': 'two people',
                    'technology': '.Net, HTML5, CSS3, JavaScript(jQuery), Boostrap',
                    'type': 'prototype'
                },
                'emrlite': {
                    'client': 'Medicover - Medical dept.',
                    'desc': 'Tuning of EMR application. Building layout based on Boostrap framework and ready templatest (Metronic themes).',
                    'image': '',
                    'name': 'EMR Lite',
                    'order': 4,
                    'other': 'internal application',
                    'period': '2013',
                    'status': 'ainished',
                    'subname': 'electronic medical records',
                    'tasks': 'layout modifications',
                    'team': 'one',
                    'technology': 'HTML5, CSS3, JavaScript(jQuery), Boostrap3, Metronic templates',
                    'type': 'application tunning'
                },
                'hektor': {
                    'client': 'my internal project',
                    'demo': 'https://hektorweb.pl - usr: demo@hektorweb.pl, pwd: demo',
                    'desc': 'SPA application supporting parents, treasurer in school finance. Allows user to create school class, add students, parents, events, and send invitations to parents.',
                    'image': '',
                    'name': 'Hektor',
                    'order': 7,
                    'other': 'sample code possible - private application',
                    'period': '2014',
                    'status': 'Finished',
                    'subname': 'school finance',
                    'tasks': 'analysis, layout, frontend code, backend code, tests, hosting/domain arrangements, deployment, support',
                    'team': 'one person',
                    'technology': '.Net, MS SQL, BreezeJS JavaScript(AngularJS), HTML5, CSS3, Boostrap3',
                    'type': 'application'
                },
                'ofertomat': {
                    'client': 'CMD Damiana - Sales dept.',
                    'desc': 'SPA application supporting Sales Dept. Allows user to prepare offer for clients in PDF documents, and send it within email.',
                    'image': '',
                    'name': 'Ofertomat',
                    'order': 6,
                    'other': 'application built on demand',
                    'period': '2014',
                    'status': 'finished',
                    'subname': 'sales support',
                    'tasks': 'analysis, layout, frontend code, backend code, tests, deployment, support',
                    'team': 'one person',
                    'technology': '.Net, MS SQL, BreezeJS, JavaScript(AngularJS), HTML5, CSS3, Boostrap3, pdfmake.org',
                    'type': 'application'
                },
                'sci': {
                    'client': 'Medicover - Operations dept.',
                    'desc': 'Prototype of application. Allows user to check in (make the appointment delivered).',
                    'image': ' ',
                    'name': 'SCI',
                    'order': 2,
                    'other': 'internal application',
                    'period': '2012',
                    'status': 'finished',
                    'subname': 'self checking application',
                    'tasks': 'analysis, layout, frontend code, tests, deployment',
                    'team': 'one person',
                    'technology': '.Net, HTML, CSS, JavaScript(jQuery, jQuery Mobile)',
                    'type': 'prototype'
                }
            },
            'resume': 'https://www.dropbox.com/s/hrra66vmfgdlfkz/PatrykBialek_resume.pdf',
            'skills': 'working in stressful environment; analytical skills; flexible; operating systems Windows; MAC OS and MS Office, MS project, Visio, etc.); SQL, databases: Microsoft, IBM; Delphi; touch-typing; ASP.NET MVC, C#, MVVM, HTML5, CSS3, JavaScript (AngularJS), GruntJS, Gulp, Git; software prototyping; UI/UX;',
            'trainings': {
                'training01': 'Methodology of Project Management',
                'training02': 'Prince 2 in practice (5 years ago)',
                'training03': 'Time management, stress management',
                'training04': 'Assertiveness',
                'training05': 'Analysis in practice',
                'training06': 'JavaScript Road Trip, JavaScript Best Practices from CodeSchool'
            }
        }
    }
    
    function getMockStates() {
        return [
            {
                state: 'faq',
                config: {
                    controller: 'Faq',
                    controllerAs: 'faq',
                    templateUrl: 'app/sections/faq.html',
                    title: 'FAQ',
                    url: '/faq',
                    settings: {
                        nav: 5,
                        icon: 'question_answer'
                    }
                }
            },
            {
                state: 'experience',
                config: {
                    controller: 'Experience',
                    controllerAs: 'experience',
                    templateUrl: 'app/sections/experience/experience.html',
                    title: 'Experience',
                    url: '/experience',
                    settings: {
                        nav: 2,
                        icon: 'work'
                    }
                }
            }
        ];
    }

    function getPublic() {
        return {
            'agreements': {
                'en': 'I hereby authorize you to process my personal data included in my job application for the needs of the recruitment process in accordance with the Personal Data Protection Act dated 29.08.1997 (uniform text: Journal of Laws of the Republic of Poland 2002 No 101, item 926 with further amendments',
                'pl': 'Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej ofercie pracy dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. z 2002r. Nr 101, poz. 926 ze zm.)'
            },
            'author': 'John Doe',
            'intro': 'This is an intro',
            'updated': 'Sep 9, 2015'
        }
    }

    function getQuestions() {
        return [
            {
                'label': 'Question 1',
                'question': 'Question1?',
                'anwser': 'Anwser 1'
            },
            {
                'label': 'Question 2',
                'question': 'Question2?',
                'anwser': 'Anwser 2'
            }
        ]
    }
})();