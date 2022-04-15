//import { hot } from 'react-hot-loader/root';
import React from 'react';

const RecyclingFactSlide = (props) => {
  const { data, classname } = { ...props };

  return (
    <article className={classname}>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
      <ul>
        {data.list ? (
          data.list.map((listitem) => <li>{listitem.text}</li>)
        ) : (
          <img id="tenImageOne" src={data.image} />
        )}
      </ul>
    </article>
  );
};

export default RecyclingFactSlide;
