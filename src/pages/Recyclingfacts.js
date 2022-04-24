//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import RecyclingFactSlide from '../components/RecyclingFactSlide.js';
import RecyclingFactsData from '../static/data/recyclingfacts.json';

function RecyclingFacts() {
  useEffect(() => {
    let slideIndex = 0;

    // Slider 3
    const recycleBoxSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName('recycle-facts');

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

    const prevFacts = document.querySelector('.prevFacts');
    const nextFacts = document.querySelector('.nextFacts');

    prevFacts.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(-1);
    });

    nextFacts.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(1);
    });
  });

  return (
    <div className="page-wrapper" id="recycling-facts">
      <section className="content">
        <h2>Recycling facts and figures</h2>

        <div id="facts-boxes">
          <div className="mask">
            {RecyclingFactsData.map((slide) => (
              <RecyclingFactSlide
                data={slide}
                key={slide.id}
                classname="recycle-facts"
              />
            ))}

            <a className="prevFacts" href="http://ww.google.com">
              &#10094;
            </a>
            <a className="nextFacts" href="http://ww.google.com">
              &#10095;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecyclingFacts;
