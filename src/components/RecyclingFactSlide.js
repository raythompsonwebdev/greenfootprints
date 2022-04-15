//import { hot } from 'react-hot-loader/root';
import React from 'react'

const RecyclingFactSlide = (props) => {
  const { data, classname } = { ...props }

  return (
    <article className={classname}>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <ul>
        {data.list
          ? data.list.map((listitem) => <li>{listitem.text}</li>)
          : false}
      </ul>
    </article>
  )
}

export default RecyclingFactSlide
