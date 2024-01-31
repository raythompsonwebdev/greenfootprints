import React, { useEffect } from 'react';
import CollectionSlide from '../components/CollectionSlide.js';
import imageBinImg from '../static/images/JPG/Image-bin.jpg';
import recyclingBinImg from '../static/images/JPG/recylingbins-greenfootprints-com.jpg';

const collectionData = [
  {
    id: 1,
    title: 'Recycling and rubbish bin in a German railway station.',
    text: 'A number of different systems have been implemented to collect recyclates from the general waste stream. These systems lie along the spectrum of trade-off between public convenience and government ease and expense. \n\nThe three main categories of collection are "drop-off centres", "buy-back centres" and "curbside collection".',
    image: imageBinImg,
    alt: 'Image-bin-image-green-foot-prints-com',
  },
  {
    id: 2,
    title: 'Drop-off centres',
    text: 'Drop off centres require the waste producer to carry the recyclates to a central location, either an installed or mobile collection station or the reprocessing plant itself. They are the easiest type of collection to establish, but suffer from low and unpredictable throughput.',
    image: recyclingBinImg,
    alt: 'Image-bin-image-green-foot-prints-com',
  },
  {
    id: 3,
    title: 'Curbside collection',
    text: 'Curbside collection encompasses many subtly different systems,which differ mostly on where in the process the recyclates are sorted and cleaned. The main categories are mixed waste collection, commingled recyclables and source separation. A waste collection vehicle generally picks up the waste. \n\nAt one end of the spectrum is mixed waste collection, in which all recyclates are collected mixed in with the rest of the waste, and the desired material is then sorted out and cleaned at a central sorting facility. \n\nThis results in a large amount ofrecyclable waste, paper especially, being too soiled to reprocess, but has advantages as well: the city need not pay for a separate collection of recyclates and no public education is needed. \n\nAny changes to which materials are recyclable is easy to accommodate as all sorting happens in a central location.',
    image: imageBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
  {
    id: 4,
    title: 'Curbside collection...',
    text: 'In a Commingled or single-stream system, all recyclables for collection are mixed but kept separate from other waste. This greatly reduces the need for post-collection cleaning but does require public education on what materials are recyclable. Source separation is the other extreme, where each material is cleaned and sorted prior to collection. \n\nThis method requires the least post-collection sorting and produces the purest recyclates, but incurs additional operating costs for collection of each separate material. \n\nAn extensive public education program is also required, which must be successful if recyclate contaminationis to be avoided.',
    image: recyclingBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
  {
    id: 5,
    title: 'Buy-back centres',
    text: 'Buy-back centres differ in that the cleaned recyclates are purchased, thus providing a clear incentive for use and creating a stable supply. The post-processed material can then be sold on, hopefully creating a profit. \n\nUnfortunately government subsidies are necessary to make buy-back centres a viable enterprise, as according to the United States National Solid Wastes Management Association it costs on average US$50 to process a ton of material, which can only be resold for US$30.',
    image: imageBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
  {
    id: 6,
    title: 'Early sorting of recyclable materials:',
    text: 'Glass and plastic bottles in Poland. Once commingled recyclates are collected and delivered to a central collection facility, the different types of materials must be sorted. This is done in a series of stages, many of which involve automated processes such that a truck-load of material can be fully sorted in less than an hour. \n\nSome plants can now sort the materials automatically, known as single-stream recycling. \n\nA 30 percent increase in recycling rates has been seen in the areas where these plants exist. Initially, the commingled recyclates are removed from the collection vehicle and placed on a conveyor belt spread out in a single layer. \n\nLarge pieces of corrugated fiberboard and plastic bags are removed by hand at this stage, as they can cause later machinery to jam.',
    image: recyclingBinImg,
    alt: 'recylingbins-green-foot-prints-com',
  },
  {
    id: 7,
    title: 'Early sorting of recyclable materials..',
    text: 'Next, automated machinery separates the recyclates by weight, splitting lighter paper and plastic from heavier glass and metal. Cardboard is removed from the mixed paper, and the most common types of plastic, PET &#40;&#35;1&#41; and HDPE &#40;&#35;2&#41;, are collected. \n\nThis separation is usually done by hand, but has become automated in some sorting centers: a spectroscopic scanner is used to differentiate between different types of paper and plastic based on the absorbed wavelengths, and subsequently divert each material into the proper collection channel. \n\nStrong magnets are used to separate out ferrous metals, such as iron, steel, and tin-plated steel cans ("tin cans"). \n\nNon-ferrous metals are ejected by magnetic eddy currents in which a rotating magnetic field induces an electric current around the aluminium cans, which in turn creates a magnetic eddy current inside the cans. This magnetic eddy current is repulsed by a large magnetic field, and the cans are ejected from the rest of the recyclate stream. Finally, glass must be sorted by hand based on its color: brown, amber, green or clear.',
    image: imageBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
  {
    id: 8,
    title: 'Recycling industrial waste',
    text: "The military recycles some metals. The U.S. Navy's Ship Disposal Program uses ship breaking to reclaim the steel of old vessels. Ships may also be sunk to create an artificial reef. Uranium is a very dense metal that has qualities superior to lead and titanium for many military and industrial uses. \n\nThe uranium left over from processing it into nuclear weapons and fuel for nuclear reactors is called depleted uranium, and it is used by all branches of the U.S. military use for armour-piercing shells and shielding. \n\nThe construction industry may recycle concrete and old road surface pavement,  selling their waste materials for profit. Some industries, like the renewable energy industry and solar photovoltaic technology in particular, are being proactive in setting up recycling policies even before there is considerable volume to their waste streams, anticipating future demand during their rapid growth",
    image: recyclingBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
  {
    id: 9,
    title: 'Recycling industrial waste cont..',
    text: "The military recycles some metals. The U.S. Navy's Ship Disposal Program uses ship breaking to reclaim the steel of old vessels. Ships may also be sunk to create an artificial reef. \n\nUranium is a very dense metal that has qualities superior to lead and titanium for many military and industrial uses. The uranium left over from processing it into nuclear weapons and fuel for nuclear reactors is called depleted uranium, and it is used by all branches of the U.S. military use for armour-piercing shells and shielding. \n\nThe construction industry may recycle concrete and old road surrface pavement, selling their waste materials for profit. Some industries, like the renewable energy industry and solar photovoltaic technology in particular, are being proactive in setting up recycling policies even before there is considerable volume to their waste streams, anticipating future demand during their rapid growth",
    image: imageBinImg,
    alt: 'recylingbins-image-green-foot-prints-com',
  },
];

const Collections = () => {
  useEffect(() => {
    // Slider 1
    let slideIndex = 0;

    const collectionBoxSlides = (n) => {
      // let i;

      // get html collection
      const slides = document.getElementsByClassName('collection-slide');

      if (slides === undefined) {
        return false;
      }

      //convert html collection into an array.
      const slideArray = Array.from(slides);

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      slideArray.forEach((slides) => {
        slides.style.display = 'none';
      });

      slides[slideIndex - 1].style.display = 'block';
      slides[slideIndex - 1].classList.add('fade');
    };

    /* eslint-disable no-console */
    const collectionSlides = (n) => {
      collectionBoxSlides((slideIndex += n));
    };

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      collectionSlides(-1);
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      collectionSlides(1);
    });
  });

  return (
    <div className="page-wrapper" id="collections">
      <main className="content">
        <h2 className="content-title">Collections &amp; Sorting</h2>
        <div id="collection-slides">
          <div className="mask">
            {collectionData.map((slide, index) => (
              <CollectionSlide
                data={slide}
                key={index}
                classname="collection-slide"
              />
            ))}

            <button className="prev">&#10094;</button>
            <button className="next">&#10095;</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Collections;
