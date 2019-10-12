$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,

    });

    var typed = new Typed(".typed",{
        strings: ["Javascript", "React", "Microsoft", "CSharp", "HTML", "Azure", "Java","Flutter","CSS", "Python","Vue","Bot", "Angular", "Web", "Node", "Next", "Wordpress"],
        typeSpeed: 70,
        loop:true,
        startDelay: 1000,
        backSpeed:70,
        smartBackspace:true
       
    })
});