import React from 'react'
import { Link } from 'react-router-dom'

function HomePageCard(props) {
  const { data } = { ...props }

  return (
    <article className="home_contentbox">
      <h1>Household Recycling Guide</h1>
      <figure className="contentbox_image">
        <img id={data.imageId} src={data.imageUrl} alt={data.alt} />

        <figcaption>
          <p> {data.text}</p>
          <Link
            className="content-button"
            to={data.downloadlink}
            download={data.download}
            title={data.title}
          >
            Download PDF
          </Link>
        </figcaption>
      </figure>
    </article>
  )
}

export default HomePageCard
