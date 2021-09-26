import "./static/sass/normalize.scss";
import "./static/sass/style.scss";
// import tenways from "./static/data/tenways.json";
// import collections from "./static/data/collections.json";
// import recyclingfacts from "./static/data/recyclingfacts.json";
// import "./static/js/scrollScreen";
import "./static/js/menusToggle";
// import showSlides from "./static/js/showSlides";
import homeIcon from "./static/images/Large/gif-images/logo-greenfootprints-com.gif";

// header image
const homeImg = document.querySelector("#homeImage");
homeImg.src = homeIcon;

// showSlides();

// // slider button/links
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const prevFacts = document.querySelector(".prevFacts");
// const nextFacts = document.querySelector(".nextFacts");
// const prevWays = document.querySelector(".prevWays");
// const nextWays = document.querySelector(".nextWays");

// // page sliders
// const sliderId = ["collection-box", "contentbox", "recycle-facts"];
// const sliderIndex = [1, 1, 1];

// const pagePanelSlides = (n, no) => {
//   let i;

//   const x = document.getElementsByClassName(sliderId[no]);

//   if (n > x.length) {
//     sliderIndex[no] = 1;
//   }
//   if (n < 1) {
//     sliderIndex[no] = x.length;
//   }
//   // eslint-disable-next-line no-plusplus
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }

//   x[sliderIndex[no] - 1].style.display = "block";
// };

// const pageSlider = (n, no) => {
//   pagePanelSlides((sliderIndex[no] += n), no);
// };

// prev.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageSlider(-1, 0);
// });

// next.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageSlider(1, 0);
// });

// prevWays.addEventListener("click", (e) => {
//   e.preventDefault();

//   pageSlider(-1, 1);
// });

// nextWays.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageSlider(1, 1);
// });

// prevFacts.addEventListener("click", (e) => {
//   e.preventDefault();

//   pageSlider(-1, 2);
// });

// nextFacts.addEventListener("click", (e) => {
//   e.preventDefault();

//   pageSlider(1, 2);
// });
