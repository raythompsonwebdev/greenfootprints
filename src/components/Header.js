import React from 'react';
import ToggleButton from './ToggleButton.js';
import SocialMediaLink from './SocialMediaLinks.js';

function Header() {
  return (
    <header role="banner" id="site_header">
      <figure id="logo">
        <img
          id="home"
          src="/static/images/Large/gif-images/logo-greenfootprints-com.gif"
          alt="home page"
        />
      </figure>

      <div id="site-title">
        <h1>GreenfootPrints</h1>
        <p>UK's leading Recycling website</p>
      </div>

      <ToggleButton />

      <SocialMediaLink />
    </header>
  );
}

export default Header;
