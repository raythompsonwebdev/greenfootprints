import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import HomeSlide from 'components/HomeSlide.js';
import siteImages from 'static/data/siteImages.js';

function HomeSlider() {
  useEffect(() => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    let slideIndex = 0;

    const homePageSlider = () => {
      //   const interval = setInterval(() => {
      //     setCurrentIndex((prevIndex) =>
      //         prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      //     );
      // }, 4000); // Change image every 4 seconds

      let i;

      const slides = document.querySelectorAll('.sliders');

      // eslint-disable-next-line no-plusplus
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
      }

      // eslint-disable-next-line no-plusplus
      slideIndex++;

      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      if (slides[slideIndex - 1] !== undefined) {
        slides[slideIndex - 1].classList.remove('hidden');
      }

      setTimeout(homePageSlider, 4000); // Change image every 4 seconds

      // return () => clearInterval(interval); // Cleanup the interval on component unmount
    };

    homePageSlider();
  }, []); // run after dom content loaded
  // }, [slides.length]);

  return (
    <section id="slider">
      <div className="flexslider">
        <div id="slides">
          {siteImages.map((slide, index) => (
            <HomeSlide data={slide} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSlider;
