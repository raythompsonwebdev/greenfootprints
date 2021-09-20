let slideIndex = 1;
// Slider 3
const recycleBoxSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("recycle-fact");
  const dots = document.getElementsByClassName("dot");
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
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

recycleBoxSlides(slideIndex);

// Next/previous controls 3
function recycleSlidesPrev(n) {
  recycleBoxSlides((slideIndex += n));
}

// Next/previous controls 3
function recycleSlidesNext(n) {
  recycleBoxSlides((slideIndex = n));
}

export default { recycleBoxSlides, recycleSlidesPrev, recycleSlidesNext };
