import React, { useEffect } from 'react';
import RecyclingFactSlide from '../components/RecyclingFactSlide.js';
import recyclingfactsData from 'static/data/recyclingfactsData.js';

function RecyclingFacts() {
  // useEffect(() => {
  //   let slideIndex = 0;

  //   // Slider 3
  //   const recycleBoxSlides = (n) => {
  //     // let i;
  //     const slides = document.getElementsByclassName('recycling-facts-slide');

  //     if (slides === undefined) {
  //       return false;
  //     }

  //     //convert html collection into an array.
  //     const slideArray = Array.from(slides);

  //     if (n > slides.length) {
  //       slideIndex = 1;
  //     }
  //     if (n < 1) {
  //       slideIndex = slides.length;
  //     }
  //     // eslint-disable-next-line no-plusplus
  //     slideArray.forEach((slides) => {
  //       slides.style.display = 'none';
  //     });

  //     slides[slideIndex - 1].style.display = 'block';
  //     slides[slideIndex - 1].classList.add('fade');
  //   };

  //   const recycleSlides = (n) => {
  //     recycleBoxSlides((slideIndex += n));
  //   };

  //   const prevFacts = document.querySelector('.facts-prev');
  //   const nextFacts = document.querySelector('.facts-next');

  //   prevFacts.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     recycleSlides(-1);
  //   });

  //   nextFacts.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     recycleSlides(1);
  //   });
  // }, []);

  return (
    <div className="page-wrapper" id="recycling-facts">
      <main className="content">
        <h2 className="content-title">Recycling facts and figures</h2>

        <div id="recycling-facts-slides">
          <RecyclingFactSlide
            slides={recyclingfactsData}
            className="recycling-facts-slide"
          />
        </div>
      </main>
    </div>
  );
}

export default RecyclingFacts;
