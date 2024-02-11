import React from 'react';
import HomeSlider from 'components/HomeSlider.js';
import HomepageCard from 'components/HomePageCard.js';
import cardData from 'static/data/cardData.js';
import siteImages from 'static/data/siteImages.js';

function Home() {
  return (
    <div className="page-wrapper" id="home">
      <HomeSlider data={siteImages} />
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
