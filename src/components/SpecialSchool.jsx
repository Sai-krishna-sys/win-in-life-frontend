import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Heart,
} from "lucide-react";

const SpecialSchool = () => {
  const points = [
    "Individual attention based on learning needs",
    "Support for communication and classroom participation",
    "Development of functional and life skills",
    "Structured and engaging learning activities",
  ];

  return (
    <section
      className="special-school-section"
      id="special-school"
    >
      <div className="container">
        <div className="special-school-card">
          <div className="special-school-content">
            <div className="special-school-icon">
              <BookOpen size={25} />
            </div>

            <span className="section-label">SPECIAL SCHOOL</span>

            <h2>
              Learning That
              <span> Meets Every Child Where They Are</span>
            </h2>

            <p>
              Our special education environment supports children through
              structured learning, individual attention and activities that
              encourage communication, confidence and independence.
            </p>

            <div className="special-school-points">
              {points.map((point) => (
                <div
                  className="special-school-point"
                  key={point}
                >
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="primary-button">
              Talk to Our Team
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="special-school-photo">
            <img
              src="/images/special-school.jpeg"
              alt="Children learning at Win In Life Special School"
            />

            <div className="school-photo-badge">
              <Heart size={16} />
              <div>
                <strong>Learn • Grow • Thrive</strong>
                <span>A caring learning environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSchool;