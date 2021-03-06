var slideIndex = 1;

showSlidesOne(slideIndex);

/* eslint-disable no-console */

const plusSlidesOne = (n) => {
  showSlidesOne((slideIndex += n));
};

let nextBtn = document.querySelector("a.next");
let prevBtn = document.querySelector("a.prev");

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("next working");
  plusSlidesOne(1);
});

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("next working");
  plusSlidesOne(-1);
});

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

export { showSlidesOne, plusSlidesOne };
