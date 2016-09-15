function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
//
// var technologies = {
//     android: 'png',
//     bootstrap: 'png',
//     css: 'png',
//     databases: 'png',
//     flask: 'png',
//     html: 'png',
//     java: 'png',
//     javascript: 'png',
//     jquery: 'png',
//     materialize: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//     android: 'png',
//
//     python: 'ico',
// }

var projects = [
    {
        name: "Twitch Plays Pokemon Go",
        image: "/img/twitch.png",
        description:"Used Python Flask, Twitch API and a Jailbroken iPhone to do a croudsourced playthrough of Pokemon Go. Featured in <a href='http://www.theverge.com/2016/7/12/12167120/twitch-plays-pokemon-go-stream'>The Verge</a>, <a href='http://www.polygon.com/2016/7/12/12159908/pokemon-go-cheating-ban-gps-spoofing'>Polygon</a> and <a href='http://nintendoeverything.com/twitch-plays-pokemon-go-is-now-a-thing/'>Nintendo Everything</a>",
        status: "completed",
        date: "July 2016",
        links: [
            {
                type: "twitch",
                link: "https://www.twitch.tv/twitchpokemongo/profile"
            }
        ]
    },
    {
        name: "Librarebook",
        title: "Librarebook",
        image: "/img/library.jpg",
        description:"A Libary for ebooks written with a Java backend and React frontend. Project for Software Engineering course.",
        status: "completed",
        date: "May 2016",
        links: [
            {
                type: "github",
                link: "https://github.com/SirKitboard/Librarebook"
            }
        ]
    },
    {
        name: "Hunt",
        image: "/img/hunt.png",
        description:"Made a scavenger hunt app for android with tasks and locations spread all across NYC. Play Store Beta access given on request",
        status: "completed",
        date: "July 2016",
        links: [
            {
                type: "github",
                link: "https://github.com/SirKitboard/Hunt-HackNY"
            }
        ]
    },
    {
        name: "Totally Legit Online Auctions",
        title: "Totally Legit Online Auctions",
        image: "/img/auction.png",
        description:"Online auction website written with a Python Pyramid backend, React Frontend and MySQL database. Project for database course",
        status: "completed",
        date: "Dec 2015",
        links: [
            {
                type: "github",
                link: "https://github.com/SirKitboard/CSE305Project"
            }
        ]
    },
    {
        name: "Photon",
        image: "/img/photon.png",
        description:"A Stealth based adventure game written in C++. Used course provided gamedev framework, and implemented a custom rendering system for light based game mechanics.",
        status: "completed",
        date: "Dec 2015",
        links: [
            {
                type: "github",
                link: "https://github.com/SirKitboard/CSE305Project"
            }
        ]
    },
    {
        name: "Walk And Text",
        image: "/img/walk.webp",
        description:"SMS App for Android which renders whats in front of you on the screen using the camera so you can see where you are going while texting",
        status: "completed",
        date: "Dec 2015",
        links: [
            {
                type: "play",
                link: "https://play.google.com/store/apps/details?id=io.github.adibalwani03.wat"
            }
        ]
    },
    {
        name: "SBU LaundryView",
        title: 'SBU LaundryView',
        image: "/img/laundry.png",
        description:"Android app for checking the status of laundry machines in Stony Brook and setting alarms",
        status: "completed",
        date: "Dec 2015",
        links: [
            {
                type: "play",
                link: "https://play.google.com/store/apps/details?id=io.github.adibalwani03.wat"
            },
            {
                type: 'github',
                link: 'https://github.com/SirKitboard/LaundryView'
            }
        ]
    }
]
var filteredProjects = projects;

$(document).ready(function() {
    var container = $("#projectsContainer").first();
    container.empty();
    filteredProjects.forEach(function(project) {
        console.log(container);
        var appendValue = (
            "<div class='col s12 m4 l3'>" +
             "<div class='card'>" +
               "<div class='card-image'>" +
                 "<img src='"+project.image+"'>" +
                 "<span class='card-title'>"+(project.title ? project.title : "") + "</span>" +
               "</div>" +
               "<div class='card-content'>" +
                 "<p>"+project.description+"</p>" +
               "</div>" +
               "<div class='card-action'>" +
                 project.links.map(function(link) {
                    return "<a class='right' href='"+link.link+"'><span class='socicon-"+link.type+"'></span></a>"
                }).join('') +
               "</div>" +
             "</div>" +
           "</div>"
        )
        console.log(appendValue);
        container.append(appendValue);
    });
});
