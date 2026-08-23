import {
  ArrowRight,
  Brain,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Star,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-content">
          <div className="hero-badge">
            <HeartHandshake size={16} />
            <span>Compassionate Child Development & Care</span>
          </div>

          <h1>
            Helping Children
            <span>Win In Life.</span>
          </h1>

          <p className="hero-description">
            A caring and joyful environment for therapy, special education
            and developmental support — helping every child discover their
            strengths, build confidence and reach their potential.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">
            <a href="#contact" className="primary-button">
              Book an Assessment
              <ArrowRight size={17} />
            </a>

            <a href="#services" className="secondary-button">
              Explore Services
            </a>
          </div>

          {/* TRUST CARD */}
          <div className="hero-trust">
            <div className="trust-icon">
              <Star size={18} fill="currentColor" />
            </div>

            <div className="trust-content">
              <strong>Trusted Child Development Support</strong>
              <span>Personalized care for every child's journey</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}
        <div className="hero-visual">
          {/* MAIN IMAGE */}
          <div className="hero-image-wrapper">
            <img
              src="/images/hero.jpeg"
              alt="Interior of Win In Life Child Development Centre"
              className="hero-image"
            />

            <div className="hero-image-overlay">
              <span>Win In Life</span>
              <small>Child Development Centre</small>
            </div>
          </div>

          {/* ================= RATING CARD ================= */}
          <div className="hero-card hero-card-rating">
            <div className="rating-top">
              <strong>5.0</strong>
              <div className="rating-stars">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
              </div>
            </div>

            <small>Family Rating</small>
          </div>

          {/* ================= CARE CARD ================= */}
          <div className="hero-card hero-card-care">
            <div className="care-dot"></div>

            <div>
              <strong>Caring Environment</strong>
              <small>Supporting every child's growth</small>
            </div>
          </div>

          {/* ================= INFO CARDS ================= */}
          <div className="hero-info-cards">
            {/* Communication */}
            <div className="hero-info-card hero-info-red">
              <div className="hero-info-icon">
                <MessageCircle size={18} />
              </div>

              <div className="hero-info-text">
                <strong>Communication</strong>
                <span>Speech & language support</span>
              </div>
            </div>

            {/* Development */}
            <div className="hero-info-card hero-info-green">
              <div className="hero-info-icon">
                <Brain size={18} />
              </div>

              <div className="hero-info-text">
                <strong>Development</strong>
                <span>Motor & sensory development</span>
              </div>
            </div>

            {/* Learning */}
            <div className="hero-info-card hero-info-yellow">
              <div className="hero-info-icon">
                <Sparkles size={18} />
              </div>

              <div className="hero-info-text">
                <strong>Learning</strong>
                <span>Individual learning support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DECORATIONS ================= */}
      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>
      <div className="hero-decoration hero-decoration-three"></div>
    </section>
  );
};

export default Hero;