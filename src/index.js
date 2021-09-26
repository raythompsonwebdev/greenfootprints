import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
// import "./static/js/menusToggle";
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";
// header image
const homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

// Your code to run since DOM is loaded and ready
const menuToggle = document.querySelector("#mobile-toggle");
// create menu variables
const slideoutMenu = document.querySelector(".site_navigation");

const slideoutMenuHeight = slideoutMenu.offsetHeight;

// mobile menu toggle button
menuToggle.addEventListener("click", (event) => {
  event.preventDefault();

  // toggle open class
  slideoutMenu.classList.toggle("open");

  slideoutMenu.style.transition = "all 0.3s ease-in 0s";

  // slide menu
  if (slideoutMenu.classList.contains("open")) {
    slideoutMenu.style.top = "0px";
  } else {
    slideoutMenu.style.transition = "all 0.3s ease-in 0s";
    slideoutMenu.style.top = `${-slideoutMenuHeight}px`;
  }
});
