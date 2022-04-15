import React from 'react'
import ToggleButton from './ToggleButton.js'
import SocialMediaLink from './SocialMediaLinks.js'

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
        <h1>GreenFootPrints</h1>
        <h2>UK's leading Recycling website</h2>
      </div>

      <ToggleButton />

      <SocialMediaLink />
    </header>
  )
}

export default Header
