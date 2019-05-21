$(document).ready(function () {


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

        $('html,body').animate({scrollTop:0},800);

    });

    var position, direction, previous;

    $(window).scroll(function(){

        if( $(this).scrollTop() >= position ){
            direction = 'down';
            if(direction !== previous){
                $('button.menu-toggle').addClass('hide');
                $('ul#mobile-nav').addClass('hide');
                previous = direction;
            }
        } else {
            direction = 'up';
            if(direction !== previous){
                $('button.menu-toggle').removeClass('hide');
                $('ul#mobile-nav').addClass('hide');
                previous = direction;
            }
        }
        position = $(this).scrollTop();
    });

    // sliding menu mobile
	$('button#mobile-toggle').on('click', function(event){

		event.preventDefault();

		// create menu variables
		var slideoutMenu = $('div.container_24 ul#mobile-nav ');
		var slideoutMenuWidth = $('div.container_24 ul#mobile-nav ').width();

		// toggle open class
		slideoutMenu.toggleClass("open");

		// slide menu
		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				left: "0.5em"
			});
		} else {
			slideoutMenu.animate({
				left: -slideoutMenuWidth
			}, 500);
		}
    });


    //headings
    $('.text h3').click(
        function () {

            var element = $(this);
            $(element).next("p.collection-text").animate({
            'height':'toggle' }, 'slow', 'easeOutBounce');
        }
    );


    $('#bio h3').click(function() {    });

});

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    }



    // When the user clicks on the button, scroll to the top of the document
    //function topFunction() {
    //document.body.scrollTop = 0; // For Safari
    //document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    //}
