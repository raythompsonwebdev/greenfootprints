import React, { useState, useEffect } from 'react';

const TenwaysSlide = ({ slides, className }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const collectionBoxSlides = (n) => {
      const slides = document.getElementsByClassName('tenways-slide');

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
        slide.style.display = index + 1 === newIndex ? 'block' : 'none';
        if (index + 1 === newIndex) {
          slide.classList.add('fade');
        } else {
          slide.classList.remove('fade');
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

    const prev = document.querySelector('.tenways-prev');
    const next = document.querySelector('.tenways-next');

    prev.addEventListener('click', handlePrevClick);
    next.addEventListener('click', handleNextClick);

    return () => {
      prev.removeEventListener('click', handlePrevClick);
      next.removeEventListener('click', handleNextClick);
    };
  }, [slideIndex]); // Dependency array includes slideIndex to ensure the effect is re-run when slideIndex changes

  return (
    <div className="mask">
      {slides.map((slide) => (
        <article className={className} key={slide.id}>
          <h3 className="tenways-slide-title">{slide.title}</h3>
          <p className="tenways-slide-text">{slide.text}</p>
          <img id="tenways-image-one" src={slide.image} alt={slide.alt} />
        </article>
      ))}

      <button className="tenways-prev">&#10094;</button>
      <button className="tenways-next">&#10095;</button>
    </div>
  );
};

export default TenwaysSlide;
