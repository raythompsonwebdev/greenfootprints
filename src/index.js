import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
import showSlides from "./static/js/slideShoes";
import tenways from "./static/data/tenways.json";
import collections from "./static/data/collections.json";
import recyclingfacts from "./static/data/recyclingfacts.json";

/* eslint-disable no-console */
//header image
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";
//header image ******************************************
var homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

//home page
let template = require("./views/index.hbs");
let html = template();
let homeContainer = document.getElementById("home");
homeContainer.innerHTML = html;
//home page slider function
showSlides();

//whatcando page
let template2 = require("./views/whatcando.hbs");
let html2 = template2();
let whatcandoContainer = document.getElementById("whatcando");
whatcandoContainer.innerHTML = html2;

//recycling page
let template3 = require("./views/recycling.hbs");
let html3 = template3();
let recyclingContainer = document.getElementById("recycling");
recyclingContainer.innerHTML = html3;

//recycling facts page
let template4 = require("./views/recyclingfacts.hbs");
const html4 = template4({ recyclingfacts });
let recyclingfactsContainer = document.getElementById("recycling-facts");
recyclingfactsContainer.innerHTML = html4;

//collections page
let template5 = require("./views/collections.hbs");
let html5 = template5({ collections });
let collectionsContainer = document.getElementById("collections");
collectionsContainer.innerHTML = html5;

//tenways page
let template6 = require("./views/tenways.hbs");
let html6 = template6({ tenways });
let tenwaysContainer = document.getElementById("ten-ways");
tenwaysContainer.innerHTML = html6;

//contact page
let template7 = require("./views/contact.hbs");
let html7 = template7();
let contactContainer = document.getElementById("contact");
contactContainer.innerHTML = html7;

let prev1 = document.querySelector(".prev1");
let next1 = document.querySelector(".next1");
let prev2 = document.querySelector(".prev2");
let next2 = document.querySelector(".next2");
let prev3 = document.querySelector(".prev3");
let next3 = document.querySelector(".next3");

let sliderId = ["collection-box", "contentbox", "recycle-facts"];
let sliderIndex = [1, 1, 1];
sliderSlider(1, 0);
sliderSlider(1, 1);
sliderSlider(1, 2);

function plusSlides(n, no) {
 sliderSlider((sliderIndex[no] += n), no);
}

function sliderSlider(n, no) {
 var i;

 var x = document.getElementsByClassName(sliderId[no]);

 if (n > x.length) {
  sliderIndex[no] = 1;
 }
 if (n < 1) {
  sliderIndex[no] = x.length;
 }
 for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
 }

 x[sliderIndex[no] - 1].style.display = "block";
}

prev1.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlides(-1, 0);
});

next1.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlides(1, 0);
});

prev3.addEventListener("click", (e) => {
 e.preventDefault();

 plusSlides(-1, 1);
});

next3.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlides(1, 1);
});

prev2.addEventListener("click", (e) => {
 e.preventDefault();

 plusSlides(-1, 2);
});

next2.addEventListener("click", (e) => {
 e.preventDefault();

 plusSlides(1, 2);
});

/* eslint-disable no-console */

//Your code to run since DOM is loaded and ready
const menuToggle = document.querySelector("#mobile-toggle");
// create menu variables
const slideoutMenu = document.querySelector(".site_navigation");

const slideoutMenuHeight = slideoutMenu.offsetHeight;

//mobile menu toggle button
menuToggle.addEventListener("click", function (event) {
 event.preventDefault();

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
});

// Add smooth scrolling to all links
let navLinks = document.getElementsByClassName("nav-links");
// get body and html elements
const scrollScreen = document.querySelector(["body", "html"]);
// get header element
const siteHeader = document.querySelector("#site_header");
// get all divs with class tab content.
const scrollElements = document.querySelectorAll(".grid_24");

// scrollElements.forEach((el) => {
//   el.style.opacity = 0;
// });

//detect page scroll function
const elementInView = (el, scrollOffset = 115) => {
 const elementTop = el.getBoundingClientRect().top;

 return (
  elementTop <=
  (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
 );
};

//display element on page scroll
const displayScrollElement = (element) => {
 element.classList.add("scrolled");
};

//hide element on page scroll
const hideScrollElement = (element) => {
 element.classList.remove("scrolled");
};

//add animation to element on page scroll
const handleScrollAnimation = () => {
 scrollElements.forEach((el) => {
  if (elementInView(el, 115)) {
   displayScrollElement(el);
  } else {
   hideScrollElement(el);
  }
 });
};

handleScrollAnimation();

//In JavaScript, using the addEventListener() method:  object.addEventListener("scroll", myScript);
window.onscroll = function () {
 //fixes header to top of page on page scroll.
 if (scrollScreen.scrollTop >= 115) {
  siteHeader.classList.add("fixed-header");
 } else {
  siteHeader.classList.remove("fixed-header");
 }
 //handle scroll animation
 handleScrollAnimation();
};
// scrolling function - (https://codepen.io/ugg0t/pen/mqBBBY)
const scrollTo = (element) => {
 scrollScreen.scrollTo({
  behavior: "smooth",
  left: 0,
  top: element.offsetTop - 120, // deduct height of header.
 });
};

// turn HTML collection list of objects into an array
// Iterated over array with forEach.
Array.from(navLinks).forEach((link) => {
 //add event listener to each link
 link.addEventListener("click", function (event) {
  // Store hash
  let hash = event.target.hash;
  //check if has empty
  if (hash !== "") {
   // if not, Prevent default anchor click behavior
   event.preventDefault();

   // select element id converting hash to string using template literal and use as argument in scrolling function.
   scrollTo(document.querySelector(`${hash}`));
  } // End if

  // hide menu when link is clicked
  if (slideoutMenu.classList.contains("open")) {
   slideoutMenu.style.top = -slideoutMenuHeight + "px";
   slideoutMenu.classList.remove("open");
  } else {
   slideoutMenu.style.top = "0px";
  }
 });
});
