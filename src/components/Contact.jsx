import { useState } from "react";
import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "https://win-in-life-backend.onrender.com/api/reservations";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childName: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((current) => ({
      ...current,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `${API_URL}/reservations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to submit assessment request."
        );
      }

      setSuccessMessage(
        "Assessment request submitted successfully. Our team will contact you soon."
      );

      setFormData({
        parentName: "",
        phone: "",
        childName: "",
        email: "",
        service: "",
        preferredDate: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setErrorMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="container">

        <div className="contact-heading">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Take the
            <span> Next Step Together</span>
          </h2>

          <p>
            If you would like to learn more about our
            services or discuss your child's needs,
            reach out to Win In Life Child Development
            Centre.
          </p>

        </div>

        <div className="contact-grid">

          {/* ================= CONTACT INFO ================= */}

          <div className="contact-info">

            <div className="contact-info-header">

              <span className="contact-small-label">
                WIN IN LIFE CHILD DEVELOPMENT CENTRE
              </span>

              <h3>
                We're here to
                <span> support your journey.</span>
              </h3>

            </div>

            <div className="contact-details">

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>

                <div>

                  <strong>
                    Visit Us
                  </strong>

                  <p>
                    Plot No-1357, Elephant Circle,
                    <br />
                    Pragathi Nagar, Hyderabad,
                    <br />
                    Telangana - 500090
                  </p>

                </div>

              </div>

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Clock3 size={20} />
                </div>

                <div>

                  <strong>
                    Opening Hours
                  </strong>

                  <p>
                    Monday - Saturday
                    <br />
                    9:30 AM - 6:00 PM
                    <br />
                    <span>
                      Sunday: Closed
                    </span>
                  </p>

                </div>

              </div>

            </div>

            <div className="contact-actions">

              <a
                href="tel:+918106361430"
                className="contact-phone-button"
              >
                <Phone size={18} />
                Call the Centre
              </a>

              <a
                href="https://wa.me/918106361430"
                target="_blank"
                rel="noreferrer"
                className="contact-whatsapp-button"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>

            </div>

          </div>

          {/* ================= FORM ================= */}

          <div className="contact-form-card">

            <div className="form-heading">

              <div className="form-icon">
                <Send size={20} />
              </div>

              <div>

                <h3>
                  Request an Assessment
                </h3>

                <p>
                  Share your details and our team
                  can get in touch with you.
                </p>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + PHONE */}

              <div className="form-row">

                <div className="form-field">

                  <label htmlFor="parentName">
                    Parent / Guardian Name
                  </label>

                  <input
                    id="parentName"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="form-field">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* CHILD NAME */}

              <div className="form-field">

                <label htmlFor="childName">
                  Child's Name
                </label>

                <input
                  id="childName"
                  type="text"
                  placeholder="Enter child's name"
                  value={formData.childName}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* EMAIL */}

              <div className="form-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              {/* SERVICE */}

              <div className="form-field">

                <label htmlFor="service">
                  Service Interested In
                </label>

                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="speech-therapy">
                    Speech Therapy
                  </option>

                  <option value="occupational-therapy">
                    Occupational Therapy
                  </option>

                  <option value="behavioral-therapy">
                    Behavioral Therapy
                  </option>

                  <option value="special-education">
                    Special Education
                  </option>

                  <option value="assessment">
                    General Assessment
                  </option>

                </select>

              </div>

              {/* DATE */}

              <div className="form-field">

                <label htmlFor="preferredDate">
                  Preferred Assessment Date
                </label>

                <input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* MESSAGE */}

              <div className="form-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                />

              </div>

              {/* SUCCESS */}

              {successMessage && (
                <div className="form-success-message">
                  {successMessage}
                </div>
              )}

              {/* ERROR */}

              {errorMessage && (
                <div className="form-error-message">
                  {errorMessage}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={submitting}
              >

                <Send size={17} />

                {submitting
                  ? "Submitting..."
                  : "Request an Assessment"}

              </button>

              <p className="form-note">
                Your information will only be used to
                contact you regarding your enquiry.
              </p>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;