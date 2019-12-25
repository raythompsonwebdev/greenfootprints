import "./css/normalize.scss";
import "./css/style.scss";
import $ from "jquery";

import "jquery-validation/dist/jquery.validate.js"
import "jquery-validation/dist/additional-methods.js"

import showSlides from "./js/slideShoes.js";

//reduce reuse recyle

import reduceImage from "./images/Large/reduce-image-green-foot-prints-com-large.png";
import recycleImage from "./images/Large/recycle-image-green-foot-prints-com-large.png";
import reuseImage from "./images/Large/reuse-image-green-foot-prints-com-large.png";


//header image
import homeIcon from "./images/Large/logo-green-foot-prints-large.gif";

//slider images ******************************************
import sliderImgOne from "./images/slider/slider-image-2-recyling-green-foot-prints-com.png";
import sliderImgTwo from "./images/slider/slider-image-3-recyling-green-foot-prints-com.png";
import sliderImgThree from "./images/slider/slider-image-4-recyling-green-foot-prints-com.png";

//banner images ******************************************
import paperBottles from "./images/Large/paper-bottles-can-guide-green-foot-prints-com-large.gif";
import flowChart from "./images/Large/recycling-flowchart-green-foot-prints-com-large.gif";
import wordSearch from "./images/Large/wordsearch-green-foot-prints-com-large.gif";


//main page images ******************************************
import mainImageOne from "./images/Large/recyling-materials-green-foot-prints-com-large.gif";
import mainImageTwo from "./images/Large/recyling-bins-green-foot-prints-com-large.png";
//import mainImageThree from "./images/Large/recycle-image-green-foot-prints-com-large.png";
//import mainImageFour from "./images/Large/types-of-recyling-waste-guide-green-foot-prints-com-large.png";
//import mainImageFive from "./images/Large/types-of-recyling-waste-guide-green-foot-prints-com-large.png";

//Ten ways image ******************************************

import tenImageOne from "./images/Large/Image5.jpg";
import tenImageTwo from "./images/Large/house-green-foot-prints-com-large.jpg";
import tenImageThree from "./images/Large/contact-us-image-green-foot-prints-com-large.png";
import tenImageFour from "./images/Large/recycle-continuous-circle-green-foot-prints-com-large.jpg";
import tenImageFive from "./images/Large/respect-recyling-green-foot-prints-com-large.png";
import tenImageSix from "./images/Large/house-in-leaf-green-foot-prints-com-large.jpg";

//header image ******************************************

var homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

//slider images ******************************************

var sliderOneImg = document.querySelector("#sliderOneImg");
sliderOneImg.src = sliderImgOne;

var sliderTwoImg = document.querySelector("#sliderTwoImg");
sliderTwoImg.src = sliderImgTwo;

var sliderThreeImg = document.querySelector("#sliderThreeImg");
sliderThreeImg.src = sliderImgThree;

//banner images ******************************************

var imageOne = document.querySelector("#paperBottles");
imageOne.src = paperBottles;

var imageTwo = document.querySelector("#flowChart");
imageTwo.src = flowChart;

var imageThree = document.querySelector("#wordSearch");
imageThree.src = wordSearch;


//main page images ******************************************

var ImageOne = document.querySelector("#mainImageOne");
ImageOne.src = mainImageOne;

var ImageTwo = document.querySelector("#mainImageTwo");
ImageTwo.src = mainImageTwo;

//var ImageThree = document.querySelector("#mainImageThree");
//ImageThree.src = mainImageThree;

//var ImageFour = document.querySelector("#mainImageFour");
//ImageFour.src = mainImageFour;

//Reuse Recyle Reduce ******************************************

var ReduceImage = document.querySelector("#reduceImage");
ReduceImage.src = reduceImage;

var RecycleImage = document.querySelector("#recycleImage");
RecycleImage.src = recycleImage;

var ReuseImage = document.querySelector("#reuseImage");
ReuseImage.src = reuseImage;


//10 Ways images ******************************************

var twImageOne = document.querySelector("#tenImageOne");
twImageOne.src = tenImageOne;

var twImageTwo = document.querySelector("#tenImageTwo");
twImageTwo.src = tenImageTwo;

var twImageThree = document.querySelector("#tenImageThree");
twImageThree.src = tenImageThree;

var twImageFour = document.querySelector("#tenImageFour");
twImageFour.src = tenImageFour;

var twImageFive = document.querySelector("#tenImageFive");
twImageFive.src = tenImageFive;

var twImageSix = document.querySelector("#tenImageSix");
twImageSix.src = tenImageSix;


//Scroll ******************************************
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

//Validation ******************************************
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

//scroll to top button function ******************************************
$("#myBtn").on('click', function (event) {
        
    event.preventDefault();

    $('html,body').animate({scrollTop:0},800);

});

//show and hide scroll to top button ******************************************
function toTopBtn() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.querySelector("#myBtn").style.display = "block";
    } else {
        document.querySelector("#myBtn").style.display = "none";
    }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {toTopBtn()};

//mobile nav ******************************************
(function(){
 /*
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
				top: "0px"
			});	
		} else {
			slideoutMenu.animate({
				top: -slideoutMenuWidth
			}, 500);	
		}
    });
    */
    // sliding menu mobile

})()

var menuToggle = document.querySelector('#mobile-toggle');

menuToggle.addEventListener('click', function(event){

	event.preventDefault();

	// create menu variables
	var slideoutMenu = document.querySelector('#mobile-nav');

	var slideoutMenuHeight = slideoutMenu.offsetHeight;
	
	// toggle open class
	slideoutMenu.classList.toggle("open");

	slideoutMenu.style.transition = 'all 0.3s ease-in 0s';

	// slide menu
	if (slideoutMenu.classList.contains("open")) {

		slideoutMenu.style.top = "0px";
		

	} else {

		
		slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
		slideoutMenu.style.top = -slideoutMenuHeight + 'px';
	}


}, false);


//slideshow ******************************************
showSlides();

