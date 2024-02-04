import React, { useEffect } from 'react';
import TenwaysSlide from 'components/TenwaysSlide.js';
import tenwaysData from 'static/data/tenwaysData.js';

function TenWays() {
  useEffect(() => {
    let slideIndex = 0;

    // Slider 3
    const recycleBoxSlides = (n) => {
      // let i;
      const slides = Array.from(
        document.getElementsByClassName('tenways-slide')
      );

      if (slides === undefined) {
        return false;
      }

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      // eslint-disable-next-line no-plusplus
      slides.forEach((slides) => {
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
  }, []);

  return (
    <div className="page-wrapper" id="ten-ways">
      <main className="content">
        <h2 className="content-title">10 Ways to recycle</h2>
        <div id="tenways-slides">
          <div className="mask">
            {tenwaysData.map((slide, index) => (
              <TenwaysSlide
                data={slide}
                key={index}
                classname="tenways-slide"
              />
            ))}

            <button className="tenways-prev">&#10094;</button>
            <button className="tenways-next">&#10095;</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TenWays;
