const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideIndex = 1;
// Slider 1
const collectionBoxSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("collection-box");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
};
/* eslint-disable no-console */
const collectionSlides = (n) => {
  collectionBoxSlides((slideIndex += n));
};

prev.addEventListener("click", (e) => {
  e.preventDefault();
  collectionSlides(-1);
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  collectionSlides(1);
});

export { collectionBoxSlides, collectionSlides };
