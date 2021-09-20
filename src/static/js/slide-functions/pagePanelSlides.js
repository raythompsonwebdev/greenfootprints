const prev1 = document.querySelector(".prev1");
const next1 = document.querySelector(".next1");
const prev2 = document.querySelector(".prev2");
const next2 = document.querySelector(".next2");
const prev3 = document.querySelector(".prev3");
const next3 = document.querySelector(".next3");

const sliderId = ["collection-box", "contentbox", "recycle-facts"];
const sliderIndex = [1, 1, 1];

const pagePanelSlides = (n, no) => {
  let i;

  const x = document.getElementsByClassName(sliderId[no]);

  if (n > x.length) {
    sliderIndex[no] = 1;
  }
  if (n < 1) {
    sliderIndex[no] = x.length;
  }
  // eslint-disable-next-line no-plusplus
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[sliderIndex[no] - 1].style.display = "block";
};
pagePanelSlides(1, 0);
pagePanelSlides(1, 1);
pagePanelSlides(1, 2);

const plusSlides = (n, no) => {
  pagePanelSlides((sliderIndex[no] += n), no);
};

prev1.addEventListener("click", (e) => {
  e.preventDefault();
  plusSlides(-1, 0);
});

next1.addEventListener("click", (e) => {
  e.preventDefault();
  plusSlides(1, 0);
});

prev3.addEventListener("click", (e) => {
  e.preventDefault();

  plusSlides(-1, 1);
});

next3.addEventListener("click", (e) => {
  e.preventDefault();
  plusSlides(1, 1);
});

prev2.addEventListener("click", (e) => {
  e.preventDefault();

  plusSlides(-1, 2);
});

next2.addEventListener("click", (e) => {
  e.preventDefault();

  plusSlides(1, 2);
});

export default { pagePanelSlides };
