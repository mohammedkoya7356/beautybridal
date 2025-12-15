import React, { useEffect } from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Footer = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      easing: "ease",
    });

    sr.reveal(".footer-section", { origin: "bottom", interval: 200 });
    sr.reveal(".footer-bottom", { origin: "bottom", delay: 600 });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* LOGO SECTION */}
        <div className="footer-section footer-logo-section">
          <img
            src="/src/assets/Gemini_Generated_Image_ppimjdppimjdppim.png"
            alt="Beauty Bridal Logo"
            className="footer-logo"
          />
          <h3>Beauty Bridal</h3>
        </div>

        {/* CONTACT US */}
        <div className="footer-section">
          <h3></h3>

          <p className="contact-item">
            <FaPhoneAlt />
            <a href="tel:+919526720702">95267 20702</a>
          </p>

          <p className="contact-item">
            <FaWhatsapp />
            <a
              href="https://wa.me/919526720702"
              target="_blank"
              rel="noopener noreferrer"
            >
              95267 20702
            </a>
          </p>

          <p className="contact-item">
            <FaEnvelope />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=beautybridalchemmad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              beautybridalchemmad@gmail.com
            </a>
          </p>

          <p className="contact-item">
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Chemmad,+Kerala+676306"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chemmad, Kerala 676306
            </a>
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Social</h3>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/17XkSa6XyP/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="icon" />
            </a>

            <a
              href="https://www.instagram.com/beautybridal_cmd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>

      </div> {/* ✅ footer-content CLOSED */}

      {/* FOOTER CREDIT */}
      <p className="footer-bottom">
        © Developed by{" "}
        <a
          href="https://www.linkedin.com/in/muhammed-koya-a3515b372/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Mohammed Koya
        </a>
      </p>
    </footer>
  );
};

export default Footer;
