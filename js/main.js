var Eastern = function() {
    'use strict';

    // Loaders 
    var loaders = function() {
            $(window).load(function() {
                $(".loader-wrapper .loaders").fadeOut();
                $(".loader-wrapper").fadeOut("slow");;
            });
        }
        // Header Sticky
    var headerSticky = function() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 1) {
                $('.header.header-sticky').addClass('sticky');
                $('.header.navbar-fixed-top').addClass('sticky');

            } else {
                $('.header.header-sticky').removeClass('sticky');
                $('.header.navbar-fixed-top').removeClass('sticky');
            }
        });
    }

    // Header Search
    var headerSearch = function() {
        $('#menu-search').on('click', function() {
            $('#search').addClass('active').find('.search').focus();
        });

        $('#search').on('click', function() {
            $(this).find('.search').focus();
        });

        $('#close').on('click', function() {
            $('#search').removeClass('active');
        });
    }

    // Header in Mobile
    var headerMobile = function() {
        $(window).on('load resize', function() {
            if ($(window).width() < 992) {
                $('.header .navbar-collapse ul.navbar-nav li a').click(function(event) {
                    if ($(this).parent().hasClass("open")) {

                        $(this).parent().children('.dropdown-menu').slideUp(200, function() {
                            $(this).parent().removeClass("open");
                        });

                    } else {
                        $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                        $(this).parent().parent().children('li.open').children('a').removeClass('open');
                        $(this).parent().parent().children('li.open').removeClass("open");
                        $(this).parent().children('.dropdown-menu').slideDown(200, function() {
                            $(this).parent().addClass("open");
                        });
                    }
                });
            }
        });
    }

    // Full Screen Header
    var headerFullScreen = function() {
        $('.navbar-toggle.full-screen').on('click', function() {
            $('.header-full-screen').addClass('active');
        });

        $('.header-fs-close, .fs-nav-item').on('click', function() {
            $('.header-full-screen').removeClass('active');
            $('.navbar-toggle.full-screen').removeClass('active');
        });

        new Swiper('.fs-nav', {
            nextButton: '.fs-nav-next',
            prevButton: '.fs-nav-prev',
            slidesPerView: 4,
            spaceBetween: 0,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });
    }

    // Side Header
    var sideHeader = function() {
        $('.side-header .side-header-menu li a').click(function(event) {
            if ($(this).parent().hasClass("open")) {

                $(this).parent().children('.dropdown-menu').slideUp(200, function() {
                    $(this).parent().removeClass("open");
                });

            } else {
                $(this).parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                $(this).parent().parent().children('li.open').children('a').removeClass('open');
                $(this).parent().parent().children('li.open').removeClass("open");
                $(this).parent().children('.dropdown-menu').slideDown(200, function() {
                    $(this).parent().addClass("open");
                });
            }
        });

        $(".side-header-toggle").on('click', function(e) {
            e.preventDefault();
            $(".side-header-left").toggleClass("active");
            $(".sideheader-active-left").toggleClass("active");
            $(".side-header-right").toggleClass("active");
            $(".sideheader-active-right").toggleClass("active");
            $(".side-header-toggle").toggleClass("active");
        });

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 1) {
                $('.side-header-toggle-wrapper').addClass('shadow');

            } else {
                $('.side-header-toggle-wrapper').removeClass('shadow');

            }
        });
    }

    // Mobile Header Toggle
    var mobileHeaderToggle = function() {
        $('.header .navbar-toggle').on('click', function(event) {
            if ($('.navbar-toggle').hasClass('active')) {
                $('.navbar-toggle').removeClass('active');
            } else {
                $('.navbar-toggle').addClass('active');
            }
        });
    }

    // Scroll Spy
    var scrollSpy = function() {
        $('body').scrollspy({
            target: ".op-header .navbar-collapse"
        })
    }

    // Animated Href
    var animatedHref = function() {
        $('.scroll-to').on('click', function() {
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 5
            }, 500);
            return false;
        });
    }

    // Swiper Slider
    var swiperSlider = function() {

        new Swiper('.swiper-hero', {
            centeredSlides: true,
            nextButton: '.swiper-hero-button-next',
            prevButton: '.swiper-hero-button-prev',
            pagination: '.swiper-hero-pagination',
            paginationClickable: true,
            effect: 'fade',
            autoplay: 6500
        });

        new Swiper('.swiper-single', {
            centeredSlides: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 6500
        });

        new Swiper('.swiper-2', {
            nextButton: '.swiper-button-next-2',
            prevButton: '.swiper-button-prev-2',
            pagination: '.swiper-pagination-2',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        new Swiper('.swiper-3', {
            nextButton: '.swiper-button-next-3',
            prevButton: '.swiper-button-prev-3',
            pagination: '.swiper-pagination-3',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        new Swiper('.swiper-4', {
            nextButton: '.swiper-button-next-4',
            prevButton: '.swiper-button-prev-4',
            pagination: '.swiper-pagination-4',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        new Swiper('.swiper-5', {
            nextButton: '.swiper-button-next-5',
            prevButton: '.swiper-button-prev-5',
            pagination: '.swiper-pagination-5',
            slidesPerView: 5,
            paginationClickable: true,
            spaceBetween: 30,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                500: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        });

        var galleryTop = new Swiper('.gallery-screen', {
            spaceBetween: 10,
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: '3',
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }

    // Parallax Scroll
    var parallaxScroll = function() {

        var mobileWidth = 767;

        if ($(window).width() < mobileWidth) {
            $(".no-mobile-parallax").each(function() {
                $(this).removeAttr("data-parallax");
                $(this).removeAttr("style");
            });
        }
    }

    //Magnific Popup
    var magnificPopup = function() {

        $(".lightbox-img").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 160,
            mainClass: "mfp-fade"

        });

        $('.lightbox-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    // Counter
    var counterPlugin = function() {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }

    // Progress Bar
    var progressBar = function() {
        $('.progress-wrapper').each(function() {
            var $this = $(this);
            var waypoint = $this.waypoint({
                handler: function(direction) {
                    $this.find('.progress-bar').css("width",
                        function() {
                            return $(this).attr("aria-valuenow") + "%";
                        }
                    )
                },
                offset: "100%"
            });
        })
    }

    //Youtube Player
    var youtubePlayer = function() {
        $(function() {
            jQuery(".video-player").YTPlayer();
        });
    }

    //WOW
    var wowReveal = function() {
        new WOW({
            mobile: false
        }).init();
    }

    //Quantity Selector
    var quantitySelector = function() {
        jQuery(document).on('click', '.qtyplus', function(e) {
            e.preventDefault();
            var quantityInput = jQuery(this).parents('.quantity-selector').find('.quantity'),
                newValue = parseInt(quantityInput.val(), 10) + 1,
                maxValue = parseInt(quantityInput.attr('max'), 10);

            if (!maxValue) {
                maxValue = 9999;
            }

            if (newValue <= maxValue) {
                quantityInput.val(newValue);
                quantityInput.change();
            }
        });

        jQuery(document).on('click', '.qtyminus', function(e) {
            e.preventDefault();
            var quantityInput = jQuery(this).parents('.quantity-selector').find('.quantity'),
                newValue = parseInt(quantityInput.val(), 10) - 1,
                minValue = parseInt(quantityInput.attr('min'), 10);

            if (!minValue) {
                minValue = 1;
            }

            if (newValue >= minValue) {
                quantityInput.val(newValue);
                quantityInput.change();
            }
        });
    }

    //Footer Reveal
    var footerReveal = function() {
        var footerHeight = $('.footer-reveal-wrapper').outerHeight();
        $('.footer-reveal').css('height', footerHeight + 'px');
    }

    //Modal
    var modal = function() {
        $(window).load(function() {
            $('.modal.load-active').modal('show');
        });
    }

    // Isotope
    var isotope = function() {
        var $portfolio = $('.isotope');
        $portfolio.imagesLoaded(function() {
            $portfolio.isotope({
                isOriginLeft: true,
                stagger: 30
            });
            $portfolio.isotope();

        });

        $('.isotope-filter').on('click', 'a', function(e) {
            e.preventDefault();
            var filterValue = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: filterValue
            });

            $('.isotope-filter a').removeClass('active');
            $(this).closest('a').addClass('active');

        });
    }

    var isotopeMasonry = function() {
        var $masonry = $('.masonry');
        $masonry.imagesLoaded(function() {
            $masonry.isotope({
                itemSelector: '.folio-item,.blog-item',
                layoutMode: 'masonry',
                percentPosition: true,
                resizable: false,
                isResizeBound: false
            });

        });

        $masonry.isotope();
    }

    return {
        init: function() {
            loaders(); // Loaders Control
            headerSticky(); //  Header Sticky Control
            headerSearch(); //  Header Search Control
            headerMobile(); // Header Mobile Control
            sideHeader(); // Side Header Control
            headerFullScreen(); // Full Screen Header Control
            mobileHeaderToggle(); // Mobile Header Toggle Control
            scrollSpy(); // Scrollspy Control
            animatedHref(); // Animated Href Control
            swiperSlider(); // Swiper Slider Control
            parallaxScroll(); // Parallax Scroll Control
            magnificPopup(); // Magnific Popup Control
            counterPlugin(); // Counter Control
            progressBar(); // Progress Bar Control
            youtubePlayer(); // YoutubePlayer Control
            wowReveal(); // Wow Control
            quantitySelector(); // Quantity Selector Control
            footerReveal(); // Footer Reveal Control
            modal(); // Modal Control
            isotope(); // Isotope Control
            isotopeMasonry(); // Isotope Masonry Control
        }
    }
}();

$(document).ready(function() {
    Eastern.init();
});