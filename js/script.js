$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false,

    });

    var typed = new Typed(".typed",{
        strings: ["C#", "Javascript", "React", "Microsoft Azure", "HTML", "CSS", "VUE", "Angular"],
        typeSpeed: 70,
        loop:true,
        startDelay: 1000,
        backSpeed:70,
       
    })
});