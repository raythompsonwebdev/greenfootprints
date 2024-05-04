function SocialMediaLink() {
  return (
    <aside id="socials">
      <ul id="socials-container">
        <li className="socials-container-link">
          <a
            href="https://www.twitter.com"
            title="Follow us on Twitter"
            target="blank"
          >
            <i className="fa-twitter"> </i>
          </a>
        </li>
        <li className="socials-container-link">
          <a
            href="https://www.facebook.com"
            title="Follow us on Facebook"
            target="blank"
          >
            <i className="fa-facebook"> </i>
          </a>
        </li>
        <li className="socials-container-link">
          <a
            href="https://www.google.com"
            title="Follow us on Google+"
            target="blank"
          >
            <i className="fa-google"> </i>
          </a>
        </li>
        <li className="socials-container-link">
          <a
            href="https://www.instagram.com"
            title="Follow us on Instagram"
            target="blank"
          >
            <i className="fa-instagram"> </i>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SocialMediaLink;
