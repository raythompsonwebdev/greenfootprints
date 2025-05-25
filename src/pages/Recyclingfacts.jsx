// import React, { useEffect } from 'react';
import RecyclingFactSlide from '../components/RecyclingFactSlide.jsx';
import recyclingfactsData from '../static/data/recyclingfactsData.js';

function RecyclingFacts() {
  return (
    <div className="page-wrapper" id="recycling-facts">
      <main className="content">
        <h2 className="content-title">Recycling facts and figures</h2>

        <div id="recycling-facts-slides">
          <RecyclingFactSlide
            slides={recyclingfactsData}
            className="recycling-facts-slide"
          />
        </div>
      </main>
    </div>
  );
}

export default RecyclingFacts;
