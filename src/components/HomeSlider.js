
import React, { useEffect } from "react";
import HomeSlide from "../components/HomeSlide.js";
import siteImages from "../static/data/slider-images.json";

function HomeSlider() {


  useEffect(() => {

    let slideIndex = 0;

    const homePageSlider = () => {
      let i;

      const slides = document.getElementsByClassName("sliders");

      // eslint-disable-next-line no-plusplus
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // eslint-disable-next-line no-plusplus
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = "block";

      setTimeout(homePageSlider, 4000); // Change image every 2 seconds
    };

    homePageSlider();

  });

  return (

    <section id="slider">
    <div className="main-slider">
      <div className="flexslider">
        <ul className="slides">
          {siteImages.map((slide)=> <HomeSlide data={slide} key={slide.id} /> )};
        </ul>
      </div>
    </div>
  </section>

  );
}

export default HomeSlider;
