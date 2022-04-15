
import React from "react";
import { Link } from "react-router-dom";


function HomePageCard()  {

  return (
    <article className="home_contentbox">
        <h1>Household Recycling Guide</h1>
        <figure className="contentbox_image">

        <img id="paperBottles" src="/static/images/Large/gif-images/recyling-guide.gif" alt="recycling-advice-green-foot-prints-com" />

        <figcaption>

            <p> A reminder of the three key factors when thinking about how to recycle. Just click button below to download the PDF and print it off.</p>
            <Link className="content-button" to="_https://drive.google.com/open?id=0B8rtAcEuG9wLWlJOWFdBZjBwZ1k" download="household-recycling-guide.pdf" title="household-recycling-guide">Download
            PDF</Link>

        </figcaption>

        </figure>

    </article>
  );
}

export default HomePageCard;
