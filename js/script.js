$(window).on("load", function(){
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
})
$(document).ready(function () {

    $('#slides').superslides({
        animation: 'fade',
        play: 6000,
        pagination: false,

    });

    var typed = new Typed(".typed", {
        strings: ["Web developer.", "Software engineer.", "Student."],
        typeSpeed: 90,
        loop: true,
        startDelay: 1000,
        backSpeed: 70,
        smartBackspace: true

    });
    var owl = $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 5000,
        autoplaySpeed: 7000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            750: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statssTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeinout',
                barColor: '#ffff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
        if (!countUpFinished && window.pageYOffset > statssTopOffset - $(window).height() + 300) {
            $(".counter").each(function () {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })
            countUpFinished = true;

        }
    });
    $("[data-fancybox]").fancybox();

    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });

    $("#navigation li a").click(function(e){
        e.preventDefault();
        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 100},"slow");
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;
    $(window).on("scroll",stickyNavigation);
    function stickyNavigation() {
        var body = $("body");
        if ($(window).scrollTop()>=navTop) {
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});
