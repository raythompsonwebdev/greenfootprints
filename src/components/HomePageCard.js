import React from 'react';
//import { Link } from 'react-router-dom';

function HomePageCard(props) {
  const { data } = { ...props };

  return (
    <article className="home-page-card">
      <h3 className="home-page-card-title">{data.title}</h3>
      <figure className="home-page-card-image">
        <img id={data.imageId} src={data.imageUrl} alt={data.alt} />

        <figcaption className="home-page-card-caption">
          <p className="card-caption-text"> {data.text}</p>
          <a
            className="card-caption-button"
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
