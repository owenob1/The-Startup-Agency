/*! --------------------------------------------------------------
# main.js
#
# Main theme js file for SaltTechno template.
# This is compressed js file. You get uncompressed version with download.
--------------------------------------------------------------*/

$(function($) {
    'use strict';

    // For Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // For page transitions
    $(".animsition").animsition({
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'page-loader',
    });

    // For tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // For Owl Carousel
    $('.features-carousel').owlCarousel({
        items: 2,
        loop: true,
        dots: false,
        autoplay: true
    });

    // For client carousel
    $(".client-carousel").owlCarousel({
        loop: true,
        items: 6,
        autoplay: true,
        dots: false
    });

    // For changing body class on scroll
    $(window).on("scroll resize", function() {
        if ($(window).scrollTop() >= 75) {
            $("body").addClass("body-scrolled");
        }
        else {
            return $("body").removeClass("body-scrolled");
        }
    });

});
