import {
  ArrowRight,
  Brain,
  Heart,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-grid">

          {/* IMAGE SIDE */}
          <div className="about-images">

            <div className="about-image-main">
              <img
                src="/images/about.jpeg"
                alt="Interior of Win In Life Child Development Centre"
              />

              <div className="about-image-overlay">
                <strong>Learn • Grow • Shine</strong>
                <span>A happy place for every child</span>
              </div>
            </div>

            <div className="about-image-badge">
              <Heart size={17} />

              <div>
                <strong>Child-Centred</strong>
                <span>Care & Support</span>
              </div>
            </div>

          </div>

          {/* CONTENT SIDE */}
          <div className="about-content">

            <span className="section-label">
              ABOUT WIN IN LIFE
            </span>

            <h2>
              Helping Children
              <span> Learn, Grow & Thrive</span>
            </h2>

            <p>
              Win In Life Child Development Centre is a warm, supportive
              and child-friendly space dedicated to helping children develop
              communication, learning, behavioral, motor and everyday life
              skills.
            </p>

            <p>
              Our approach focuses on understanding every child's unique
              strengths and needs. Through specialized therapy, education
              and personalized support, we encourage children to become
              more confident, independent and happy learners.
            </p>

            {/* ABOUT INFORMATION */}
            <div className="about-info-grid">

              <div className="about-info-card about-info-red">
                <div className="about-info-icon">
                  <Heart size={20} />
                </div>

                <div>
                  <strong>Child-Centred Care</strong>
                  <span>
                    Every child receives individual attention.
                  </span>
                </div>
              </div>

              <div className="about-info-card about-info-green">
                <div className="about-info-icon">
                  <Brain size={20} />
                </div>

                <div>
                  <strong>Development Support</strong>
                  <span>
                    Supporting communication and development.
                  </span>
                </div>
              </div>

              <div className="about-info-card about-info-blue">
                <div className="about-info-icon">
                  <Target size={20} />
                </div>

                <div>
                  <strong>Individual Goals</strong>
                  <span>
                    Personalized plans based on each child's needs.
                  </span>
                </div>
              </div>

              <div className="about-info-card about-info-yellow">
                <div className="about-info-icon">
                  <Users size={20} />
                </div>

                <div>
                  <strong>Family Support</strong>
                  <span>
                    Working together with parents and families.
                  </span>
                </div>
              </div>

            </div>

            {/* HIGHLIGHT */}
            <div className="about-highlight">

              <div className="about-highlight-icon">
                <Sparkles size={19} />
              </div>

              <div>
                <strong>
                  Every child has the potential to grow.
                </strong>

                <span>
                  We focus on their strengths, needs and individual journey.
                </span>
              </div>

            </div>

            <a
              href="#services"
              className="secondary-button"
            >
              Explore Our Services
              <ArrowRight size={17} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;