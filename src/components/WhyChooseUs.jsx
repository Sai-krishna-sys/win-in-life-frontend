import {
  Award,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Target,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Child-Centred Approach",
    description:
      "Every child is understood as an individual, with care and support shaped around their unique needs.",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description:
      "Development goals and therapeutic support are planned according to each child's strengths and requirements.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    description:
      "A welcoming environment where children can learn, communicate, explore and build confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Holistic Development",
    description:
      "We focus on communication, learning, behavior, motor skills and everyday independence.",
  },
  {
    icon: Award,
    title: "Specialized Services",
    description:
      "Access to speech therapy, occupational therapy, behavioral therapy and special education.",
  },
  {
    icon: Sparkles,
    title: "Every Step Matters",
    description:
      "Small improvements are meaningful milestones. We celebrate progress and encourage every child.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why-us">
      <div className="container">
        <div className="why-heading">
          <span className="section-label">WHY WIN IN LIFE</span>

          <h2>
            A Place Where
            <span> Every Child Can Grow</span>
          </h2>

          <p>
            Our approach combines specialized support with patience,
            understanding and encouragement to help children move forward
            with confidence.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="why-card" key={reason.title}>
                <div className="why-icon">
                  <Icon size={22} />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;