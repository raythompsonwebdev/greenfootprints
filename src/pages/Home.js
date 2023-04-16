//import { hot } from 'react-hot-loader/root';
import React from 'react';
import HomeSlider from '../components/HomeSlider.js';
import HomepageCard from '../components/HomePageCard.js';
import cardData from '../cardData.js';

function Home() {
  return (
    <div className="page-wrapper" id="home">
      <HomeSlider />
      <main id="home-page-content">
        <div id="home-page-cards">
          {cardData.map((card) => (
            <HomepageCard data={card} key={card.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
