import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const RecyclingFactSlide = ({ slides, className }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const collectionBoxSlides = (n) => {
      const slides = document.getElementsByClassName("recycling-facts-slide");

      if (!slides || !slides.length) {
        return false;
      }

      const slideArray = Array.from(slides);
      let newIndex = slideIndex + n;

      if (newIndex > slides.length) {
        newIndex = 1;
      }

      if (newIndex < 1) {
        newIndex = slides.length;
      }

      setSlideIndex(newIndex);

      slideArray.forEach((slide, index) => {
        slide.style.display = index + 1 === newIndex ? "block" : "none";
        if (index + 1 === newIndex) {
          slide.classList.add("fade");
        } else {
          slide.classList.remove("fade");
        }
      });
    };

    const handlePrevClick = (e) => {
      e.preventDefault();
      collectionBoxSlides(-1);
    };

    const handleNextClick = (e) => {
      e.preventDefault();
      collectionBoxSlides(1);
    };

    const prev = document.querySelector(".facts-prev");
    const next = document.querySelector(".facts-next");

    prev.addEventListener("click", handlePrevClick);
    next.addEventListener("click", handleNextClick);

    return () => {
      prev.removeEventListener("click", handlePrevClick);
      next.removeEventListener("click", handleNextClick);
    };
  }, [slideIndex]); // Dependency array includes slideIndex to ensure the effect is re-run when slideIndex changes

  return (
    <div className="mask">
      {slides.map((slide) => (
        <article className={className} key={slide.id}>
          <h3 className="recycling-facts-slide-title">{slide.title}</h3>
          <p className="recycling-facts-slide-text">{slide.text}</p>
          <ul className="recycling-facts-slide-list">
            {!slide.list ? (
              <img
                id="ten-image-one"
                src={slide.image}
                className="recycling-facts-slide-image"
                alt={slide.alt}
              />
            ) : (
              slide.list.map((listitem) => (
                <li key={slide.id} className="recycling-facts-slide-list-item">
                  {listitem.text}
                </li>
              ))
            )}
          </ul>
        </article>
      ))}

      <button className="facts-prev">&#10094;</button>
      <button className="facts-next">&#10095;</button>
    </div>
  );
};

RecyclingFactSlide.propTypes = {
  slides: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default RecyclingFactSlide;
