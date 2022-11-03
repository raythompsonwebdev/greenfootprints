import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const menuToggleFunc = () => {
    // create menu variables
    const slideoutMenu = document.querySelector('.site_navigation');
    const slideoutMenuHeight = slideoutMenu.offsetHeight;
    // mobile menu toggle button

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
    <nav role="navigation" id="site-navigation">
      <ul id="site-navigation-container">
        <li>
          <Link
            to="/"
            className="nav-links"
            title="Home page"
            onMouseUp={menuToggleFunc}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/whatcando"
            className="nav-links"
            title="What you can page"
            onMouseUp={menuToggleFunc}>
            Can Do
          </Link>
        </li>
        <li>
          <Link
            to="/recycling"
            className="nav-links"
            title="Recycling page"
            onMouseUp={menuToggleFunc}>
            Recycling
          </Link>
        </li>
        <li>
          <Link
            to="/collections"
            className="nav-links"
            title="Recycling collection page"
            onMouseUp={menuToggleFunc}>
            Collections
          </Link>
        </li>
        <li>
          <Link
            to="/tenways"
            className="nav-links"
            title="Ten ways to recycle page"
            onMouseUp={menuToggleFunc}>
            10 Ways
          </Link>
        </li>
        <li>
          <Link
            to="/recyclingfacts"
            className="nav-links"
            title="Recycling facts page"
            onMouseUp={menuToggleFunc}>
            Facts
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="nav-links"
            title="Contact page"
            onMouseUp={menuToggleFunc}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
