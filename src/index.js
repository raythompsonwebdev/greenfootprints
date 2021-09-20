import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
import tenways from "./static/data/tenways.json";
import collections from "./static/data/collections.json";
import recyclingfacts from "./static/data/recyclingfacts.json";
import "./static/js/scrollScreen";
import showSlides from "./static/js/slide-functions/showSlides";

/* eslint-disable no-console */
// header image
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";

// header image ******************************************
const homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

// home page
const template = require("./views/main.hbs");

const html = template();
const homeContainer = document.getElementById("home");
homeContainer.innerHTML = html;
// home page slider function
showSlides();

// whatcando page
const template2 = require("./views/whatcando.hbs");

const html2 = template2();
const whatcandoContainer = document.getElementById("whatcando");
whatcandoContainer.innerHTML = html2;

// recycling page
const template3 = require("./views/recycling.hbs");

const html3 = template3();
const recyclingContainer = document.getElementById("recycling");
recyclingContainer.innerHTML = html3;

// recycling facts page
const template4 = require("./views/recyclingfacts.hbs");

const html4 = template4({ recyclingfacts });
const recyclingfactsContainer = document.getElementById("recycling-facts");
recyclingfactsContainer.innerHTML = html4;

// collections page
const template5 = require("./views/collections.hbs");

const html5 = template5({ collections });
const collectionsContainer = document.getElementById("collections");
collectionsContainer.innerHTML = html5;

// tenways page
const template6 = require("./views/tenways.hbs");

const html6 = template6({ tenways });
const tenwaysContainer = document.getElementById("ten-ways");
tenwaysContainer.innerHTML = html6;

// contact page
const template7 = require("./views/contact.hbs");

const html7 = template7();
const contactContainer = document.getElementById("contact");
contactContainer.innerHTML = html7;

const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const prev3 = document.querySelector(".prev3");
const next3 = document.querySelector(".next3");

const sliderId = ["collection-box", "contentbox", "recycle-facts"];
const sliderIndex = [1, 1, 1];

const pagePanelSlides = (n, no) => {
  let i;

  const x = document.getElementsByClassName(sliderId[no]);

  if (n > x.length) {
    sliderIndex[no] = 1;
  }
  if (n < 1) {
    sliderIndex[no] = x.length;
  }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[sliderIndex[no] - 1].style.display = "block";
};
pagePanelSlides(1, 0);
pagePanelSlides(1, 1);
pagePanelSlides(1, 2);

const plusSlides = (n, no) => {
  pagePanelSlides((sliderIndex[no] += n), no);
};

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

export default { pagePanelSlides };
