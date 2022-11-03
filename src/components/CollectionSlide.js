//import { hot } from 'react-hot-loader/root';
import React from 'react';

const CollectionSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3>{data.title}</h3>
      <p className="collection-slider-text">{data.text}</p>
      <img id="tenImageOne" src={data.image} alt={data.alt} />
    </article>
  );
};

export default CollectionSlide;
