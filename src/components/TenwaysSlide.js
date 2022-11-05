//import { hot } from 'react-hot-loader/root';
import React from 'react';

const TenwaysSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3 className="tenways-slide-title">{data.title}</h3>
      <p className="tenways-slide-text">{data.text}</p>
      <img id="tenways-image-one" src={data.image} alt={data.alt} />
    </article>
  );
};

export default TenwaysSlide;
