//import { hot } from 'react-hot-loader/root';
import React from 'react';

const CollectionSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h1 className="collections_title">{data.title}</h1>
      <p className="collection-text">{data.text}</p>
      <img id="tenImageOne" src={data.image} alt={data.alt} />
    </article>
  );
};

export default CollectionSlide;
