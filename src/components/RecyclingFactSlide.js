//import { hot } from 'react-hot-loader/root';
import React from 'react';

const RecyclingFactSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <ul>
        {!data.list ? (
          <img id="tenImageOne" src={data.image} />
        ) : (
          data.list.map((listitem, index) => (
            <li key={index}>{listitem.text}</li>
          ))
        )}
      </ul>
    </article>
  );
};

export default RecyclingFactSlide;
