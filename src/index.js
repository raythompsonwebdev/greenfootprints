import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
//import {showSlidesOne, plusSlidesOne} from "./static/js/showSlidesOne"
//import handlebars from 'handlebars';
//import $ from "jquery";

/* eslint-disable no-console */

const menuToggle = document.querySelector("#mobile-toggle");
const slideoutMenu = document.querySelector("#mobile-nav");

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

const menuLinks = document.querySelectorAll(".nav-links");

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
