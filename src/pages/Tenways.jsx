// import React, { useEffect } from 'react';
import TenwaysSlide from '../components/TenwaysSlide.jsx';
import tenwaysData from '../static/data/tenwaysData.js';

function TenWays() {
  return (
    <div className="page-wrapper" id="ten-ways">
      <main className="content">
        <h2 className="content-title">10 Ways to recycle</h2>
        <div id="tenways-slides">
          <TenwaysSlide slides={tenwaysData} className="tenways-slide" />
        </div>
      </main>
    </div>
  );
}

export default TenWays;
