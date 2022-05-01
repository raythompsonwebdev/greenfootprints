import React, { useEffect } from 'react';
import HomeSlide from '../components/HomeSlide.js';
import siteImages from '../static/data/slider-images.json';

function HomeSlider() {
  useEffect(() => {
    let slideIndex = 0;

    const homePageSlider = () => {
      let i;

      const slides = document.getElementsByClassName('sliders');

      //convert html collection into an array.
      const slideArray = Array.from(slides);

      slideArray.forEach((slides) => {
        slides.style.display = 'none';
      });

      // eslint-disable-next-line no-plusplus
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');

      setTimeout(homePageSlider, 4000); // Change image every 2 seconds
    };

    homePageSlider();
  });

  return (
    <section id="slider">
      <div className="flexslider">
        <div id="slides">
          {siteImages.map((slide) => (
            <HomeSlide data={slide} key={slide.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
