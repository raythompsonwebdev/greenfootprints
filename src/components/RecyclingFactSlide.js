//import { hot } from 'react-hot-loader/root';
import React from 'react';

const RecyclingFactSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3 className="recycling-facts-slide-title">{data.title}</h3>
      <p className="recycling-facts-slide-text">{data.text}</p>
      <ul className="recycling-facts-slide-list">
        {!data.list ? (
          <img
            id="tenImageOne"
            src={data.image}
            className="recycling-facts-slide-image"
          />
        ) : (
          data.list.map((listitem, index) => (
            <li key={index} className="recycling-facts-slide-list-item">
              {listitem.text}
            </li>
          ))
        )}
      </ul>
    </article>
  );
};

export default RecyclingFactSlide;
