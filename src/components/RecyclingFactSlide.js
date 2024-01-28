import React from 'react';

const RecyclingFactSlide = ({ data, classname } ) => {
  const {title,text,image, alt,list} = {...data};
  return (
    <article className={classname}>
      <h3 className="recycling-facts-slide-title">{title}</h3>
      <p className="recycling-facts-slide-text">{text}</p>
      <ul className="recycling-facts-slide-list">
        {!list ? (
          <img
            id="ten-image-one"
            src={image}
            className="recycling-facts-slide-image"
            alt={alt}
          />
        ) : (
          list.map((listitem, indx) => (
            <li key={indx} className="recycling-facts-slide-list-item">
              {listitem.text}
            </li>
          ))
        )}
      </ul>
    </article>
  );
};

export default RecyclingFactSlide;
