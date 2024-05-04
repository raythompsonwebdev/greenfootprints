import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HomeSlide from '../components/HomeSlide.jsx';
import siteImages from '../static/data/siteImages.js';

function HomeSlider({ data }) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length, slideIndex]);

  return (
    <section id="slider">
      <div className="flexslider">
        <div id="slides">
          {siteImages.map((slide, index) => (
            <HomeSlide data={slide} key={index} hidden={index !== slideIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

HomeSlider.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeSlider;
