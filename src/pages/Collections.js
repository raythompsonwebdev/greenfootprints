//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import CollectionSlide from '../components/CollectionSlide.js';
import CollectionData from '../static/data/collections.json';

const Collections = () => {
  useEffect(() => {
    let slideIndex = 1;
    // Slider 1
    const collectionBoxSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName('collection-box');

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
      <section className="content">
        <h2>Collections &amp; Sorting</h2>
        <div id="collection-boxes">
          <div className="mask">
            {CollectionData.map((slide) => (
              <CollectionSlide
                data={slide}
                key={slide.id}
                classname="collection-box"
              />
            ))}

            <a className="prev" href="http://www.google.com">
              &#10094;
            </a>
            <a className="next" href="http://www.google.com">
              &#10095;
            </a>
          </div>
        </div>
      </section>
      <div className="clearfix"> </div>
    </div>
  );
};

export default Collections;
