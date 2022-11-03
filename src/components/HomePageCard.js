import React from 'react';
//import { Link } from 'react-router-dom';

function HomePageCard(props) {
  const { data } = { ...props };

  return (
    <article className="home-page-card">
      <h3 className="home-page-title">{data.title}</h3>
      <figure className="home-page-image">
        <img id={data.imageId} src={data.imageUrl} alt={data.alt} />

        <figcaption classname="card-image-caption">
          <p classname="card-image-text"> {data.text}</p>
          <a
            className="card-image-button"
            href={data.downloadlink}
            download={data.download}
            title={data.title}
            target="blank">
            Download PDF
          </a>
        </figcaption>
      </figure>
    </article>
  );
}

export default HomePageCard;
