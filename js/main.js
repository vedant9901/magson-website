(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 2,  // Number of items to show at once
            margin: 20,  // Space between items
            loop: true,  // Infinite loop
            autoplay: true,  // Autoplay
            autoplayTimeout: 3000,  // Autoplay timeout (in ms)
            responsive: {
                0: {
                    items: 1  // Show 1 item on extra small screens (mobile)
                },
                480: {
                    items: 1  // Show 1 item on small screens (portrait mobile)
                },
                600: {
                    items: 2  // Show 2 items on medium screens (tablet or larger mobile)
                },
                768: {
                    items: 2  // Show 2 items on larger medium screens (small tablet)
                },
                992: {
                    items: 3  // Show 3 items on large tablets (portrait view) or small desktops
                },
                1200: {
                    items: 4  // Show 4 items on larger desktops (wide screen)
                },
                1600: {
                    items: 5  // Show 5 items on very large screens (extra large desktops)
                }
            }
        });
    });
    
})(jQuery);

