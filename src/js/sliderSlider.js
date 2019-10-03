  
export default function sliderSlider() {

  let plusSlides = document.getElementById("next");
  let currentSlide = document.getElementById("prev");

  
  //console.log(plusSlides);

  let slideIndex = 1;
    
    showSlider(slideIndex);

    plusSlides.addEventListener('click', (n) => {
      showSlider(slideIndex += n);

    })

    currentSlide.addEventListener('click', (n) => {
        showSlider(slideIndex = n);
      })


    function showSlider(n) {
      let i;
      let slides = document.getElementsByClassName("recycle-facts");
      let dots = document.getElementsByClassName("recycle-facts__dots--dot");

      console.log(slides[slideIndex - 1]);

      if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
        slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
}