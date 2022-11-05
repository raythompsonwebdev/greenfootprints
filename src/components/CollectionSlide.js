//import { hot } from 'react-hot-loader/root';
import React from 'react';

const CollectionSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3 className="collection-slide-title">{data.title}</h3>
      <p className="collection-slider-text">{data.text}</p>
      <img id="ten-image-one" src={data.image} alt={data.alt} />
    </article>
  );
};

export default CollectionSlide;
