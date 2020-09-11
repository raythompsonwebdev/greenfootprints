import "./css/sass/normalize.scss";
import "./css/sass/style.scss";
import $ from "jquery";
import showSlides from "./js/slideShoes.js";

// import Main from './views/main.hbs';
// import Contact from './views/contact.hbs';

/* eslint-disable no-console */

// MainI.innerHTML = Main();

// var ContI = document.getElementById('contact');
// ContI.innerHTML = Contact();


//Scroll ******************************************
(function () {
  /* ==========================================
  scrollTop() >= 100
  Should be equal the the height of the header
  ========================================== */

  // Add smooth scrolling to all links
  $(".nav-links").on("click", function (event) {
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
