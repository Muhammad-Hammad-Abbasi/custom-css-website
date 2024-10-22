import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-content">
          <h1 className="footer-heading">Follow Me</h1>
          <div className="social-links">
            <Link
              href="https://www.linkedin.com/in/hammad-abbasi-95388628b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={30} className="icon" />
              LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100068906216007"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaFacebook size={30} className="icon" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/mr_hammad.abbasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={30} className="icon" />
              Instagram
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
