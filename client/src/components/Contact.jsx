
import "../css/contact.css";
import ReviewForm from "./ReviewForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Please fill out the form below or contact
          us directly.
        </p>
      </header>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Our Location</h2>
          <p>
            Vista Nairobi,
            <br />
            Mbagathi Ridge,
            <br />
            Nairobi, Kenya
          </p>
          <h3>Phone</h3>
          <p>+254 (0) 709 195 256</p>
          <h3>Email</h3>
          <p>
            <a href="mailto:sales@hemingways.co">sales@hemingways.co</a>
          </p>
        </div>

        <div className="map-container">
          <h2>Find Us Here</h2>
          <iframe
            title="Hemingways Nairobi Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.196047171162!2d36.79805541530063!3d-1.3494848990251546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10c06b0b11d7%3A0x8d929bd8e40dcbf8!2sHemingways%20Nairobi!5e0!3m2!1sen!2ske!4v1631267801230!5m2!1sen!2ske"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>

      <section>
      <ReviewForm />
      </section>
    </div>
  );
};

export default Contact;
