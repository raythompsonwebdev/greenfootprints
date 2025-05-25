import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function HomeSlide({ data, hidden }) {
  const { caption, imageAlt, imageId, imageUrl, link, linktitle, title } = data;

  console.log(imageAlt, imageId);

  const slidersStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: "10% 50%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <figure
      className={`sliders ${hidden ? "hidden" : ""}`}
      style={slidersStyle}
    >
      <figcaption className="slider-caption">
        <h2 className="slider-caption-title">{title}</h2>
        <p className="slider-caption-text">{caption}</p>
        <Link to={link} title={linktitle} className="large-button homebg-color">
          Read More
        </Link>
      </figcaption>
    </figure>
  );
}

HomeSlide.propTypes = {
  data: PropTypes.object.isRequired,
  hidden: PropTypes.string.isRequired,
};

export default HomeSlide;
