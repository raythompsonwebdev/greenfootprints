import React from 'react';
//import { Link } from 'react-router-dom';

function HomePageCard(props) {
  const { data } = { ...props };

  return (
    <article className="home_contentbox">
      <h3>{data.title}</h3>
      <figure className="contentbox_image">
        <img id={data.imageId} src={data.imageUrl} alt={data.alt} />

        <figcaption>
          <p> {data.text}</p>
          <a
            className="content-button"
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
