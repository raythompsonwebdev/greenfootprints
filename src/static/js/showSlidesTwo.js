var slideIndex = 1;

showSlidesTwo(slideIndex);

// Next/previous controls 2
function plusSlidesTwo(n) {
  showSlidesTwo(slideIndex += n);
}

// Next/previous controls 2
function currentSlideTwo(n) {
  showSlidesTwo(slideIndex = n);
}

// Slider 2
function showSlidesTwo(n) {
  var i;
  var slides = document.getElementsByClassName("contentbox");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

export default {showSlidesTwo, plusSlidesTwo, currentSlideTwo}


