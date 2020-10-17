$(document).ready(function() {

    var owl1 = $('.owl-one');
    owl1.owlCarousel({
        // animateOut: 'animate__slideOutUp',
        // animateIn: 'animate__slideInUp',
        items: 1,
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        autoplayTimeout: 7000,
        loop: true,
        dots: false,
        autoplay: true,
        nav: true
    });

    $(".tog-icon").on("click", function() {
        $(this).find(".fas").toggleClass("fa-times")
    })

    var owl2 = $('.owl-two');
    owl2.owlCarousel({
        items: 1,
        margin: 10,
        stagePadding: 30,
        smartSpeed: 450,
        autoplayTimeout: 7000,
        loop: true,
        dots: false,
        autoplay: true,
        nav: true
    });


    // written text



    // var owl2 = $('.owl-two');
    // owl2.owlCarousel({
    //     items: 1,
    //     loop: true,
    //     dotsEach: false,
    //     smartSpeed: 700,
    //     nav: true,
    //     margin: 10,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         1000: {
    //             items: 1,
    //         }
    //     }
    // });

    // var owl3 = $('.owl-three');
    // owl3.owlCarousel({
    //     items: 5,
    //     loop: true,
    //     margin: 10,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     animateOut: 'fadeOut',
    //     autoplayHoverPause: true,
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: false,
    //         },
    //         600: {
    //             items: 3,
    //             nav: false
    //         },
    //         1000: {
    //             items: 5,
    //             nav: false,
    //         }
    //     }
    // });
    // $('.btn-call-float').click(function(e) {
    //     $('.call-float-div').toggleClass('call-close');
    // });

    // var wob = $(".wob");
    // wob.mouseenter(function() {
    //     $(this).toggleClass("wobble animated")
    // })
});