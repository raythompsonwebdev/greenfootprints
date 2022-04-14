//import { hot } from 'react-hot-loader/root';
import React from "react";
import HomeSlider from "../components/HomeSlider.js";
import  HomepageCard from "../components/HomePageCard.js";
function Home() {


  return (

   <div className="grid_24" id="home">

    <HomeSlider />

    <main className="content" >

      <div id="home_contentboxes">

      <HomepageCard />
      <HomepageCard />
      <HomepageCard />
        {/* <article className="home_contentbox">
          <h1>Household Recycling Guide</h1>
          <figure className="contentbox_image">

            <img id="paperBottles" src="./images/Large/gif-images/recyling-guide.gif" alt="recycling-advice-green-foot-prints-com" />

            <figcaption>

              <p> A reminder of the three key factors when thinking about how to recycle. Just click button below to download the PDF and print it off.</p>
              <a className="content-button" href="_https://drive.google.com/open?id=0B8rtAcEuG9wLWlJOWFdBZjBwZ1k" download="household-recycling-guide.pdf" title="household-recycling-guide">Download
                PDF</a>

            </figcaption>

          </figure>

        </article>

        <article className="home_contentbox">
          <h1>Reduce, Reuse and Recycle</h1>
          <figure className="contentbox_image">
            <img id="flowChart" src="./images/Large/gif-images/recycling-flowchart.gif" alt="recycling-advice-green-foot-prints-com" />
            <figcaption>

              <p>Print off our posters to remind you about the 3 R’s at home, in the classroom or at
                work. Just click button below to download the PDF and print it off.</p>
              <a className="content-button" href="https://drive.google.com/open?id=0B8rtAcEuG9wLYVpLYXZEaHdWalE"
                download="reduce-reuse-recycle-poster.pdf" title="reduce-reuse-recycle-poster">Download PDF</a>
            </figcaption>
          </figure>
        </article>

        <article className="home_contentbox">
          <h1>Word Search</h1>
          <figure className="contentbox_image">
            <img id="wordSearch" src="./images/Large/gif-images/wordsearch.gif" alt="recycling-advice-green-foot-prints-com" />
            <figcaption>
              <p>Have a go at our Recycling Guide Word Search. Help Crush find all 20 hidden words
                relating to recycling.</p><p> Just click to download the PDF and print it off on your home computer or at school.</p>
              <a className="content-button" href="https://drive.google.com/open?id=0B8rtAcEuG9wLejZCRnFsUl80d00"
                download="Summary.pdf" title="wordsearch.gif">Download PDF</a>
            </figcaption>
          </figure>

        </article> */}

      </div>

    </main>

    <div className="clearfix"> </div>

</div>

  );
}

export default Home;
