import "./src/css/sass/normalize.scss";
import "./src/css/sass/style.scss";
import $ from "jquery";
import showSlides from "./src/js/slideShoes.js";
// import Main from './views/main.hbs';
// import Contact from './views/contact.hbs';

/* eslint-disable no-console */


//Scroll ******************************************
(function () {
  // Add smooth scrolling to all links
  $(".nav-links").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior

    console.log(event)
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

})();


//show and hide scroll to top button ******************************************
function toTopBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector("#myBtn").style.display = "block";
  } else {
    document.querySelector("#myBtn").style.display = "none";
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  toTopBtn();
};

var menuToggle = document.querySelector("#mobile-toggle");
var slideoutMenu = document.querySelector("#mobile-nav");

menuToggle.addEventListener(
  "click",
  function (event) {
    event.preventDefault();

    // create menu variables
    //var slideoutMenu = document.querySelector('#mobile-nav');

    var slideoutMenuHeight = slideoutMenu.offsetHeight;

    // toggle open class
    slideoutMenu.classList.toggle("open");

    slideoutMenu.style.transition = "all 0.3s ease-in 0s";

    // slide menu
    if (slideoutMenu.classList.contains("open")) {
      slideoutMenu.style.top = "0px";
    } else {
      slideoutMenu.style.transition = "all 0.3s ease-in 0s";
      slideoutMenu.style.top = -slideoutMenuHeight + "px";
    }
  },
  false
);

var menuLinks = document.querySelectorAll(".nav-links");

menuLinks.forEach(function (e) {
  e.addEventListener(
    "click",
    function () {
      slideoutMenu.classList.remove("open");

      if (!slideoutMenu.classList.contains("open")) {
        slideoutMenu.style.top = "-365px";
      } else {
        slideoutMenu.style.top = "0px";
      }
    },
    false
  );
});

//slideshow ******************************************
showSlides();
