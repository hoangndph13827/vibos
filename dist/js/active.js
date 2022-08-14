(function () {
    'use strict';

    var aplandWindow = $(window);

    // :: Preloader Active Code

    aplandWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: Nav Active Code

    if ($.fn.classyNav) {
        $('#aplandNav').classyNav();
    }

    // :: Sticky Active Code

    aplandWindow.on('scroll', function () {
        if (aplandWindow.scrollTop() > 0) {
            $('.header-area').addClass('header-sticky');
        } else {
            $('.header-area').removeClass('header-sticky');
        }
    });

    // :: Tooltip Active Code
    var aplandTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = aplandTooltip.map(function (tooltip) {
        return new bootstrap.Tooltip(tooltip);
    });

    // :: Toast Active Code
    var aplandToast = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = aplandToast.map(function (toast) {
        return new bootstrap.Toast(toast);
    });
    toastList.forEach(toast => toast.show());

    // :: ScrollUp Active Code

    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: ['<i class="lni-chevron-up"></i>'],
            scrollImg: false
        });
    }

    // :: Welcome Slider Active Code

    if ($.fn.owlCarousel) {
        var wel_slides = $('.hero-slides');
        wel_slides.owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ['<i class="lni-chevron-left"></i>', '<i class="lni-chevron-right"></i>'],
            dots: false,
            dotsSpeed: 1000,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: false
        });

        wel_slides.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        wel_slides.on('translated.owl.carousel', function () {
            var layer = wel_slides.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    // :: App Screenshots Active Code

    if ($.fn.owlCarousel) {
        $(".app-screenshots").owlCarousel({
            items: 4,
            margin: 32,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    
    // :: Testimonials Active Code

    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 5,
            margin: 32,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: '1000',
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1300: {
                    items: 4
                },
                1700: {
                    items: 5
                }
            }
        });
    }

    // :: Partner Carousel Active Code

    if ($.fn.owlCarousel) {
        $(".our-partner-slides").owlCarousel({
            items: 6,
            margin: 50,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                576: {
                    items: 4
                },
                768: {
                    items: 5
                },
                992: {
                    items: 6
                }
            }
        });
    }

    // :: One Page Nav Active Code

    if ($.fn.onePageNav) {
        $('#corenav').onePageNav({
            easing: 'easeInOutQuart',
            scrollSpeed: 1000
        });
    }

    // :: Animated Headline Active Code
    if ($.fn.animatedHeadline) {
        $('.animated-headline').animatedHeadline({
            animationType: 'clip'
        });
    }

    // :: Video Active Code

    if ($.fn.magnificPopup) {
        $('.video-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: Counterup Active Code

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }

    // :: WOW Active Code

    new WOW().init();

    // :: Jarallax Active Code

    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.25
        });
    }

    // :: PreventDefault 'a' Click

    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    $(".single-work-step").on('mouseenter', function () {
        $(".single-work-step").removeClass("active");
        $(this).addClass("active");
    });

    // :: Countdown Active Code
    
    $('#clock').countdown('2021/11/10', function (event) {
        $(this).html(event.strftime('<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>'));
    });

})();