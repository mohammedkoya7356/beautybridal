import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    date: ''
  });

  // Update input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit booking
  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("SENDING BOOKING:", {
    productId: product?._id,
    productTitle: product?.title,
    productPrice: Number(product?.price),  // FIXED
    ...formData
  });

  try {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/bookings`, {
      productId: product._id,
      productTitle: product.title,
      productPrice: Number(product.price),  // FIXED
      ...formData
    });

    navigate("/thankyou", { state: { product, formData } });

  } catch (error) {
    console.error("Error submitting booking:", error);
    alert("Booking failed. Check backend logs for the actual error.");
  }
};


  // Prevent accessing page without selecting a product
  if (!product) {
    return (
      <div className="container my-5">
        <p>No product selected.</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
  <div className="booking-wrapper">
    <div className="booking-layout">

      {/* LEFT SIDE – INSTRUCTIONS */}
      <div className="booking-info">
        <h2 className="info-title"></h2>

        <ul className="info-list">
          <li>നിങ്ങളുടെ പേരും ഫോൺ നമ്പറും അഡ്രസ്സും അടയാളപ്പെടുത്തുക</li>
          <li>നിങ്ങളുടെ ഫംഗ്ഷൻ ഡേറ്റ് അടയാളപ്പെടുത്തുക</li>
          <li>ദയവായി എല്ലാ വിശദാംശങ്ങളും ശരിയായി പൂരിപ്പിക്കുക..</li>
          <li>ഫംഗ്ഷന്റെ തലേന്ന് കൊണ്ടോയിട്ട് പിറ്റേന്ന് തിരിച്ച് ഏൽപ്പിക്കേണ്ടതാണ്</li>
          <li>സ്ഥിരീകരണത്തിന് ശേഷം ഞങ്ങളുടെ ടീം നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.</li>

        </ul>

        <p className="info-note">
          
        </p>
      </div>

      {/* RIGHT SIDE – BOOKING CARD */}
      <div className="booking-card">

        {/* Selected Product Preview */}
        <div className="selected-product">
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="booking-group">
            <div className="booking-step">1</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-group">
            <div className="booking-step">2</div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-group">
            <div className="booking-step">3</div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="booking-group">
            <div className="booking-step">4</div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="booking-btn">
            Submit Booking
          </button>

        </form>
      </div>

    </div>
  </div>
);

};

export default BookingPage;
