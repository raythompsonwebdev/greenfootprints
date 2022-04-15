import React from 'react'

function SocialMediaLink() {
  return (
    <aside className="socials">
      <ul>
        <li>
          <a
            href="https://www.twitter.com"
            title="Follow us on Twitter"
            target="blank"
          >
            <i className="fa fa-twitter"> </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            title="Follow us on Facebook"
            target="blank"
          >
            <i className="fa fa-facebook"> </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            title="Follow us on Google+"
            target="blank"
          >
            <i className="fa fa-google"> </i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            title="Follow us on Instagram"
            target="blank"
          >
            <i className="fa fa-instagram"> </i>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default SocialMediaLink
