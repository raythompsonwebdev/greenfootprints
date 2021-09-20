let slideIndex = 1;

// Slider 2
const contentBoxSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("contentbox");
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

contentBoxSlides(slideIndex);

// Next/previous controls 2
const contentSlidePrev = (n) => {
  contentBoxSlides((slideIndex += n));
};

// Next/previous controls 2
const contentSlideNext = (n) => {
  contentBoxSlides((slideIndex = n));
};

export default { contentBoxSlides, contentSlidePrev, contentSlideNext };
