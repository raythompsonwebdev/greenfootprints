
import React from "react";
import { Link } from "react-router-dom";

function HomeSlide(props) {

    const {data} = {...props};
    const {caption, imageAlt, imageId, imageUrl, link, linktitle, title} = data;
    console.log(imageUrl);

  return (

    <li className="sliders">
    <div className="slider-caption">
        <h1>{title}</h1>
        <p>{caption}</p>
        <Link to={link} title={linktitle} className="largeButton homeBgColor">Read More</Link>
    </div>
    <img id={imageId} alt={imageAlt} src={imageUrl}/>
</li>

  );
}

export default HomeSlide;
