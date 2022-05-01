import React from 'react';
import { Link } from 'react-router-dom';

function HomeSlide(props) {
  const { data } = { ...props };
  const { caption, imageAlt, imageId, imageUrl, link, linktitle, title } = data;

  return (
    <figure className="sliders">
      <figcaption className="slider-caption">
        <h2>{title}</h2>
        <p>{caption}</p>
        <Link to={link} title={linktitle} className="largeButton homeBgColor">
          Read More
        </Link>
      </figcaption>
      <img id={imageId} alt={imageAlt} src={imageUrl} />
    </figure>
  );
}

export default HomeSlide;
