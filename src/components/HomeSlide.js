import React from 'react';
import { Link } from 'react-router-dom';

function HomeSlide({ data, hidden }) {
  const { caption, imageAlt, imageId, imageUrl, link, linktitle, title } = data;

  const slidersStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: '10% 50%',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <figure
      className={`sliders ${hidden ? 'hidden' : ''}`}
      style={slidersStyle}>
      <figcaption className="slider-caption">
        <h2 className="slider-caption-title">{title}</h2>
        <p className="slider-caption-text">{caption}</p>
        <Link to={link} title={linktitle} className="large-button homebg-color">
          Read More
        </Link>
      </figcaption>
    </figure>
  );
}

export default HomeSlide;
