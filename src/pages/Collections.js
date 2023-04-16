//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import CollectionSlide from '../components/CollectionSlide.js';
import collectionData from '../collectionData.js';

const Collections = () => {
  useEffect(() => {
    // Slider 1
    let slideIndex = 0;

    const collectionBoxSlides = (n) => {
      let i;

      // get html collection
      const slides = document.getElementsByClassName('collection-slide');

      //convert html collection into an array.
      const slideArray = Array.from(slides);

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slideArray.forEach((slides) => {
        slides.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    /* eslint-disable no-console */
    const collectionSlides = (n) => {
      collectionBoxSlides((slideIndex += n));
    };

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      collectionSlides(-1);
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      collectionSlides(1);
    });
  });

  return (
    <div className="page-wrapper" id="collections">
      <main className="content">
        <h2 className="content-title">Collections &amp; Sorting</h2>
        <div id="collection-slides">
          <div className="mask">
            {collectionData.map((slide) => (
              <CollectionSlide
                data={slide}
                key={slide.id}
                classname="collection-slide"
              />
            ))}

            <a className="prev" href="#">
              &#10094;
            </a>
            <a className="next" href="#">
              &#10095;
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collections;
