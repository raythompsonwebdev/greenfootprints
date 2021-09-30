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

export { collectionBoxSlides, collectionSlides };
