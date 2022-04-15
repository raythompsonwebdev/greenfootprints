//import { hot } from 'react-hot-loader/root';
import React, { useEffect } from "react";

function TenWays() {

  useEffect(() => {

    let slideIndex = 1;

  // Slider 3
    const recycleBoxSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName("contentbox");

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

    const prevWays = document.querySelector(".prevWays");
    const nextWays = document.querySelector(".nextWays");

    prevWays.addEventListener("click", (e) => {
        e.preventDefault();
        recycleSlides(-1);
      });

    nextWays.addEventListener("click", (e) => {
      e.preventDefault();
      recycleSlides(1);
    });

  });

  return (
    <div className="grid_24" id="ten-ways">
      <section className="content">
        <h1>10 Ways to recycle</h1>
        <section id="contentboxes">

          <div id="mask">

            <article className="contentbox">

              <h1>{}</h1>
              <p></p>

              <img id="tenImageOne" src="fdgf" alt="dfsdf" />

            </article>

            <a className="prevWays" href="http://ww.google.com">&#10094;</a>
            <a className="nextWays" href="http://ww.google.com">&#10095;</a>

          </div>

        </section>
      </section>
    </div>
  );
}

export default TenWays;




