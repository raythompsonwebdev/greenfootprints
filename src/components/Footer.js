import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/" className="nav-links" title="Home page">
            Home
          </Link>
        </li>
        <li>
          <Link to="/whatcando" className="nav-links" title="What you can page">
            Can Do
          </Link>
        </li>
        <li>
          <Link to="/recycling" className="nav-links" title="Recycling page">
            Recycling
          </Link>
        </li>
        <li>
          <Link
            to="/collections"
            className="nav-links"
            title="Recycling collection page">
            Collections
          </Link>
        </li>
        <li>
          <Link
            to="/tenways"
            className="nav-links"
            title="Ten ways to recycle page">
            10 Ways
          </Link>
        </li>
        <li>
          <Link
            to="/recyclingfacts"
            className="nav-links"
            title="Recycling facts page">
            Facts
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-links" title="Contact page">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
