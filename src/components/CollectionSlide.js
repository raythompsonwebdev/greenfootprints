//import { hot } from 'react-hot-loader/root';
import React from 'react';

const CollectionSlide = ({ data, classname }) => {
const {title,text,image, alt} = {...data};
  return (
    <article className={classname}>
      <h3 className="collection-slide-title">{title}</h3>
      <p className="collection-slider-text">{text}</p>
      <img id="ten-image-one" src={image} alt={alt} />
    </article>
  );
};

export default CollectionSlide;
