import React, { useEffect } from 'react';
import RecyclingFactSlide from '../components/RecyclingFactSlide.js';
import imageBinImg from '../static/images/JPG/Image-bin.jpg';


const recyclingfactsData = [
  {
    id: 1,
    title: 'Introduction',
    text: 'UK households produced 30.5 million tonnes of waste in 2003/04, of which 17% was collected for recycling (source: defra.gov.uk).This figure is still quite low compared to some of our neighbouring EU countries, some recycling over 50% of their waste. There is still a great deal of waste which could be recycled that ends up in landfill sites which is harmful to the environment.',
    image: imageBinImg,
  },
  {
    id: 2,
    title: 'Recycling is an excellent way of saving energy and conserving the environment',
    text: 'Did you know that:',
    list: [
      {
        text: '1 recycled tin can would save enough energy to power a television for 3 hours.',
      },
      {
        text: '1 recycled glass bottle would save enough energy to power a computer for 25 minutes.',
      },
      {
        text: '1 recycled plastic bottle would save enough energy to power a 60-watt light bulb for 3 hours.',
      },
      {
        text: '70% less energy is required to recycle paper compared with making it from raw materials.',
      },
    ],
  },
  {
    id: 3,
    title: 'Some Interesting Facts',
    text: 'Did you know that:',
    list: [
      {
        text: 'Up to 60% of the rubbish that ends up in the dustbin could be recycled.',
      },
      {
        text: 'The unreleased energy contained in the average dustbin each year could power a television for 5,000 hours.',
      },
      {
        text: 'The largest lake in the Britain could be filled with rubbish from the UK in 8 months.',
      },
      {
        text: 'On average, 16% of the money you spend on a product pays for the packaging, which ultimately ends up as rubbish.',
      },
      {
        text: 'As much as 50% of waste in the average dustbin could be composted.',
      },
      { text: 'Up to 80% of a vehicle can be recycled..' },
      { text: '9 out of 10 people would recycle more if it were made easier.' },
    ],
  },
  {
    id: 4,
    title: 'Aluminium',
    text: 'Did you know that:',
    list: [
      {
        text: '24 million tonnes of aluminium is produced annually, 51,000 tonnes of which ends up as packaging in the UK.',
      },
      {
        text: 'If all cans in the UK were recycled, we would need 14 million fewer dustbins.',
      },
      { text: '£36,000,000 worth of aluminium is thrown away each year.' },
      {
        text: 'Aluminium cans can be recycled and ready to use in just 6 weeks.',
      },
      {
        text: 'As much as 50% of waste in the average dustbin could be composted.',
      },
      { text: 'Up to 80% of a vehicle can be recycled..' },
      { text: '9 out of 10 people would recycle more if it were made easier.' },
    ],
  },
  {
    id: 5,
    title: 'Glass',
    text: 'Did you know that:',
    list: [
      {
        text: 'Each UK family uses an average of 500 glass bottles and jars annually.',
      },
      {
        text: 'The largest glass furnace produces over 1 million glass bottles and jars per day.',
      },
      { text: 'Glass is 100% recyclable and can be used again and again.' },
      {
        text: 'Glass that is thrown away and ends up in landfills will never decompose.',
      },
    ],
  },
  {
    id: 6,
    title: 'Paper',
    text: 'Did you know that:',
    list: [
      {
        text: 'Recycled paper produces 73% less air pollution than if it was made from raw materials.',
      },
      {
        text: '12.5 million tonnes of paper and cardboard are used annually in the UK.',
      },
      {
        text: 'The average person in the UK gets through 38kg of newspapers per year.',
      },
      { text: 'It takes 24 trees to make 1 ton of newspaper.' },
    ],
  },
  {
    id: 7,
    title: 'Plastic',
    text: 'Did you know that:',
    list: [
      {
        text: '275,000 tonnes of plastic are used each year in the UK, thats about 15 million bottles per day.',
      },
      {
        text: 'Most families throw away about 40kg of plastic per year, which could otherwise be recycled.',
      },
      {
        text: 'The use of plastic in Western Europe is growing about 4% each year.',
      },
      { text: 'Plastic can take up to 500 years to decompose.' },
    ],
  },
];

function RecyclingFacts() {
  useEffect(() => {
    let slideIndex = 0;

    // Slider 3
    const recycleBoxSlides = (n) => {
      // let i;
      const slides = document.getElementsByClassName('recycling-facts-slide');

      //convert html collection into an array.
      const slideArray = Array.from(slides);

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      // eslint-disable-next-line no-plusplus
      slideArray.forEach((slides) => {
        slides.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    const recycleSlides = (n) => {
      recycleBoxSlides((slideIndex += n));
    };

    const prevFacts = document.querySelector('.facts-prev');
    const nextFacts = document.querySelector('.facts-next');

    prevFacts.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(-1);
    });

    nextFacts.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(1);
    });
  });

  return (
    <div className="page-wrapper" id="recycling-facts">
      <main className="content">
        <h2 className="content-title">Recycling facts and figures</h2>

        <div id="recycling-facts-slides">
          <div className="mask">
            {recyclingfactsData.map((slide) => (
              <RecyclingFactSlide
                data={slide}
                key={slide.id}
                classname="recycling-facts-slide"
              />
            ))}

            <button className="facts-prev">&#10094;</button>
            <button className="facts-next">&#10095;</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecyclingFacts;
