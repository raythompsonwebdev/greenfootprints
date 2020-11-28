import "./css/sass/normalize.scss";
import "./css/sass/style.scss";
//import $ from "jquery";

/* eslint-disable no-console */

// (function(){

//   var template = document.querySelector("#itemTemplate");
//   // Handlebars compiles the template into a callable function
//   var compiled = Handlebars.compile(template);
//   var rendered = compiled();
//   // call the compiled function with the template data
//   var result = rendered({id:"gghfdgfdg"});
//   document.querySelector("#container").innerHTML = result;


// })()

var template = document.querySelector("#itemTemplate");
// Handlebars compiles the template into a callable function
var renderer = Handlebars.compile(template);

// call the compiled function with the template data
var result = renderer({});

document.querySelector("#container").innerHTML = result;


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







