import React from 'react';
import './ThankYou.css'; // 👈 import the CSS

const ThankYou = () => {
  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-card">
        <h2>🎉 Thank you for booking!</h2>
        <p>We’ll contact you soon with more details.</p>
        <a href="/" className="back-home">Go back to Home</a>
      </div>
    </div>
  );
};

export default ThankYou;
