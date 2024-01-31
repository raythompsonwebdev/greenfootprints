import React, { useEffect } from 'react';
import TenwaysSlide from '../components/TenwaysSlide.js';
import imageBinImg from '../static/images/JPG/Image-bin.jpg';
import recyclingBinImg from '../static/images/JPG/recylingbins-greenfootprints-com.jpg';

const tenwaysData = [
  {
    id: 0,
    title: '1. Switch to 30°C',
    text: 'By switching your washing machine temperature to 30°C, you are saving energy and cutting your utility bills too.\n\nWith the help of modern detergents, a lower setting will still provide excellent washing results and can save at least 40&#37; of electrical energy.',
    image: recyclingBinImg,
    alt: 'reuse-image-green-foot-prints-com',
  },
  {
    id: 1,
    title: '2. Mail Preference Service',
    text: 'Are junk letters and leaflets blocking up your letterbox? Around 3.4 billion items of addressed direct mail are sent out every year requiring 180,000 tonnes of paper. Act now by reducing your paper waste and register online with the Mail Preference Service.  Just signing up can stop around 80% of addressed direct unsolicited mail to your door. Around 13 billion items of unaddressed direct mail are also sent out yearly. To stop leaflets and unaddressed mail being delivered by Royal Mail, send an email to optout@royalmail.com and request their door-to-door opt-out form.',
    image: imageBinImg,
    alt: 'house-green-foot-prints-com',
  },
  {
    id: 2,
    title: '3. Go online',
    text: 'Switch to paperless billing by going online to manage your money and access your monthly bank statements. As most UK newspapers and magazines are now based online too, so you can save money and paper by catching up with the news online.',
    image: recyclingBinImg,
    alt: 'contact-us-image-green-foot-prints-com',
  },
  {
    id: 3,
    title: '4. Vermicomposting or keeping worms',
    text: "A great way to reduce your carbon footprint is to keep worms as pets in your kitchen or if you are a little squeamish in your garden. We arent kidding. Worms are an effective and eco-friendly way of composting hundreds of pounds of kitchen waste every year. They are said to be much faster than normal methods of composting. When green waste is properly composted at home, it doesn't give off methane, a gas which contributes to climate change. The leftover compost can then be used in gardens and to plant houseplants which in turn create oxygen. For tips on making your very own wormery, click here.",
    image: imageBinImg,
    alt: 'recycle-continuous-circle-green-foot-prints-com',
  },
  {
    id: 4,
    title: '5. Turn electricals off standby',
    text: 'Couch potatoes who are too lazy to walk over to the TV and switch it off should know they are wasting money and energy. According to The Department of Energy and Climate Change (DECC), the average household wastes around £40 a year simply by leaving appliances on standby.',
    image: recyclingBinImg,
    alt: 'respect-recyling-green-foot-prints-com',
  },
  {
    id: 5,
    title: '6. Collect rainwater',
    text: 'Protect the environment and save on your water bills by collecting water from your very own garden to water the plants, wash the car or even your hair in it. The average rainwater collection amount for a house with a 2,000-square-foot roof can be approximately 190,000 liters per year, depending on how much rain your area gets. Put a big bucket in your garden to collect the rain or install rainwater storage tanks. It will runoff the gutters on your roof and fall directly into the tank. You can even heat it up after using lower temperatures of course!',
    image: imageBinImg,
    alt: 'house-in-leaf-green-foot-prints-com',
  },
  {
    id: 6,
    title: '7. Keep mobile phones for longer',
    text: 'In a world ruled by technology, it is difficult not to be tempted by the latest shiny new iPhone or Blackberry with all the latest features. But the DECC suggests we can save on electrical waste by not replacing our mobile phones every year. They say most will work for at least five years. \n\nBy recycling phones, you can help stop harmful chemicals getting into the environment rather than putting them with household rubbish.',
    image: recyclingBinImg,
    alt: 'reuse-image-green-foot-prints-com',
  },
  {
    id: 7,
    title: '8. Grow your own food',
    text: 'Growing vegetables at home diminishes the need for transport required to get food to your table otherwise known as food miles. It also allows you to grow your food without the need for harmful and polluting chemicals. If you dont have a garden, you can still grow some delicious vegetables in even the smallest of spaces such as a balcony or patio space. If keeping a vegetable patch is too much of an effort, you can reduce food miles and therefore your carbon footprint by buying local organic produce. As the distance food travels decreases, so does the need for processing and refrigeration to reduce spoilage.',
    image: imageBinImg,
    alt: 'reuse-image-green-foot-prints-com',
  },
  {
    id: 8,
    title: '9. Load up',
    text: 'When using your washing machine, or dish washer, run them with full loads. Do this and save water, electricity, and washing powder. Also avoid wasted energy from tumble drying by drying clothes outside or on indoor dryers.',
    image: recyclingBinImg,
    alt: 'reuse-image-green-foot-prints-com',
  },
  {
    id: 9,
    title: '10. Say no to plastic bags',
    text: 'Plastic bags are massive eco-villains. Their production contributes to air pollution and lots of energy consumption. One plastic bag can take an astonishing 1,000 years to decompose.If you havent already noticed, a number of retailers across the UK are charging for the use of plastic bags (usually 5p per bag) or encouraging shoppers to buy eco-friendly bags made of natural fibres to reuse over and over again. These schemes are set to reduce the amount of white pollution as 17 billion plastic bags are issued in the UK everyday. If you are one of those people who rely on plastic bags, then reuse them to line your rubbish bins at home, rather than buying more polluting bin bags.',
    image: imageBinImg,
    alt: 'reuse-image-green-foot-prints-com',
  },
];

function TenWays() {
  useEffect(() => {
    let slideIndex = 0;

    // Slider 3
    const recycleBoxSlides = (n) => {
      // let i;
      const slides = Array.from(
        document.getElementsByClassName('tenways-slide')
      );

      if (slides === undefined) {
        return false;
      }

      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      // eslint-disable-next-line no-plusplus
      slides.forEach((slides) => {
        slides.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    const recycleSlides = (n) => {
      recycleBoxSlides((slideIndex += n));
    };

    const prevWays = document.querySelector('.tenways-prev');
    const nextWays = document.querySelector('.tenways-next');

    prevWays.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(-1);
    });

    nextWays.addEventListener('click', (e) => {
      e.preventDefault();
      recycleSlides(1);
    });
  }, []);

  return (
    <div className="page-wrapper" id="ten-ways">
      <main className="content">
        <h2 className="content-title">10 Ways to recycle</h2>
        <div id="tenways-slides">
          <div className="mask">
            {tenwaysData.map((slide, index) => (
              <TenwaysSlide
                data={slide}
                key={index}
                classname="tenways-slide"
              />
            ))}

            <button className="tenways-prev">&#10094;</button>
            <button className="tenways-next">&#10095;</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TenWays;
