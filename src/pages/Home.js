//import { hot } from 'react-hot-loader/root';
import React from 'react';
import HomeSlider from '../components/HomeSlider.js';
import HomepageCard from '../components/HomePageCard.js';
import recycleGuideImg from '../static/images/gif-images/recyling-guide.gif';
import flowChartImg from '../static/images/gif-images/recycling-flowchart.gif';
import wordSearchImg from '../static/images/gif-images/wordsearch.gif';

const cardData = [
  {
    id: 1,
    imageName: 'paper-bottles',
    imageUrl: recycleGuideImg,
    alt: 'recycling-advice-green-foot-prints-com',
    imageId: 'paper-bottles',
    downloadlink:
      'https://www.dropbox.com/s/aadvfk718co01hh/household-recycling-guide.pdf?dl=0',
    download: 'household-recycling-guide.pdf',
    title: 'Household Recycling Guide',
    text: 'A reminder of the three key factors when thinking about how to recycle. Just click button below to download the PDF and print it off..',
  },
  {
    id: 2,
    imageName: 'flow-chart',
    imageUrl: flowChartImg,
    alt: 'recycling-advice-green-foot-prints-com',
    imageId: 'flow-chart',
    downloadlink:
      'https://www.dropbox.com/s/lbeualgiiwd4qc8/recycling-flowchart-poster.pdf?dl=0',
    download: 'reduce-reuse-recycle-poster.pdf',
    title: 'Reduce-Reuse-Recycle-poster',
    text: 'Print off our posters to remind you about the 3 R’s at home, in the classroom or at work. Just click button below to download the PDF and print it off.',
  },
  {
    id: 3,
    imageName: 'word-search',
    imageUrl: wordSearchImg,
    alt: 'recycling-advice-green-foot-prints-com',
    imageId: 'word-search',
    downloadlink:
      'https://www.dropbox.com/s/8m7d9vtsix05e8y/wordsearch.pdf?dl=0',
    download: 'Summary.pdf',
    title: 'Recycling wordsearch',
    text: 'Have a go at our Recycling Guide Word Search. Help Crush find all 20 hidden words relating to recycling. Just click to download the PDF and print it off on your home computer or at school.',
  },
];

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
