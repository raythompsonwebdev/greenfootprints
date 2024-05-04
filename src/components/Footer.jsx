import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul id="footer-nav">
        <li className="footer-nav-links">
          <Link to="/" className="footer-nav-link" title="Home page">
            Home
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link
            to="/whatcando"
            className="footer-nav-link"
            title="What you can page"
          >
            Can Do
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link
            to="/recycling"
            className="footer-nav-link"
            title="Recycling page"
          >
            Recycling
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link
            to="/collections"
            className="footer-nav-link"
            title="Recycling collection page"
          >
            Collections
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link
            to="/tenways"
            className="footer-nav-link"
            title="Ten ways to recycle page"
          >
            10 Ways
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link
            to="/recyclingfacts"
            className="footer-nav-link"
            title="Recycling facts page"
          >
            Facts
          </Link>
        </li>
        <li className="footer-nav-links">
          <Link to="/contact" className="footer-nav-link" title="Contact page">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
