// slider button/links
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevFacts = document.querySelector(".prevFacts");
const nextFacts = document.querySelector(".nextFacts");
const prevWays = document.querySelector(".prevWays");
const nextWays = document.querySelector(".nextWays");

// page sliders
const sliderId = ["collection-box", "contentbox", "recycle-facts"];
const sliderIndex = [1, 1, 1];

const multiSlider = (n, no) => {
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

const singleSlider = (n, no) => {
  multiSlider((sliderIndex[no] += n), no);
};

prev.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(-1, 0);
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(1, 0);
});

prevWays.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(-1, 1);
});

nextWays.addEventListener("click", (e) => {
  e.preventDefault();
  singleSlider(1, 1);
});

prevFacts.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(-1, 2);
});

nextFacts.addEventListener("click", (e) => {
  e.preventDefault();

  singleSlider(1, 2);
});

export default { multiSlider, singleSlider };
