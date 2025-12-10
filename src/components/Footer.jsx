import React, { useEffect } from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Footer = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 2500,
      delay: 400,
      easing: "ease",
    });

    // Animate footer sections
    sr.reveal(".footer-section", { origin: "bottom", interval: 200 });
    sr.reveal(".footer-bottom", { origin: "bottom", delay: 600 });
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Products */}
        <div className="footer-section">
          <h3>Products</h3>
          <p>Headphones</p>
          <p>Earbuds</p>
          <p>Earphone</p>
          <p>Case</p>
        </div>

        {/* Payments */}
        <div className="footer-section">
          <h3>Payments</h3>
          <p>Return Policy</p>
          <p>Refunds Policy</p>
          <p>Support</p>
          <p>Terms Of Use</p>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Social</h3>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      <p className="footer-bottom">© CarpoolVenom All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
