import React from 'react';
import ToggleButton from './ToggleButton.js';
import SocialMediaLink from './SocialMediaLinks.js';

function Header() {
  // useEffect(() => {

  //   // mobile menu toggle button
  //   const menuToggleFunc = (event) => {
  //     event.preventDefault();

  //     // Your code to run since DOM is loaded and ready
  //     //const menuToggle = document.querySelector('#mobile-toggle');
  //     // create menu variables
  //     const slideoutMenu = document.querySelector('.site_navigation');

  //     const slideoutMenuHeight = slideoutMenu.offsetHeight;

  //     // toggle open class
  //     slideoutMenu.classList.toggle('open');

  //     slideoutMenu.style.transition = 'all 0.3s ease-in 0s';

  //     // slide menu
  //     if (slideoutMenu.classList.contains('open')) {
  //       slideoutMenu.style.top = '0px';
  //     } else {
  //       slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
  //       slideoutMenu.style.top = `${-slideoutMenuHeight}px`;
  //     }
  //   }

  // });

  // mobile menu toggle button
  const menuToggleFunc = (event) => {
    event.preventDefault();

    // Your code to run since DOM is loaded and ready
    //const menuToggle = document.querySelector('#mobile-toggle');
    // create menu variables
    const slideoutMenu = document.querySelector('.site_navigation');

    const slideoutMenuHeight = slideoutMenu.offsetHeight;

    // toggle open class
    slideoutMenu.classList.toggle('open');

    slideoutMenu.style.transition = 'all 0.3s ease-in 0s';

    // slide menu
    if (slideoutMenu.classList.contains('open')) {
      slideoutMenu.style.top = '0px';
    } else {
      slideoutMenu.style.transition = 'all 0.3s ease-in 0s';
      slideoutMenu.style.top = `${-slideoutMenuHeight}px`;
    }
  };

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

      <ToggleButton menuToggleFunc={menuToggleFunc} />

      <SocialMediaLink />
    </header>
  );
}

export default Header;
