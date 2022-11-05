//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import TenwaysSlide from '../components/TenwaysSlide.js';
import TenWaysData from '../static/data/tenways.json';

function TenWays() {
  useEffect(() => {
    let slideIndex = 0;

    // Slider 3
    const recycleBoxSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName('tenways-slide');

      //convert html collection into an array.
      const slideArray = Array.from(slides);

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      // eslint-disable-next-line no-plusplus
      slideArray.forEach((slides) => {
        slides.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    const recycleSlides = (n) => {
      recycleBoxSlides((slideIndex += n));
    };

    const prevWays = document.querySelector('.tenways-prev');
    const nextWays = document.querySelector('.tenways-next');

    prevWays.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(-1);
    });

    nextWays.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(1);
    });
  });

  return (
    <div className="page-wrapper" id="ten-ways">
      <main className="content">
        <h2 className="content-title">10 Ways to recycle</h2>
        <div id="tenways-slides">
          <div className="mask">
            {TenWaysData.map((slide) => (
              <TenwaysSlide
                data={slide}
                key={slide.id}
                classname="tenways-slide"
              />
            ))}

            <a className="tenways-prev" href="#">
              &#10094;
            </a>
            <a className="tenways-next" href="#">
              &#10095;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TenWays;
