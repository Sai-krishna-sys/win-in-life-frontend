import {
  ArrowUp,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "+91 8106361430";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="footer-mark">W</div>

              <div>
                <strong>Win In Life</strong>
                <span>Child Development Centre</span>
              </div>
            </a>

            <p>
              Supporting children through specialized therapy, special
              education and compassionate care.
            </p>

            <div className="footer-rating">
              <span className="footer-stars">★★★★★</span>
              <span>Trusted by families</span>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#special-school">Special School</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>

            <a href="#services">Speech Therapy</a>
            <a href="#services">Occupational Therapy</a>
            <a href="#services">Behavioral Therapy</a>
            <a href="#services">Special Education</a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Visit Us</h3>

            <div className="footer-contact-item">
              <MapPin size={17} />

              <span>
                Plot No-1357, Elephant Circle,
                <br />
                Pragathi Nagar, Hyderabad,
                <br />
                Telangana - 500090
              </span>
            </div>

            <div className="footer-contact-item">
              <Clock3 size={17} />

              <span>
                Mon - Sat
                <br />
                9:30 AM - 6:00 PM
              </span>
            </div>

            <a
              href="tel:+918106361430"
              className="footer-contact-item footer-phone"
            >
              <Phone size={17} />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Win In Life Child Development
            Centre. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;