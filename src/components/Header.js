import React from 'react';
import SocialMediaLink from './SocialMediaLinks.js';
import logo from '../static/images/gif-images/logo-greenfootprints-com.gif';

function Header() {
  return (
    <header role="banner" id="site-header">
      <figure id="logo">
        <img id="logo-image" src={logo} alt="greenfootprints logo" />
      </figure>

      <div id="site-title">
        <h1 id="logo-title">GREENFOOTPRINTS</h1>
        <p id="logo-text">UK's leading Recycling website</p>
      </div>

      <SocialMediaLink />
    </header>
  );
}

export default Header;
