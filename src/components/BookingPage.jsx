import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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

  // update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', { product, ...formData });
    // 👇 here you can POST to your backend API
    // await fetch('/api/book', { method:'POST', body: JSON.stringify({product,...formData}) })

    // go to thank you page without reload
    navigate('/thankyou', { state: { product, formData } });
  };

  // if user opens /book directly without selecting a product
  if (!product) {
    return (
      <div className="container my-5">
        <p>No product selected</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="booking-wrapper">
      <div className="booking-card">
        <h2 className="booking-title">
           <br />
          <span></span>
        </h2>

        {/* show selected product */}
        <div className="selected-product">
          <img src={product.img} alt={product.name} />
          <h4>{product.name}</h4>
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
              placeholder="Function Date"
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
  );
};

export default BookingPage;
