//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from "react";

function RecyclingFacts() {

  let slideIndex = 1;
 
  // Slider 3
  const recycleBoxSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("recycle-facts");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');

  };

  const recycleSlides = (n) => {
    recycleBoxSlides((slideIndex += n));
  };

  useEffect(() => {

    const prevFacts = document.querySelector(".prevFacts");
    const nextFacts = document.querySelector(".nextFacts");
    
    prevFacts.addEventListener("click", (e) => {
        e.preventDefault();
        recycleSlides(-1);
      });

    nextFacts.addEventListener("click", (e) => {
      e.preventDefault();
      recycleSlides(1);
    });

  }); 
 
  return (

    <div className="grid_24" id="recycling-facts">

      <section className="content">

        <h1>Recycling facts and figures</h1>

        <div id="facts_box">
          <div id="mask_two">

            <article className="recycle-facts">
              <h1>{}</h1>
            <p>{}</p>

              <ul>

                  <li>{}</li>

              </ul>

            </article>


            <a className="prevFacts" href="http://ww.google.com">&#10094;</a>
            <a className="nextFacts" href="http://ww.google.com">&#10095;</a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default RecyclingFacts;




