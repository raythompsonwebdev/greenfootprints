import "./static/sass/normalize.scss";
import "./static/sass/style.scss";

import homePageSlider from "./static/js/slide-functions/homePageSlider";
import { singleSlider } from "./static/js/slide-functions/multiSlider";
import "./static/js/menusToggle";
import "./static/js/hbsfiles";
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";
import "./static/js/scrollScreen";
// header image
const homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

homePageSlider();

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevFacts = document.querySelector(".prevFacts");
const nextFacts = document.querySelector(".nextFacts");
const prevWays = document.querySelector(".prevWays");
const nextWays = document.querySelector(".nextWays");

prev.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(-1, 0);
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(1, 0);
});

prevWays.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(-1, 1);
});

nextWays.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(1, 1);
});

prevFacts.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(-1, 2);
});

nextFacts.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(1, 2);
});
