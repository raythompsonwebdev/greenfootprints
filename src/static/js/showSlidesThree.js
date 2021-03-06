var slideIndex = 1;

showSlidesThree(slideIndex);

// Next/previous controls 3
function plusSlidesThree(n) {
  showSlidesThree(slideIndex += n);
}

// Next/previous controls 3
function currentSlideThree(n) {
  showSlidesThree(slideIndex = n);
}

// Slider 3
function showSlidesThree(n) {
  var i;
  var slides = document.getElementsByClassName("recycle-fact");
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

export default {showSlidesThree, plusSlidesThree, currentSlideThree}


