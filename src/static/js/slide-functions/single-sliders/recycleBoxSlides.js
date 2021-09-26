let slideIndex = 1;

const prevFacts = document.querySelector(".prevFacts");
const nextFacts = document.querySelector(".nextFacts");
// Slider 3
const recycleBoxSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("recycle-facts");

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

const recycleSlides = (n) => {
  recycleBoxSlides((slideIndex += n));
};

prevFacts.addEventListener("click", (e) => {
  e.preventDefault();
  recycleSlides(-1);
});

nextFacts.addEventListener("click", (e) => {
  e.preventDefault();
  recycleSlides(1);
});

export default { recycleBoxSlides, recycleSlides };
