
import React from "react";
import Navigation from "./Navigation.js";

function Header() {

  return (

  <header role="banner" id="site_header">

    <figure id="logo">
      <img id="home" src="/static/images/Large/gif-images/logo-greenfootprints-com.gif" alt="home page" />
    </figure>

    <hgroup>
      <h1>GreenFootPrints</h1>
      <h2>UK's leading Recycling website</h2>
    </hgroup>


    <aside className="socials">
      <ul>
      <li>
        <a
        href="https://www.twitter.com"
        title="Follow us on Twitter"
        target="blank"
        ><i className="fa fa-twitter"> </i
        ></a>
      </li>
      <li>
        <a
        href="https://www.facebook.com"
        title="Follow us on Facebook"
        target="blank"
        ><i className="fa fa-facebook"> </i
        ></a>
      </li>
      <li>
        <a
        href="https://www.google.com"
        title="Follow us on Google+"
        target="blank"
        ><i className="fa fa-google"> </i
        ></a>
      </li>
      <li>
        <a
        href="https://www.instagram.com"
        title="Follow us on Instagram"
        target="blank"
        ><i className="fa fa-instagram"> </i
        ></a>
      </li>
      </ul>
    </aside>

    <Navigation />

  </header>

  );
}

export default Header;

