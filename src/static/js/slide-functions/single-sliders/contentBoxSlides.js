let slideIndex = 1;

const prevWays = document.querySelector(".prevWays");
const nextWays = document.querySelector(".nextWays");

// Slider 3
const contentBoxSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("contentbox");

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

const contentSlides = (n) => {
  contentBoxSlides((slideIndex += n));
};

prevWays.addEventListener("click", (e) => {
  e.preventDefault();
  contentSlides(-1);
});

nextWays.addEventListener("click", (e) => {
  e.preventDefault();
  contentSlides(1);
});

export default { contentBoxSlides, contentSlides };
