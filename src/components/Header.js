import React from 'react';
import SocialMediaLink from './SocialMediaLinks.js';

function Header() {
  return (
    <header role="banner" id="site-header">
      <figure id="logo">
        <img
          id="logo-image"
          src="/images/gif/logo-greenfootprints-com.gif"
          alt="greenfootprints logo"
        />
      </figure>

      <div id="site-title">
        <h1 id="logo-title">GreenfootPrints</h1>
        <p id="logo-text">UK's leading Recycling website</p>
      </div>

      <SocialMediaLink />
    </header>
  );
}

export default Header;
