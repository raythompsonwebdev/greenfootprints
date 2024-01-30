import React from 'react';
import { Link } from 'react-router-dom';

function HomeSlide({ data }) {
  const { caption, imageAlt, imageId, imageUrl, link, linktitle, title } = data;

  return (
    <figure
      className="sliders"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: '10% 50%',
        backgroundRepeat: 'no-repeat',
      }}>
      <figcaption className="slider-caption">
        <h2 className="slider-caption-title">{title}</h2>
        <p className="slider-caption-text">{caption}</p>
        <Link to={link} title={linktitle} className="large-button homebg-color">
          Read More
        </Link>
      </figcaption>
      {/* <img
        id={imageId}
        className="slider-caption-image"
        alt={imageAlt}
        src={imageUrl}
      /> */}
    </figure>
  );
}

export default HomeSlide;
