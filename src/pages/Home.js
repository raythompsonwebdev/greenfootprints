//import { hot } from 'react-hot-loader/root';
import React from 'react';
import HomeSlider from '../components/HomeSlider.js';
import HomepageCard from '../components/HomePageCard.js';

function Home() {
  const infoData = [
    {
      id: 1,
      imageName: 'paperBottles',
      imageUrl: '/static/images/Large/gif-images/recyling-guide.gif',
      alt: 'recycling-advice-green-foot-prints-com',
      imageId: 'paperBottles',
      downloadlink:
        'https://www.dropbox.com/s/aadvfk718co01hh/household-recycling-guide.pdf?dl=0',
      download: 'household-recycling-guide.pdf',
      title: 'Household Recycling Guide',
      text: 'A reminder of the three key factors when thinking about how to recycle. Just click button below to download the PDF and print it off..',
    },
    {
      id: 2,
      imageName: 'flowChart',
      imageUrl: '/static/images/Large/gif-images/recycling-flowchart.gif',
      alt: 'recycling-advice-green-foot-prints-com',
      imageId: 'flowChart',
      downloadlink:
        'https://www.dropbox.com/s/lbeualgiiwd4qc8/recycling-flowchart-poster.pdf?dl=0',
      download: 'reduce-reuse-recycle-poster.pdf',
      title: 'Reduce-Reuse-Recycle-poster',
      text: 'Print off our posters to remind you about the 3 R’s at home, in the classroom or at work. Just click button below to download the PDF and print it off.',
    },
    {
      id: 3,
      imageName: 'wordSearch',
      imageUrl: '/static/images/Large/gif-images/wordsearch.gif',
      alt: 'recycling-advice-green-foot-prints-com',
      imageId: 'wordSearch',
      downloadlink:
        'https://www.dropbox.com/s/8m7d9vtsix05e8y/wordsearch.pdf?dl=0',
      download: 'Summary.pdf',
      title: 'Recycling wordsearch',
      text: 'Have a go at our Recycling Guide Word Search. Help Crush find all 20 hidden words relating to recycling. Just click to download the PDF and print it off on your home computer or at school.',
    },
  ];

  return (
    <div className="page-wrapper" id="home">
      <HomeSlider />
      <main className="content">
        <div id="home_contentboxes">
          {infoData.map((card) => (
            <HomepageCard data={card} key={card.id} />
          ))}
        </div>
      </main>

      <div className="clearfix"> </div>
    </div>
  );
}

export default Home;
