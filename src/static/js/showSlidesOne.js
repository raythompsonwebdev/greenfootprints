var slideIndex = 1;

/* eslint-disable no-console */

const plusSlidesOne = (n) => {
 showSlidesOne((slideIndex += n));
};

// Slider 1
const showSlidesOne = (n) => {
 var i;
 var slides = document.getElementsByClassName("collection-box");

 if (n > slides.length) {
  slideIndex = 1;
 }

 if (n < 1) {
  slideIndex = slides.length;
 }

 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }

 slides[slideIndex - 1].style.display = "block";
};

showSlidesOne(slideIndex);

export { showSlidesOne, plusSlidesOne };
