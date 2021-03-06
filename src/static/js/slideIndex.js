
  let slideIndex = [1, 1, 1];
  let slideId = ["collection-box", "contentbox", "recycle-facts"];
  sliderSlider(1, 0);
  sliderSlider(1, 1);
  sliderSlider(1, 2);

  const sliderSlider = (n, no) => {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
      slideIndex[no] = 1
    }
    if (n < 1) {
      slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
  }

  const plusSlides = (n, no) => {
    sliderSlider(slideIndex[no] += n, no);
  }

  export default {sliderSlider, plusSlides}


