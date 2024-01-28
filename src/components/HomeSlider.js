import React, { useEffect } from 'react';
import HomeSlide from '../components/HomeSlide.js';
import sliderImageTwo from '../static/images/webp/slider-image2-greenfootprints-com.webp';
import sliderImageThree from '../static/images/webp/slider-image3-greenfootprints-com.webp';
import sliderImageFour from '../static/images/webp/slider-image4-greenfootprints-com.webp';

const siteImages = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    const homePageSlider = () => {
      let slideIndex = 0;
      let i;

      const slides = document.getElementsByClassName('sliders');

      // eslint-disable-next-line no-plusplus
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      // eslint-disable-next-line no-plusplus
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = 'block';

      setTimeout(homePageSlider, 8000); // Change image every 2 seconds
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
