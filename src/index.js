
import "./css/style.scss";
import $ from "jquery";

import "jquery-validation/dist/jquery.validate.js"
import "jquery-validation/dist/additional-methods.js"

import showSlides from "./js/slideShoes.js";


//header image
import homeIcon from "./images/small/logo-green-foot-prints-small.gif";

//slider images
import sliderImgOne from "./images/slider/slider-image-recyling-green-foot-prints-com.png";
import sliderImgTwo from "./images/slider/slider-image-1-recyling-green-foot-prints-com.png";
import sliderImgThree from "./images/slider/slider-image-2-recyling-green-foot-prints-com.png";

//banner images
import paperBottles from "./images/Large/paper-bottles-can-guide-green-foot-prints-com-large.gif";
import flowChart from "./images/Large/recycling-flowchart-green-foot-prints-com-large.gif";
import wordSearch from "./images/Large/wordsearch-green-foot-prints-com-large.gif";


//main page images
import mainImageOne from "./images/small/recyling-materials-green-foot-prints-com-small.gif";
import mainImageTwo from "./images/Large/recyling-bins-green-foot-prints-com-large.png";
import mainImageThree from "./images/Large/recycle-image-green-foot-prints-com-large.png";
import mainImageFour from "./images/Large/types-of-recyling-waste-guide-green-foot-prints-com-large.png";


//header image
var homeImg = document.getElementById("homeImage");
homeImg.src = homeIcon;

//slider images
var sliderOneImg = document.getElementById("sliderOneImg");
sliderOneImg.src = sliderImgOne;

var sliderTwoImg = document.getElementById("sliderTwoImg");
sliderTwoImg.src = sliderImgTwo;

var sliderThreeImg = document.getElementById("sliderThreeImg");
sliderThreeImg.src = sliderImgThree;

//banner images
var imageOne = document.getElementById("paperBottles");
imageOne.src = paperBottles;

var imageTwo = document.getElementById("flowChart");
imageTwo.src = flowChart;

var imageThree = document.getElementById("wordSearch");
imageThree.src = wordSearch;


//main page images
var ImageOne = document.getElementById("mainImageOne");
ImageOne.src = mainImageOne;

var ImageTwo = document.getElementById("mainImageTwo");
ImageTwo.src = mainImageTwo;

var ImageThree = document.getElementById("mainImageThree");
ImageThree.src = mainImageThree;

var ImageFour = document.getElementById("mainImageFour");
ImageFour.src = mainImageFour;

//10 Ways images


//Scroll
(function() {
    /* ========================================== 
  scrollTop() >= 100
  Should be equal the the height of the header
  ========================================== */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 90) {
            $("nav").addClass("fixed-header");
            $("div.grid_24").css("padding-top", "65px");
            $("nav div").addClass("nav-title");
        } else {
            $("nav").removeClass("fixed-header");
            $("div.grid_24").css("padding-top", "0");
            $("nav div").removeClass("nav-title");
        }
    });

    // Add smooth scrolling to all links
    $(".nav-links").on("click", function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } // End if
    });
})();

//H3 Title Toggle
(function () {
//headings
  $(".collections_title").on('click',function() {
      var element = $(this);
      $(element).next(".collection-text").animate({ height: "toggle" }, "slow" );
  });
})();


//Validation
(function() {

    $("#feedback-form").validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true
            }
        },
        messages: {
            name: "Name is required.",
            email: "Email is required."
        },
        /*showErrors: function (errorMap, errorList) {
            $("#summary").html("Your form contains " +
                    this.numberOfInvalids() +
                    " errors, see details below.").addClass('error');
            this.defaultShowErrors();
        }*/
    });
})();

//scroll to top button function
$("#myBtn").on('click', function (event) {
        
    event.preventDefault();

    $('html,body').animate({scrollTop:0},800);

});

//show and hide scroll to top button
function toTopBtn() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {toTopBtn()};

//mobile nav
(function(){

   // var position, direction, previous;

/*	$(window).scroll(function(){
			
		if( $(this).scrollTop() >= position ){
			direction = 'down';
			if(direction !== previous){
				$('button#mobile-toggle').addClass('hide');
				previous = direction;
			}
		} else {
			direction = 'up';
			if(direction !== previous){
				$('button#mobile-toggle').removeClass('hide');
				previous = direction;
			}
		}
		position = $(this).scrollTop();
	});*/

	// sliding menu mobile 
	$('button#mobile-toggle').on('click', function(event){
    
		event.preventDefault();
	
		// create menu variables
		var slideoutMenu = $('nav ');
		var slideoutMenuWidth = $('nav').width();
	
		// toggle open class
		slideoutMenu.toggleClass("open");
	
		// slide menu
		if (slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				left: "0px"
			});	
		} else {
			slideoutMenu.animate({
				left: -slideoutMenuWidth
			}, 500);	
		}
	});

})()

//slideshow
showSlides();

