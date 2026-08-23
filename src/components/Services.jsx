import {
  Brain,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Puzzle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const SERVICES_IMAGE = "/images/services.jpeg";

const services = [
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description:
      "Fun and engaging support to improve communication, speech, language and expressive skills.",
    color: "red",
    tag: "Speak • Express • Connect",
  },
  {
    icon: Puzzle,
    title: "Occupational Therapy",
    description:
      "Play-based activities that help children develop motor, sensory and everyday living skills.",
    color: "green",
    tag: "Play • Learn • Grow",
  },
  {
    icon: Brain,
    title: "Behavioral Therapy",
    description:
      "Positive and supportive strategies designed to encourage confidence, communication and healthy behavior.",
    color: "blue",
    tag: "Understand • Support • Shine",
  },
  {
    icon: GraduationCap,
    title: "Special Education",
    description:
      "Personalized learning support created around each child's unique abilities, interests and learning style.",
    color: "yellow",
    tag: "Learn • Explore • Achieve",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Individual care plans created with love and attention around every child's unique goals and development.",
    color: "purple",
    tag: "Care • Support • Celebrate",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-heading services-heading">
          <div>
            <div className="colorful-label">
              <Sparkles size={15} />
              <span>OUR SERVICES</span>
            </div>

            <h2>
              Helping Children
              <span>Grow, Learn & Shine ✨</span>
            </h2>
          </div>

          <p>
            Every child is unique. Our friendly team provides specialized
            therapy, education and personalized support to help children
            discover their abilities and reach their potential.
          </p>
        </div>

        {/* SERVICES CONTENT */}
        <div className="services-layout">

          {/* IMAGE */}
          <div className="services-image colorful-services-image">
            <img
              src={SERVICES_IMAGE}
              alt="Children learning and developing at Win In Life Child Development Centre"
            />

            <div className="services-image-overlay"></div>

            {/* Floating decoration */}
            <div className="services-floating-shape shape-star">
              ★
            </div>

            <div className="services-floating-shape shape-heart">
              ♥
            </div>

            <div className="services-image-caption">
              <span>LEARNING • DEVELOPMENT • GROWTH</span>

              <strong>
                A happy place where
                <br />
                every child can shine 🌟
              </strong>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className={`service-card service-card-${service.color}`}
                  key={service.title}
                >
                  {/* Number */}
                  <div className="service-number">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="service-icon">
                    <Icon size={25} strokeWidth={2.2} />
                  </div>

                  {/* Content */}
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-tag">
                    {service.tag}
                  </span>

                  {/* Button */}
                  <a
                    href="#contact"
                    className="service-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </a>

                  {/* Decorative circle */}
                  <div className="service-decoration"></div>
                </article>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MESSAGE */}
        <div className="services-bottom-message">
          <div className="services-bottom-icon">
            💛
          </div>

          <div>
            <strong>Every little step is a big achievement!</strong>
            <p>
              We celebrate progress, encourage curiosity and create a
              positive environment where children feel safe and confident.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;