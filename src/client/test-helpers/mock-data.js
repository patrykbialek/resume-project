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
            "bio" : {
              "born" : {
                "icon" : "room",
                "label" : "Born",
                "name" : "Jan 1990",
                "order" : 2
              },
              "email" : {
                "email" : true,
                "icon" : "email",
                "label" : "Email",
                "name" : "resume-project@patrykbe.pl",
                "order" : 5
              },
              "family" : {
                "icon" : "people",
                "label" : "Family",
                "name" : "wife, five kids",
                "order" : 3
              },
              "name" : {
                "icon" : "person",
                "label" : "Name",
                "name" : "John Doe",
                "order" : 1
              },
              "phone" : {
                "icon" : "call",
                "label" : "Phone",
                "name" : "+48 510217852",
                "order" : 4
              }
            },
            "education" : {
              "u1" : {
                "field" : "economy, speciality banking — MA",
                "name" : "univeristy",
                "order" : 1,
                "when" : "2001 - 2002"
              },
              "u2" : {
                "field" : "finance/banking, speciality banking — LIC",
                "name" : "univeristy",
                "order" : 2,
                "when" : "1999 - 2001"
              }
            },
            "experience" : {
              "exp1" : {
                "company" : "Company 1",
                "order" : 2,
                "position" : "IT Specialist",
                "responsibilities" : {
                  "res1" : "responsibility 1  ",
                  "res2" : "responsibility 2 "
                },
                "when" : "Oct 1998 - Jan 1999 (4 mths)"
              },
              "exp2" : {
                "company" : "Company 2",
                "order" : 1,
                "position" : "Analyst",
                "responsibilities" : {
                  "res1" : "responsibility 1  ",
                  "res2" : "responsibility 2 "
                },
                "when" : "Nov 1999 - present (15 yrs)"
              }
            },
            "faq" : {
              "faq01" : {
                "answer" : "anwser 1",
                "label" : "Answer 1",
                "order" : 1,
                "question" : "Question 1?"
              },
              "faq02" : {
                "answer" : "anwser 2",
                "label" : "Answer 2",
                "order" : 2,
                "question" : "Question 2?"
              },
              "faq03" : {
                "answer" : "anwser 3",
                "label" : "Answer 3",
                "order" : 3,
                "question" : "Question 3?"
              }
            },
            "interests" : "computer technology; electronic gadget news; winter sports; bikes; motor sport (wec, dtm, f1)",
            "languages" : {
              "de" : "german ",
              "en" : "english"
            },
            "profile" : {
              "desc" : "I am interested in work in the Information Systems area. I am interested in work in the Information Systems area. I am interested in work in the Information Systems area. <br><br>I am interested in work in the Information Systems area. I am interested in work in the Information Systems area. I am interested in work in the Information Systems area. "
            },
            "projects" : {
              "project1" : {
                "client" : "Company - IT dept.",
                "desc" : "Tool supporting test process. Allows user to create tasks list per system version, application or business unit.",
                "image" : "",
                "name" : "Project one",
                "order" : 1,
                "other" : "internal application",
                "period" : "2010/2011",
                "status" : "finished",
                "subname" : "test task manager",
                "tasks" : "analysis, layout, frontend code, tests",
                "team" : "two people",
                "technology" : ".Net, MS SQL, HTML, CSS, JavaScript",
                "type" : "application"
              },
              "project2" : {
                "client" : "Company - IT dept.",
                "desc" : "Tool supporting test process. Allows user to create tasks list per system version, application or business unit.",
                "image" : "",
                "name" : "Project two",
                "order" : 2,
                "other" : "internal application",
                "period" : "2014",
                "status" : "finished",
                "subname" : "test task manager",
                "tasks" : "analysis, layout, frontend code, tests",
                "team" : "two people",
                "technology" : ".Net, MS SQL, HTML, CSS, JavaScript",
                "type" : "application"
              }
            },
            "resume" : "https://github.com",
            "skills" : "working in stressful environment; analytical skills; flexible; operating systems Windows; ASP.NET MVC, C#, MVVM, HTML5, CSS3, JavaScript (AngularJS), GruntJS, Gulp, Git; software prototyping; UI/UX;",
            "trainings" : {
              "training01" : "Training 01",
              "training02" : "Training 02",
              "training03" : "Training 03",
              "training04" : "Training 04"
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
