import './css/style.scss';
import $ from 'jquery';
import scrollFunction from './js/custom.js'
import showSlides from './js/slideShoes.js'


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction};

$(document).ready(function () {

    $('button#mobile-toggle').bind('click', function (event) {

        event.preventDefault();

        $('ul#mobile-nav').slideToggle(250).css('display', 'block');

    });

    /* ========================================== 
    scrollTop() >= 100
    Should be equal the the height of the header
    ========================================== */

    $(window).scroll(function(){
        
        if ($(window).scrollTop() >= 90) {

            $('nav').addClass('fixed-header');
            $('div.grid_24').css('padding-top', '65px');
            $('nav div').addClass('nav-title');
        }
        else {
            $('nav').removeClass('fixed-header');
            $('div.grid_24').css('padding-top', '0');
            $('nav div').removeClass('nav-title');
        }
    });

    // Add smooth scrolling to all links
    $(".nav-links").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });
        } // End if
    });

    $("#myBtn").on('click', function (event) {

        event.preventDefault;

        $('html,body').animate({scrollTop:0},800);

    });

     

});
	   
showSlides()