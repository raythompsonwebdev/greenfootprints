import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
import HomeSlide from '../components/HomeSlide.js';
import sliderImageTwo from '../static/images/slider/slider-image2-greenfootprints-com.png';
import sliderImageThree from '../static/images/slider/slider-image3-greenfootprints-com.png';
import sliderImageFour from '../static/images/slider/slider-image4-greenfootprints-com.png';

const siteImages = [
  {
    id: 0,
    imageAlt: 'recycling-advice-green-foot-prints-com',
    imageUrl: sliderImageTwo,
    imageId: 'sliderimg-one',
    title: 'Recycling',
    caption:
      'Award winning recycling website. Voted best recyling website 2010 and 2012',
    link: '/recycling',
    linktitle: 'link to recycling',
  },
  {
    id: 1,
    imageAlt: 'recycling-advice-green-foot-prints-com',
    imageUrl: sliderImageThree,
    imageId: 'sliderimg-two',
    title: 'Reduce, Reuse, Recycle',
    caption:
      "There are three key factors when thinking about how to recycle &apos; The 3 R's:",
    link: '/recyclingfacts',
    linktitle: 'link to recycling facts',
  },
  {
    id: 2,
    imageAlt: 'recycling-advice-green-foot-prints-com',
    imageUrl: sliderImageFour,
    imageId: 'sliderimg-three',
    title: 'Recycling Different Materials',
    caption:
      'You can find out how to recycle different materials such as Glass, Batteries and Mobile Phones by simply using our list by clicking button below',
    link: '/tenways',
    linktitle: 'link to ten ways to recycle',
  },
];

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
