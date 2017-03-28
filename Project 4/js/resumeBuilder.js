var bio = {
    name: "Rahul Passi",
    role: "front-end web developer",
    contacts: {
        mobile: "9646095909",
        email: "rahulpassi2412@gmail.com",
        github: "rahulpassi2412",
        twitter: "rahulpassi86",
        location: "Zirakpur,india"
    },
    welcomeMessage: "Hey,this is rahul",
    skills: ["coding", "data analyzing", "logic bulding"],
    biopic: "images/fry.jpg"
};

bio.display = function() {

    var myName = HTMLheaderName.replace("%data%", bio.name);


    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(myName + myRole);

    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(myMobile);

    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(myEmail);

    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(myGithub);

    var mytwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(mytwitter);


    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(myLocation);
    var myMobile1 = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(myMobile1);




    var myEmail1 = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(myEmail1);

    var myGithub1 = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(myGithub1);


    var mytwitter1 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(mytwitter1);


    var myLocation1 = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(myLocation1);
    var myMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    var myBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(myBiopic + myMessage);

    if (bio.skills.length > 0) {
        var mySkills;
        var i;
        $("#header").append(HTMLskillsStart);
        for (i = 0; i < bio.skills.length; i++) {
            mySkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(mySkills);
        }
    }
};

bio.display();

var education = {

    schools: [{
        name: "chitkara university",
        degree: "b-tech",
        majors: ["cs", "civil"],
        location: "rajpura",
        dates: "26-10-2014",
        url: "www.chitkara.edu.in/"
    }, {
        name: "punjab university",
        degree: "m-tech",
        majors: ["cs", "It"],
        dates: "27-11-2016",
        location: "chandigarh",
        url: "http://puchd.ac.in/"
    }],
    onlineCourses: [{
        title: "Front-end web developement",
        school: "udacity",
        dates: "04-jan-2017",
        url: "https://in.udacity.com/"
    }]
};
education.display = function() {
    if (education.schools.length > 0) {
        var i;

        $("#education").append(HTMLschoolStart);
 
        for (i = 0; i < education.schools.length; i++) {


            var mySchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);

            var mySchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry").append(mySchoolName + mySchoolDegree);

            var mySchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry").append(mySchoolDate);

            var mySchoolLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry:first").append(mySchoolLoc);
            var mySchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry").append(mySchoolMajor);
        }
 }

   
    if (education.onlineCourses.length > 0) {
        var j;
            $(".education-entry").append(HTMLonlineClasses); 
        for (j = 0; j < education.onlineCourses.length; j++) {
     
            var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var onlineCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            $(".education-entry").append(onlineCourseTitle + onlineCourseSchool);
            var onlineCourseDate = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            $(".education-entry").append(onlineCourseDate);
            var onlineCourseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);
            $(".education-entry").append(onlineCourseUrl);
        }
    }
};

education.display();


var work = {
    jobs: [{
        employer: "Apple",
        title: "project manager",
        location: "California",
        dates: "19-july-2015",
        description: "I develop different projects along with my team,which i try to lead by example."
    }, {
        employer: "linux",
        title: "software developer",
        location: "Silicon Valley",
        dates: "15-sep-2016",
        description: "I make and improve codes for apps in different types of linux distros and their apps."
    }]
};
work.display = function() {
    if (work.jobs.length > 0) {
        var i;
        $("#workExperience").append(HTMLworkStart);

        for (i = 0; i < work.jobs.length; i++) {

            var myEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var myJobTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry").append(myEmployer + myJobTitle);

            var myDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry").append(myDate);
            var myWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry").append(myWorkLocation);
            var myWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(myWorkDescription);
        }
    }
};

work.display();


var projects = {
    projects: [{
        title: "Animal Card",
        dates: "22-nov-16",
        description: " a web page with imprtant information and intersting facts about my favourite animal,the king of the jungle,lion",
        images: ["images/ppic.jpg", "images/ppic2.jpg"],
        url: "https://en.wikipedia.org/wiki/Lion",
    }]
};
$("#mapDiv").append(googleMap);
projects.display = function() {
    if (projects.projects.length > 0) {
        var i;

        $("#projects").append(HTMLprojectStart);
        for (i = 0; i < projects.projects.length; i++) {

            var myProjectName = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);

            $(".project-entry").append(myProjectName);

            var myProjectDate = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry").append(myProjectDate);
            var myProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(myProjectDescription);
            var j;
            for (j = 0; j < projects.projects[i].images.length; j++) {
                var myProjectImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry").append(myProjectImages);
            }
        }
    }
};
projects.display();