let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

var slideIndex = 1;

showSlidesOne(slideIndex);

/* eslint-disable no-console */
function plusSlidesOne(n) {
 showSlidesOne((slideIndex += n));
}

prev.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlidesOne(-1);
});

next.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlidesOne(1);
});
// Slider 1
function showSlidesOne(n) {
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
}

export { showSlidesOne, plusSlidesOne };
