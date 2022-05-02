import React from 'react';
import SocialMediaLink from './SocialMediaLinks.js';

function Header() {
  return (
    <header role="banner" id="site_header">
      <figure id="logo">
        <img
          id="logo-image"
          src="/static/images/Large/gif-images/logo-greenfootprints-com.gif"
          alt="greenfootprints logo"
        />
      </figure>

      <div id="site-title">
        <h1>GreenfootPrints</h1>
        <p>UK's leading Recycling website</p>
      </div>

      <SocialMediaLink />
    </header>
  );
}

export default Header;
