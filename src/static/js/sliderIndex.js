let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let sliderId = ["collection-box", "contentbox", "recycle-facts"];
let sliderIndex = [1, 1, 1];

function plusSlides(n, no) {
 sliderSlider((sliderIndex[no] += n), no);
}

prev.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlides(-1, 0);
 plusSlides(-1, 1);
 plusSlides(-1, 2);
});

next.addEventListener("click", (e) => {
 e.preventDefault();
 plusSlides(1, 0);
 plusSlides(1, 1);
 plusSlides(1, 2);
});

function sliderSlider(n, no) {
 var i;

 var x = document.getElementsByClassName(sliderId[no]);

 console.log(x);

 if (n > x.length) {
  sliderIndex[no] = 1;
 }
 if (n < 1) {
  sliderIndex[no] = x.length;
 }
 for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
 }
 console.log(sliderIndex[no]);

 x[sliderIndex[no] - 1].style.display = "block";
}

//sliderSlider();

export default sliderSlider;
