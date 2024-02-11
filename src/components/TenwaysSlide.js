import React from 'react';

const TenwaysSlide = ({ data, className }) => {
  const { title, text, image, alt } = { ...data };
  return (
    <article className={className}>
      <h3 className="tenways-slide-title">{title}</h3>
      <p className="tenways-slide-text">{text}</p>
      <img id="tenways-image-one" src={image} alt={alt} />
    </article>
  );
};

export default TenwaysSlide;
