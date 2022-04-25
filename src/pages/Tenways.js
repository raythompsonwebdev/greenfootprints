//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import CollectionSlide from '../components/CollectionSlide.js';
import TenWaysData from '../static/data/tenways.json';

function TenWays() {
  useEffect(() => {
    let slideIndex = 1;

    // Slider 3
    const recycleBoxSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName('contentbox');

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    const recycleSlides = (n) => {
      recycleBoxSlides((slideIndex += n));
    };

    const prevWays = document.querySelector('.prevWays');
    const nextWays = document.querySelector('.nextWays');

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
      <section className="content">
        <h2>10 Ways to recycle</h2>
        <div id="tenways-boxes">
          <div className="mask">
            {TenWaysData.map((slide) => (
              <CollectionSlide
                data={slide}
                key={slide.id}
                classname="contentbox"
              />
            ))}

            <a className="prevWays" href="http://ww.google.com">
              &#10094;
            </a>
            <a className="nextWays" href="http://ww.google.com">
              &#10095;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TenWays;
